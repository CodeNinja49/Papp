const getFilterbyProjectAndCitation = (
  projectIdList = [],
  citationIdList = [],
  userObj
) => {
  let query_array = [];
  query_array = { bool: { must: [], should: [], must_not: [] } };
  if (projectIdList.length) {
    const str_platform =
      "(Profiles.Platform.id:(" + projectIdList.join(" OR ") + "))";
    const qy = { query_string: { query: str_platform } };
    query_array["bool"]["must"].push(qy);
  }
  if (citationIdList.length) {
    const str_citation =
      "(Profiles.Main_Profile.id:(" + citationIdList.join(" OR ") + "))";
    var qy = { query_string: { query: str_citation } };
    query_array["bool"]["must"].push(qy);
  }
  let domain_email_query = "";
  if (userObj.domain_type === "independent") {
    domain_email_query = "( user_id:(" + userObj.user_id + "))";
  } else {
    domain_email_query = "(domain_email : (" + userObj.domain_email + "))";
  }
  var qy2 = {
    query_string: {
      default_operator: "AND",
      query: domain_email_query,
    },
  };
  query_array["bool"]["must"].push(qy2);
  return { query_array: query_array };
};

export default getFilterbyProjectAndCitation;
