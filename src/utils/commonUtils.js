import moment from "moment";
import createQuery from "./filter";
export const createFilterDataset = (inputObj, field1, field2, fieldValue) => {
  const keys = Object.keys(inputObj); //get keys from object as an array
  const result = [];
  let dataSetRowCount = 0;
  keys.forEach(function (key) {
    //loop through keys array
    const arr = key.split(field1);
    if (key.includes(field1)) {
      const dynamicValueKey = arr.length > 1 ? fieldValue + arr[1] : fieldValue;
      const operator = arr.length > 1 ? field2 + arr[1] : field2;
      const all = arr.length > 1 ? field1 + arr[1] : field1;
      const valueArr = inputObj[dynamicValueKey];
      // for (let i = 0; i < multipleInputs.length; i++) {
      if (valueArr) {
        dataSetRowCount++;
        const isObject = typeof inputObj[all] === "object";
        result.push({
          key: isObject ? inputObj[all].name : inputObj[all],
          opt: inputObj[operator],
          value: valueArr,
          ...(isObject
            ? {
                id: inputObj[all].id,
                type: inputObj[all].type,
                sub_templates: inputObj[all].sub_templates,
              }
            : {}),
        });
      }
      // }
    }
  });
  return { result: result, dataSetRowCount: dataSetRowCount };
};

export const createDateFilterDataset = (
  inputObj,
  field1,
  field2,
  startDateField,
  endDateField
) => {
  const keys = Object.keys(inputObj); //get keys from object as an array
  const result = [];
  let dataSetRowCount = 0;
  keys.forEach(function (key) {
    //loop through keys array
    const arr = key.split(field1);
    if (key.includes(field1)) {
      const startDate =
        arr.length > 1 ? startDateField + arr[1] : startDateField;
      const endDate = arr.length > 1 ? endDateField + arr[1] : endDateField;
      const operator = arr.length > 1 ? field2 + arr[1] : field2;
      const all = arr.length > 1 ? field1 + arr[1] : field1;
      dataSetRowCount++;
      console.log("inputObj[endDate]", inputObj[endDate]);
      if (inputObj[endDate] || inputObj[startDate]) {
        const endDateVal = inputObj[endDate]
          ? moment(inputObj[endDate]).toDate().toISOString()
          : new Date().toISOString();
        const startDateVal = inputObj[startDate]
          ? moment(inputObj[startDate]).toDate().toISOString()
          : new Date("01/01/1699").toISOString();
        result.push({
          key: inputObj[all],
          opt: inputObj[operator],
          value: {
            endDate: {
              date: endDateVal,
            },
            startDate: {
              date: startDateVal,
            },
          },
        });
      }
    }
  });
  return { result: result, dataSetRowCount: dataSetRowCount };
};

export const createSearchPayload = (
  userObj,
  projectDataset,
  citationDataset,
  keywordDataset,
  classificationDataset,
  namesDataset,
  numbersDataset,
  metaDataDataset,
  datesDataset,
  countryDataset,
  factoryVariables
) => {
  const firstClassificationOperator =
    classificationDataset && classificationDataset.length
      ? classificationDataset[0].opt
      : "AND";
  const firstDatesOperator =
    datesDataset && datesDataset.length ? datesDataset[0].opt : "AND";
  const firstKeywordsOperator =
    keywordDataset && keywordDataset.length ? keywordDataset[0].opt : "AND";
  const firstMetaOperator =
    metaDataDataset && metaDataDataset.length ? metaDataDataset[0].opt : "AND";
  const firstNamesOperator =
    namesDataset && namesDataset.length ? namesDataset[0].opt : "AND";
  const firstNumberOperator =
    numbersDataset && numbersDataset.length ? numbersDataset[0].opt : "AND";

  const data_array = {
    projectCode: projectDataset,
    citationCategory: citationDataset,
    user_id: userObj.user_id,
    classification_operator: firstClassificationOperator,
    classificationfieldModel: classificationDataset,
    date_operator: firstDatesOperator,
    datefieldModel: datesDataset,
    keyword_operator: firstKeywordsOperator,
    keywordfieldModel: keywordDataset,
    metadata_operator: firstMetaOperator,
    metadatafieldModel: metaDataDataset,
    names_operator: firstNamesOperator,
    namesfieldModel: namesDataset,
    numbers_operator: firstNumberOperator,
    numbersfieldModel: numbersDataset,
    countryselected: countryDataset,
    domain_type: userObj.domain_type,
    domain_email: userObj.domain_email,
  };
  console.log("dat_array", data_array, keywordDataset);
  const queryObj = createQuery(data_array);
  console.log("query", JSON.stringify(queryObj));
  if (queryObj.status == "failed") {
    return queryObj;
  }
  return {
    app_id: "3",
    user_id: userObj.user_id,
    factoryVariables: JSON.stringify(factoryVariables),
    family: 0,
    msg_string: `Projects`,
    query: queryObj.query_array,
    search_terms: [],
    sortBy: "pub_date",
    order: "desc",
    projectId: projectDataset.map((p) => p.id).join(","),
  };
};
export const continueMsg =
  "This account is already in use. Do you want to continue and by doing so the first person will be logged out";
const EXPIRED_LOGIN_ATTEMPT = "Expired Account Login Attempt";
const INVALID_ERROR = "Incorrect Login Attempt";
const ACCOUNT_ACTIVE_ERROR =
  "Account has not yet been activated as account activation date is yet to come";
const UNEXPECTED_ERROR = "Unexpected error occured";
const ANOTHER_USER_LOGGED_IN = "Another user is currently logged In";
const SESSION_EXPIRED_ANOTHER_USER_LOGGEDIN =
  "Session expired as user with same credentials has logged in on another browser. Do you want to continue to login?";
const SESSION_NOT_SET = "session not set";
const SESSION_EXPIRED =
  "session expired as user with same credentials has logged in on another browser";
const ANOTHERUSER_LOGIN =
  "This account is already in use. Do you want to continue?";
const CLIENT_ALREADYLOGIN =
  "Client is already using the account. Do you want to continue";
export function checkIsValidUser(reason) {
  switch (reason) {
    case ANOTHER_USER_LOGGED_IN:
      return false;
    case SESSION_EXPIRED_ANOTHER_USER_LOGGEDIN:
      return false;
    case SESSION_NOT_SET:
      return false;
    case SESSION_EXPIRED:
      return false;
    default:
      return true;
  }
}

export function checkUserLoggedIn(reason) {
  switch (reason) {
    case ANOTHER_USER_LOGGED_IN:
      return false;
    case SESSION_EXPIRED_ANOTHER_USER_LOGGEDIN:
      return false;
    case SESSION_EXPIRED:
      return false;
    case ANOTHERUSER_LOGIN:
      return false;
    case CLIENT_ALREADYLOGIN:
      return false;
    default:
      return true;
  }
}

export function createEditCitationDetailsPayload(
  reduxFormValues,
  previousValues,
  field1
) {
  const payloadArray = [];
  const keys = Object.keys(reduxFormValues);
  keys.forEach(function (key) {
    const arr = key.split(field1);
    if (key.includes(field1)) {
      const oldCitation = previousValues.filter(
        (c) => c.citation_category_id === arr[1]
      );
      const firstIns = oldCitation[0] ? oldCitation[0] : {};
      if (firstIns.citation_category_name !== reduxFormValues[key]) {
        payloadArray.push({
          target: "citation_category",
          target_id: arr[1],
          newName: reduxFormValues[key],
          previousName: firstIns.citation_category_name,
          app_id: "4",
        });
      }
    }
  });
  return payloadArray;
}

export function getLoginError(error) {
  const validError = [
    EXPIRED_LOGIN_ATTEMPT,
    ACCOUNT_ACTIVE_ERROR,
    INVALID_ERROR,
    UNEXPECTED_ERROR,
  ];
  const result = validError.filter((err) => err === error);
  if (result.length) {
    return result[0];
  }
  return "";
}

export function validateMetaData(metaDataObj) {
  return metaDataObj.filter((obj) => obj.edit === true);
}

export function validateMetaSubmit(metaDataObj) {
  const isEdit = validateMetaData(metaDataObj).length;
  const res = metaDataObj.filter((obj) => obj.edit === true && !obj.name);
  const isSubMeta = metaDataObj.filter((obj) => obj.sub_templates);
  const subMeta = metaDataObj.filter(
    (obj) =>
      obj.edit === true &&
      obj.sub_templates &&
      obj.sub_templates.filter((sub) => !sub.name).length > 0
  );
  return isEdit ? res.length || (isSubMeta.length && subMeta.length) : false;
}
