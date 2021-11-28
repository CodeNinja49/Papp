var lang = "";
var bread = 1;
var google_analytics_tracking_id = "";
var maintain_check_global;
// var domain_email = "";
try {
  lang = "eng";
  //   domain_email = $("#domain_email").val();
  //   domain_type = $("#domain_type").val();
  //   console.log(domain_email);
  bread = lang;
} catch (error) {
  bread = 0;
  lang = "eng";
}
try {
  //   google_analytics_tracking_id = $("#google_analytics_tracking_id").val();
} catch (error) {
  lang = "";
}
if (lang == "eng") {
  var lang_vars_or_keyword = "OR";
  var lang_vars_and_keyword = "AND";
  var lang_vars_not_keyword = "NOT";
  var lang_vars_ALL_keyword = "ALL";
  var lang_vars_Full_Text = "Full Text";
  var lang_vars_Abstract = "Abstract";
  var lang_vars_Claim = "Claim";
  var lang_vars_Title = "Title";
  var lang_vars_Description = "Description";
  var lang_vars_Title_Abstract_Claim = "Title / Abstract / Claim";
  var lang_vars_Title_Abstract = "Title / Abstract";
  var lang_vars_Publication_Date = "Publication Date";
  var lang_vars_Application_Date = "Application Date";
  var lang_vars_Priority_Date = "Priority Date";
  var lang_vars_Earliest_Priority_Date = "Earliest Priority Date";
  var lang_vars_Publication_Number = "Publication Number";
  var lang_vars_Application_Number = "Application Number";
  var lang_vars_Priority_Number = "Priority Number";
  var lang_vars_Earliest_Priority_Number = "Earliest Priority Number";
  var lang_vars_Assignee = "Assignee";
  var lang_vars_Inventor = "Inventor";
  var lang_vars_Assignee_Standardized = "Assignee Standardized";

  var lang_vars_Classification_CPC_or_IPC = "Classification CPC or IPC";
  var lang_vars_Classification_IPC = "Classification IPC";
  var lang_vars_Classification_CPC = "Classification CPC";
  var lang_vars_Classification_ECLA = "Classification ECLA";
  var lang_vars_Classification_US_Main_Further =
    "Classification US Main & Further";
  var lang_vars_Family_Members = "Family Members";
  var lang_vars_Backward_Citations = "Backward Citations";
  var lang_vars_Forward_Citations = "Forward Citations";
  var lang_vars_CPC_Classification = "CPC Classification";
  var lang_vars_EP_Classification = "EP Classification";
  var lang_vars_IPC_Classification = "IPC Classification";
  var lang_vars_US_Classification = "US Classification";
  var lang_vars_Legal_Status = "Legal Status";
  var lang_vars_Platform = "Platform";
  var lang_vars_Main_Profile = "Main Profile";
  var lang_vars_Sub_Profile = "Sub Profile";
  var lang_vars_Standardized_Assignees = "Standardized Assignee";
  var lang_vars_No_Patents_in_the_profile = "No Patents in the profile";
  var lang_vars_Some_error_occured_Please_try_again_later =
    "Some error occured Please try again later";
  var lang_vars_Please_select_atleast_one_column_to_export =
    "Please select atleast one column to export";
  var lang_vars_Template_field_name_cannot_be_empty_Please_enter_a_value =
    "Template field name cannot be empty! Please enter a value";
  var lang_vars_This_template_field_already_exists_Please_enter_a_new_name =
    "This template field already exists Please enter a new name";
  var lang_vars_Please_login_to_add_fields = "Please login to add fields";
  var lang_vars_are_you_sure_you_want_to_delete_this_field =
    "Are you sure you want to delete this field ?";
  var lang_vars_This_Tag_name_already_exists_in_this_field =
    "This Tag name already exists in this field.Please enter a new name";
  var lang_vars_Yes_Im_sure = "Yes I’m sure";
  var lang_vars_Data_Successfully_Uploaded = "Data Successfully Uploaded";
  var lang_vars_input_field_cannot_be_empty = "Input field cannot be empty";
  var lang_vars_msg_to_select_atleast_one_searchterm_or_platform =
    "Please select at least 1 platform OR  enter a search term";
  var lang_vars_msg_to_select_atleast_one_searchterm_or_project_code =
    "Please select at least 1 project code OR  enter a search term";
  var lang_vars_msg_to_select_atleast_one_country =
    "Please select atleast one Country";
  var lang_vars_please_enter_correct_date = "Please enter correct date";
  var lang_vars_please_enter_correct_date_in_correct_format_as_mentioned_in_placeholder =
    "Please enter the date in correct format as mentioned on placeholder";
  var lang_vars_your_session_has_expired_due_to_login_at_another_browser =
    "Your session has expired due to account login at another browser.";
  var lang_vars_your_session_expired_due_to_inactivity_please_login_again =
    "Your session has expired due to inactivity, Please login again.";
  var lang_vars_enter_atleast_one_patent_for_search =
    "Enter atleast one patent number to search";
  var lang_vars_checking_data_integrity = "Checking Data Integrity...";
  var lang_vars_uploading_data = "Uploading Data";
  var lang_vars_data_successfully_uploaded = "Data Successfully Uploaded";
  var lang_vars_data_successfully_uploaded_except_some_invalid_patent =
    "Data Successfully Uploaded except some Invalid Patents";
  var lang_vars_formatting_data = "Formatting Data";
  var lang_vars_request_failed = "Request Failed";
  var lang_vars_publications_keyword = "Publications";
  var lang_vars_families_keyword = "Families";
  var lang_vars_template_field_deleted_successfully =
    "Template Field Deleted Successfully!.";
  var lang_vars_template_field_updated_successfully =
    "Template Field Updated Successfully";
  var lang_vars_tag_name_cannot_be_empty = "Tag Name cannot be empty";
  var lang_vars_are_you_sure_to_delete_this_tag =
    "Are you sure to delete this tag?";
  var lang_vars_are_you_sure__to_delete_this_standard_assignee =
    "Are you sure to delete this Standard Assignee?";
  var lang_vars_are_you_sure_to_copy_this_patent_to =
    "Are you sure to copy this patent to";
  var lang_vars_are_you_sure_to_delete_this_patent =
    "Are you sure to delete this patent?";
  var lang_vars_are_you_sure_to_move_this_patent_to =
    "Are you sure to move this patent to";
  var lang_vars_are_you_sure_to_make_these_changes =
    "Are you sure you want to make these changes?";
  var lang_vars_please_select_platform = "Please select Platform";
  var lang_vars_please_select_main_profile = "Please select Main profile";
  var lang_vars_please_select_sub_profile = "Please select Sub Profile";
  var lang_vars_this_name_already_exists_for_this_patent =
    "This name already exists for this patent.";
  var lang_vars_no_go_back = "No Go back !";
  var lang_vars_no_emails_allowed_beside_johndeere =
    "No other emails allowed besides johndeere.com";
  var lang_vars_alert_start_date_cannotbe_empty_please_select_a_date =
    "Alert start date cannot be empty. Please select a date.";
  var lang_vars_platform_name_cannot_be_empty = "Platform name cannot be empty";
  var lang_vars_mainprofile_name_cannot_be_empty =
    "Main Profile name cannot be empty";
  var lang_vars_this_platform_already_exists_please_enter_a_new_name =
    "This Platform already exists.Please enter a new name.";
  var lang_vars_this_main_profile_already_exists_in_the_platform_msg =
    "This Main Profile already exists in the platform.Please enter a new name.";
  var lang_vars_subprofile_name_cannot_be_empty =
    "Sub Profile Name cannot be empty";
  var lang_vars_please_select_frequency = "Please select frequency.";
  var lang_vars_this_subprofile_already_exists_in_mainprofile =
    "This Sub Profile already exists in the Main Profile. Please enter a new name.";
  var lang_vars_are_you_sure_you_want_to_delete =
    "Are you sure you want to delete";
  var lang_vars_deletion_mail_successfully_sent =
    "Deletion Notification successfully sent";
  var lang_vars_please_enter_correct_main_profile_name_without_any_spaces =
    "Please enter correct Main Profile.(name with only spaces not allowed).";
  var lang_vars_please_enter_new_platform_name =
    "Please enter new platform name.";
  var lang_vars_please_enter_main_profile = "Please enter Main Profile.";
  var lang_vars_alerts_are_sentonly_on_weekdays_please_change_alert_start_date =
    "Alerts are only sent on weekdays from Monday to Friday. Please change the alert start date";
  var lang_vars_searches_anywhere_in_abstract =
    "Searches in the abstract of the patents.";
  var lang_vars_searches_anywhere_in_abstract_depending_on_lang =
    "Searches in the abstract depending upon the language provided; * is the language code";
  var lang_vars_searches_anywhere_in_claim =
    "Searches in the claims independent of the language";
  var lang_vars_searches_anywhere_in_claim_depending_on_lang =
    "Searches in the claim depending on the language; * is the language code";
  var lang_vars_searches_anywhere_in_title =
    "Searches in the title of the patent";
  var lang_vars_searches_anywhere_in_title_depending_on_lang =
    "Searches in the title depending upon the language provided; * is the language code";
  var lang_vars_searches_all_original_patent_assignees =
    "Searches name of the assignee of the patent i.e. the person or legal entity to which the entire right, title, and interest in the application has been assigned.";
  var lang_vars_searches_anywhere_in_inventor_of_patent =
    "Searches in the inventor field.";
  var lang_vars_searches_anywhere_in_publication_dates =
    "Searches in the publication date field.";
  var lang_vars_searches_based_on_publicationo =
    "Searches using publication identifier having country code, number and kind code.";
  var lang_vars_searches_anywhere_in_authority_code_independent_of_lang =
    "Searches in the authority codes independent of the language";
  var lang_vars_searches_application_number =
    "Searches all standardized application numbers without authority code";
  var lang_vars_searches_anywhere_in_application_date =
    "Searches in application date field";
  var lang_vars_searches_anywhere_in_earliest_priority_date =
    "Searches in earliest priority date field";
  var lang_vars_searches_all_patent_attorney_or_registered_agents =
    "Searches all patent attorneys or registered agents.";
  var lang_vars_searches_document_no_of_publication_being_cited =
    "Searches document number of the publication being cited";
  var lang_vars_searches_country_code_of_publication_being_cited =
    "Searches country code of the publication being cited";
  var lang_vars_searches_kind_codeof_publication_being_cited =
    "Searches kind code of the publication being cited";
  var lang_vars_searches_cpc_classification_numbers =
    "Searches CPC classification numbers.";
  var lang_vars_searches_ecla_classification_numbers =
    "Searches ECLA classification numbers.";
  var lang_vars_searches_fterm_classification_numbers =
    "Searches F term classification numbers.";
  var lang_vars_searches_ipc_classification_numbers =
    "Searches IPC classification numbers.";
  var lang_vars_searches_us_classification_numbers =
    "Searches US classification numbers";
  var lang_vars_searches_all_reassignees = "Searches all reassignees";
  var lang_vars_searches_all_examiner_names = "Searches all examiner name";
  var lang_vars_searches_description_of_patent =
    "Searches based on the description of the patent";
  var lang_vars_searches_description_of_patent_depending_on_lang =
    "Searches in the description depending upon the language provided; * is the language code";
  var lang_vars_searches_based_on_amended_claims =
    "Searches based on the ammended claims of the patent";
  var lang_vars_searches_based_on_amended_claims_depending_on_lang =
    "Searches in the amended claims depending upon the language provided; * is the language code";
  var lang_vars_searches_full_text =
    "Searches title OR abstract OR claims OR description";
  var lang_vars_search_all_country_kind_codes =
    "Searches all publication kind codes";
  var lang_vars_searches_legal_status = "Searches all legal status events";
  var lang_vars_searches_legal_status_dates = "Searches all legal status dates";
  var lang_vars_searches_all_non_patent_citations =
    "Searches all non-patent citations.";
  var lang_vars_searches_priority_date =
    "Searches all priority dates.(Range searching not allowed)";
  var lang_vars_searches_priority_number =
    "Searches all priority document number";
  var lang_vars_searches_priority_authority =
    "Searches all priority authority codes.";
  var lang_vars_searches_title_abstract_or_claims =
    "Searches all titles OR abstract OR claims independent of the language.";
  var lang_vars_derived_from_classification =
    "Derived from classification. Values include: Chemical, Chemical/Electrical, Design, Electrical,Electrical/Mechanical, Mechanical, Plant.";
  var lang_vars_anticipated_expirated_date_msg =
    "Anticipated expiration date is calculated according to the patenting authority and document kind and reflects the maximum life of the patent assuming maintenance fees are paid and term extensions are not in place";
  var lang_vars_adjusted_expiration_date_msg =
    "Adjusted expiration date/year contains a date adjusted by term adjustments made by the USPTO under 35 USC 154. Present forUS only";
  var lang_vars_patent_current_status_msg =
    "Searches by patent status of the patent.";
  var lang_vars_searches_all_current_assignee =
    "Searches by current assignee name.";
  var lang_vars_searches_publication_authority =
    "Searches all publication authority codes.";
  var lang_vars_searches_classification_fi =
    "Searches FI term classification numbers.";
  var lang_vars_share_url_copied = "Share url copied.";
  var lang_vars_npl_data_successfully_uploaded =
    "NPL Data Successfully uploaded.";
  var lang_vars_pdfs_that_were_not_found_in_zipped_are =
    "PDfs that were not found in zipped folder are : ";
  var lang_vars_to_upload_them_please_attach_their_pdfs_in_zip_and_try_again =
    "To upload them please attach their pdfs in zip and try again.";
  var lang_vars_no_data_is_their_in_csv_to_be_uploaded =
    "No data is there in CSV to be uploaded.";
  var lang_vars_no_data_uploaded_because_of_inexistence_of_correct_pdfs_in_zip =
    "No NPL Data Uploaded because of inexistence of correct PDF names in the zipped folder as per the CSV.PDFs that could be found are : ";
  var lang_vars_all_pdfs_in_csv_are_not_present_in_zip_folder =
    "All PDFs in CSV are not present in Zip folder.";
  var lang_vars_to_reload_zip_file_again = "to reload zip file again";
  var lang_vars_to_skip_incorrect_npl_data_and_upload_correct_npl =
    "to skip the incorrect npl data and upload the correct npl.";
  var lang_vars_reload = "Reload";
  var lang_vars_mail_successfully_sent = "Mail successfully sent.";
  var lang_vars_columns_automatched_perfectly =
    "Columns Automatched Perfectly.";
  var lang_vars_missing_patents_copied = "Missing Patents Copied.";
  var lang_vars_patent_uploaded_successfully_into_profiles =
    "Patent Successfully uploaded into profiles";
  var lang_vars_come_patents_could_not_be_uploaded_missing_patents_are_listed =
    "Some Patents could not be uploaded. Missing Patents are listed below.";
  var lang_vars_copy_missing_patents_to_clipboard =
    "Copy Missing Patents to Clipboard";
  var lang_vars_some_patents_could_not_be_uploaded_profiles_doesnot_exists_for_patents =
    "Profile Data for Some Patents could not be uploaded. Profiles Doesnot Exist For Patents.";
  var lang_vars_metadata_of_some_fields_could_not_be_uploaded =
    "Metadata of Some Fields could not be uploaded. Following Metadata Fields doesnot Exist.";
  var lang_vars_kindly_remove_multiple_patent_enteries_and_then_upload =
    "Kindly remove the multiple patent entries and then upload!";
  var lang_vars_all_patents_in_profiles_are_invalid =
    "All the Patent(s) in file are Invalid";
  var lang_vars_metadata_fields = "Metadata Fields";
  var lang_vars_error = "Error";
  var lang_vars_fetching_data_from_csv = "Fetching Data From CSV";
  var lang_vars_inserting = "Inserting";
  var lang_vars_of = "Of";
  var lang_vars_upload_failed = "Upload Failed!";
  var lang_vars_upload_aborted = "Upload Aborted!";
  var lang_vars_skip = "Skip";
  var lang_vars_Please_select_atleast_one_parameter_for_search =
    "Please enter at least one parameter for search";
  var lang_vars_search_operators_change_msg2 =
    "* can be used with minimum 3 characters.";
  var lang_vars_search_operators_change_msg3 =
    "Keep query enclosed in bracket eg: text:(printer and scanner).Keep date range queries enclosed in square brackets eg: ad:[19700101 TO 20180101].";
  var lang_vars_search_operators_change_msg4 =
    "Use date range queries with TO keyword eg: ad:[19700101 TO 20180101].";
  var lang_vars_change_query = "Kindly change the query and rerun..";
  var lang_vars_ask_to_run_query = "Do you want to run the same query?.";
  var lang_vars_star_questionmark_msg =
    "A star (*) to substitute one or more characters.A question mark (?) to add just one character anywhere in the term.";
  var lang_vars_colon_msg =
    "A colon (:) is used after every search field and the query is enclosed in brackets eg: text:(printer and scanner).";
  var lang_vars_nearn_search_msg =
    "The NEARn connector to find documents with search words that appear within n words of each other. eg. antenna NEAR5 radio.";
  var lang_vars_pre_search_msg =
    "The PREn connector to find documents in which the first search word precedes the second by not more than the stated number of words. eg. radio PRE3 antenna.";
  var lang_vars_earliest_priority_country = "Earliest Priority Country";
  var lang_vars_Metadata = "Metadata";
  var lang_vars_selectall = "Select All";
  var lang_vars_success = "Success";
  var lang_vars_weekly = "Weekly";
  var lang_vars_fortnightly = "Fortnightly";
  var lang_vars_monthly = "Monthly";
  var lang_vars_quarterly = "Quarterly";
  var lang_vars_concept = "Concept";
  var lang_vars_request_successful = "Request Successful.";
  var lang_vars_except_for_following_invalid_patents =
    "Except for the following Invalid Patent(s).";
  var lang_vars_invalid_patents_listed_below =
    "Invalid Patent(s) are listed below.";
  var lang_vars_copy_invalid_patents_to_clipboard =
    "Copy Invalid Patents to Clipboard";
  var lang_vars_all_patents_entered_are_invalid =
    "All the Patent(s) entered are Invalid.";
  var lang_vars_Your_session_has_expired =
    "Your session has expired.Please login again";
  var lang_vars_following_pdfs_no_title = "Following PDF(s) has no title: ";
  var lang_vars_to_upload_them_please_add_their_title_in_csv_and_try_again =
    "To upload them please add their title in csv and try again.";
  var lang_vars_uploading_failed = "Uploading Failed.";
  var lang_vars_ok = "Ok";
  var lang_vars_past_dates_cant_be_selected_only_present_and_past_dates_are_allowed =
    "Past Dates can't be selected. Only Present and Future dates are allowed.";
  var lang_vars_monday = "Monday";
  var lang_vars_tuesday = "Tuesday";
  var lang_vars_wednesday = "Wednesday";
  var lang_vars_thursday = "Thursday";
  var lang_vars_friday = "Friday";
  var lang_vars_error_in_Mapped_Column_for_PDF =
    "Error in Mapped Column for PDF";
  var lang_vars_invalid_characters_found_in_row =
    "Invalid Characters found in row";
  var lang_vars_please_remove_them_or_use_different_encoding_and_try_again =
    "Please remove them or use different encoding and try again";
  var lang_vars_all_pdfs_in_csv_empty = "All PDF names in CSV are empty.";
  var lang_vars_this_account_is_already_in_use_do_you_want_to_continue =
    "This account is already in use. Do you want to continue and by doing so the first person will be logged out";
  var lang_vars_are_you_sure_to_delete_this_comment =
    "Are you sure to delete this comment";
  var lang_vars_select_atleast_one_valid_patent_to_search =
    "Select atleast one valid patent to search";
  var lang_vars_Invalid_Patents_Copied = "Invalid Patents Copied";
  var lang_vars_please_login_again = "please login";
  var lang_vars_Your_request_has_been_successfully_submitted =
    "Your request has been successfully submitted";
  var lang_vars_The_ADMIN_Team_will_take_2_days_to_process_your_request =
    "The ADMIN Team will take 2-3 days to process your request.";
  var lang_vars_sure_to_perform_this_action =
    "Are you sure to perform this action?";
  var lang_vars_selection_of_platform_and_main_profile_are_compulsory =
    "Selection of Platform and Main Profile are compulsory";
  var lang_vars_kindly_balance_paranthesis =
    "Kindly balance the paranthesis in the query.";
  var lang_vars_searches_in_applicant_assignee_reassignee =
    "Searches in applicant/assignee field which includes applicant, assignee and reassignees";
  var lang_vars_searches_all_original_assignee =
    "Searches by original assignee name.";
  var lang_start_date_can_not_be_empty_please_select_start_date =
    "Start date can not be empty, Please select Start date";
  var lang_end_date_can_not_be_empty_please_select_end_date =
    "End date can not be empty, Please select End date";
  var lang_start_date_can_not_be_greater_than_end_date =
    "Please select the end date that fall before start date";
  var lang_vars_your_request_has_been_submitted_saturday =
    "Your request has been submitted successfully. It will be processed and updated on next saturday";
  var lang_vars_creation_date = "Creation Date";
  var lang_vars_Publication_Country = "Publication Country";
  var lang_vars_select_previous_project_code =
    "Please select previous / add new Project code";
  var lang_vars_please_enter_project_code = "Please enter Project Code";
  var lang_vars_please_select_project_code = "Please select Project Code";
  var lang_vars_please_enter_citation_category =
    "Please enter Citation Category";
  var lang_vars_please_enter_correct_citation_category_without_any_spaces =
    "Please enter correct citation category without any spaces";
  var lang_vars_this_citation_category_already_exists_in_the_project_code_msg =
    "This citation category already exists in the project code";
  var lang_vars_please_select_citation_category =
    "Please Select Citation Category";
  var lang_vars_this_project_code_already_exists_please_enter_a_new_name =
    "This Project Code already exists Please enter a new name";
  var lang_vars_are_you_sure_you_want_to_delete_this_project_code =
    "Are you sure you want to delete this Project Code";
  var lang_vars_project_code_deletion_notification =
    "Project Code Deletion Notification successfully sent";
  var lang_vars_citation_category_cannot_be_blank =
    "Citation Category cannot be blank";
  var lang_vars_citation_category_already_exists =
    "citation category already exists";
} else if (lang == "ger") {
  var lang_vars_or_keyword = "ODER";
  var lang_vars_and_keyword = "Und";
  var lang_vars_ALL_keyword = "Alles";
  var lang_vars_not_keyword = "NICHT";
  var lang_vars_Full_Text = "Volltext";
  var lang_vars_Abstract = "Zusammenfassung";
  var lang_vars_Claim = "Anspruch";
  var lang_vars_Title = "Titel";
  var lang_vars_Description = "Beschreibung";
  var lang_vars_Title_Abstract_Claim = "Titel / Zusammenfassung / Anspruch";
  var lang_vars_Title_Abstract = "Titel / Zusammenfassung";
  var lang_vars_Publication_Date = "Veröffentlichungsdatum";
  var lang_vars_Application_Date = "Anmeldedatum";
  var lang_vars_Priority_Date = "Prioritätsdatum";
  var lang_vars_Earliest_Priority_Date = "Frühestes Prioritätsdatum";
  var lang_vars_Publication_Number = "Veröffentlichungsnummer";
  var lang_vars_Application_Number = "Anmeldenummer";
  var lang_vars_Priority_Number = "Prioritätsnummer";
  var lang_vars_Earliest_Priority_Number = "Früheste Prioritätsnummer";
  var lang_vars_Assignee = "Anmelder";
  var lang_vars_Inventor = "Erfinder";
  var lang_vars_Assignee_Standardized = "Anmelder standardisiert";
  var lang_vars_Classification_CPC_or_IPC = "Klassifizierung CPC ODER IPC";
  var lang_vars_Classification_IPC = "Klassifizierung IPC";
  var lang_vars_Classification_CPC = "Klassifizierung CPC";
  var lang_vars_Classification_ECLA = "Klassifizierung ECLA";
  var lang_vars_Classification_US_Main_Further =
    "Klassifizierung US Haupt & Weitere";
  var lang_vars_Family_Members = "Familienmitglieder";
  var lang_vars_Backward_Citations = "Rückwärtszitierung";
  var lang_vars_Forward_Citations = "Zitierungen weiterleiten";
  var lang_vars_CPC_Classification = "CPC Klassifizierung";
  var lang_vars_EP_Classification = "EP Klassifizierung";
  var lang_vars_IPC_Classification = "IPC Klassifizierung";
  var lang_vars_US_Classification = "US Klassifizierung";
  var lang_vars_Legal_Status = "Rechtlicher Status";
  var lang_vars_Platform = "Plattform";
  var lang_vars_Main_Profile = "Hauptprofil";
  var lang_vars_Sub_Profile = "Unterprofil";
  var lang_vars_Standardized_Assignees = "Standardisierter Anmelder";
  var lang_vars_No_Patents_in_the_profile = "Keine Patente im Profil";
  var lang_vars_Some_error_occured_Please_try_again_later =
    "Ein Fehler ist aufgetreten !! Bitte versuchen Sie es später noch einmal";
  var lang_vars_Please_select_atleast_one_column_to_export =
    "Bitte wählen Sie mindestens eine Spalte für den Export aus";
  var lang_vars_Template_field_name_cannot_be_empty_Please_enter_a_value =
    "Der Name des Vorlagenfelds darf nicht leer sein! Bitte einen Wert eingeben.";
  var lang_vars_This_template_field_already_exists_Please_enter_a_new_name =
    "Dieses Vorlagenfeld existiert bereits! Bitte geben Sie einen neuen Namen ein";
  var lang_vars_Please_login_to_add_fields =
    "Bitte melden Sie sich an, um Felder hinzuzufügen";
  var lang_vars_are_you_sure_you_want_to_delete_this_field =
    "Möchten Sie dieses Feld wirklich löschen?";
  var lang_vars_This_Tag_name_already_exists_in_this_field =
    "Dieser Tag-Name existiert bereits in diesem Feld. Bitte geben Sie einen neuen Namen ein";
  var lang_vars_Yes_Im_sure = "Ja, ich bin mir sicher";
  var lang_vars_Data_Successfully_Uploaded = "Daten erfolgreich hochgeladen";
  var lang_vars_input_field_cannot_be_empty =
    "Eingabefeld darf nicht leer sein";
  var lang_vars_msg_to_select_atleast_one_searchterm_or_platform =
    "Bitte wählen Sie mindestens 1 Plattform aus ODER geben Sie einen Suchbegriff ein";
  var lang_vars_msg_to_select_atleast_one_country =
    "Bitte wählen Sie mindestens ein Land aus";
  var lang_vars_please_enter_correct_date =
    "Bitte geben Sie das richtige Datum ein";
  var lang_vars_please_enter_correct_date_in_correct_format_as_mentioned_in_placeholder =
    "Bitte geben Sie das Datum im richtigen Format ein, wie auf dem Platzhalter angegeben";
  var lang_vars_your_session_has_expired_due_to_login_at_another_browser =
    "Ihre Sitzung ist aufgrund der Kontoanmeldung in einem anderen Browser abgelaufen.";
  var lang_vars_your_session_expired_due_to_inactivity_please_login_again =
    "Ihre Sitzung ist aufgrund von Inaktivität abgelaufen. Bitte melden Sie sich erneut an.";
  var lang_vars_enter_atleast_one_patent_for_search =
    "Geben Sie mindestens eine Patentnummer für die Suche ein";
  var lang_vars_checking_data_integrity = "Überprüfen der Datenintegrität...";
  var lang_vars_uploading_data = "Daten hochladen";
  var lang_vars_data_successfully_uploaded = "Daten erfolgreich hochgeladen";
  var lang_vars_data_successfully_uploaded_except_some_invalid_patent =
    "Daten wurden mit Ausnahme einiger ungültiger Patente erfolgreich hochgeladen";
  var lang_vars_formatting_data = "Daten formatieren";
  var lang_vars_request_failed = "Anfrage fehlgeschlagen";
  var lang_vars_publications_keyword = "Veröffentlichungen";
  var lang_vars_families_keyword = "Familien";
  var lang_vars_template_field_deleted_successfully =
    "Vorlagenfeld erfolgreich gelöscht!";
  var lang_vars_template_field_updated_successfully =
    "Vorlagenfelder erfolgreich aktualisiert";
  var lang_vars_tag_name_cannot_be_empty = "Tag Name cannot be empty";
  var lang_vars_are_you_sure_to_delete_this_tag =
    "Möchten Sie diesen Tag wirklich löschen??";
  var lang_vars_are_you_sure__to_delete_this_standard_assignee =
    "Möchten Sie diesen Standard-Verantwortlichen wirklich löschen?";
  var lang_vars_are_you_sure_to_copy_this_patent_to =
    "Möchten Sie dieses Patent wirklich kopieren?";
  var lang_vars_are_you_sure_to_delete_this_patent =
    "Möchten Sie dieses Patent löschen?";
  var lang_vars_are_you_sure_to_move_this_patent_to =
    "Sind Sie sicher, dass Sie dieses Patent übertragen möchten an";
  var lang_vars_are_you_sure_to_make_these_changes =
    "Möchten Sie diese Änderungen wirklich vornehmen?";
  var lang_vars_please_select_platform = "Bitte wählen Sie eine Plattform";
  var lang_vars_please_select_main_profile = "Bitte wählen Sie ein Hauptprofil";
  var lang_vars_please_select_sub_profile = "Bitte Subprofil auswählen";
  var lang_vars_this_name_already_exists_for_this_patent =
    "Dieses Vorlagenfeld existiert bereits! Bitte geben Sie einen neuen Namen ein.";
  var lang_vars_no_go_back = "Nein, zurück!";
  var lang_vars_no_emails_allowed_beside_johndeere =
    "Außer johndeere.com sind keine weiteren E-Mails zulässig";
  var lang_vars_alert_start_date_cannotbe_empty_please_select_a_date =
    "Das Startdatum des Alarms darf nicht leer sein. Bitte wählen Sie ein Datum.";
  var lang_vars_platform_name_cannot_be_empty =
    "Der Plattformname darf nicht leer sein";
  var lang_vars_mainprofile_name_cannot_be_empty =
    "Der Name des Hauptprofils darf nicht leer sein";
  var lang_vars_this_platform_already_exists_please_enter_a_new_name =
    "Diese Plattform existiert bereits. Bitte geben Sie einen neuen Namen ein.";
  var lang_vars_this_main_profile_already_exists_in_the_platform_msg =
    "Dieses Hauptprofil existiert bereits auf der Plattform. Bitte geben Sie einen neuen Namen ein.";
  var lang_vars_subprofile_name_cannot_be_empty =
    "Der Name des Unterprofils darf nicht leer sein";
  var lang_vars_please_select_frequency = "Bitte Frequenz auswählen.";
  var lang_vars_this_subprofile_already_exists_in_mainprofile =
    "Dieses Unterprofil existiert bereits im Hauptprofil. Bitte geben Sie einen neuen Namen ein.";
  var lang_vars_are_you_sure_you_want_to_delete =
    "Sind Sie sicher, dass Sie löschen möchten";
  var lang_vars_deletion_mail_successfully_sent =
    "Löschbenachrichtigung erfolgreich gesendet";
  var lang_vars_please_enter_correct_main_profile_name_without_any_spaces =
    "Bitte geben Sie das richtige Hauptprofil ein. (Name nur mit Leerzeichen nicht erlaubt)";
  var lang_vars_please_enter_new_platform_name =
    "Bitte geben Sie einen neuen Plattformnamen ein";
  var lang_vars_please_enter_main_profile =
    "Bitte geben Sie das Hauptprofil ein.";
  var lang_vars_alerts_are_sentonly_on_weekdays_please_change_alert_start_date =
    "Benachrichtigungen werden nur an Werktagen von Montag bis Freitag gesendet. Bitte ändern Sie das Startdatum des Alarms";
  var lang_vars_searches_anywhere_in_abstract =
    "Sucht irgendwo in den Abstract der Patente.";
  var lang_vars_searches_anywhere_in_abstract_depending_on_lang =
    "Searches in the abstract depending upon the language provided; * is the language code";
  var lang_vars_searches_anywhere_in_claim =
    "Searches in the claims independent of the language";
  var lang_vars_searches_anywhere_in_claim_depending_on_lang =
    "Sucht an einer beliebigen Stelle im Abstract, abhängig von der bereitgestellten Sprache. * ist der Sprachcode";
  var lang_vars_searches_anywhere_in_title =
    "Recherchen basierend auf dem Titel des Patents";
  var lang_vars_searches_anywhere_in_title_depending_on_lang =
    "Sucht an einer beliebigen Stelle im Titel, abhängig von der angegebenen Sprache. * ist der Sprachcode";
  var lang_vars_searches_all_original_patent_assignees =
    "Sucht nach dem Namen des Patentanmelders, d. H. Nach der Person oder juristischen Person, der das gesamte Recht, der Titel und das Interesse an der Anmeldung übertragen wurden.";
  var lang_vars_searches_anywhere_in_inventor_of_patent =
    "Sucht irgendwo im Erfinderfeld.";
  var lang_vars_searches_anywhere_in_publication_dates =
    "Sucht irgendwo in den Veröffentlichungsdaten.";
  var lang_vars_searches_based_on_publicationo =
    "Suche mit Publikationskennung mit Ländercode, Nummer und Artcode.";
  var lang_vars_searches_anywhere_in_authority_code_independent_of_lang =
    "Sucht unabhängig von der Sprache an einer beliebigen Stelle in den Normcodes.";
  var lang_vars_searches_application_number =
    "Durchsucht alle standardisierten Antragsnummern ohne Berechtigungscode.";
  var lang_vars_searches_anywhere_in_application_date =
    "Sucht irgendwo im Bewerbungsdatum";
  var lang_vars_searches_anywhere_in_earliest_priority_date =
    "Sucht irgendwo am frühesten Prioritätsdatum";
  var lang_vars_searches_all_patent_attorney_or_registered_agents =
    "Durchsucht alle Patentanwälte oder zugelassenen Vertreter.";
  var lang_vars_searches_document_no_of_publication_being_cited =
    "Durchsucht das Dokument mit der Nummer der Veröffentlichung, die zitiert wird.";
  var lang_vars_searches_country_code_of_publication_being_cited =
    "Sucht nach dem Ländercode der Veröffentlichung, die zitiert wird.";
  var lang_vars_searches_kind_codeof_publication_being_cited =
    "Sucht nach Art-Code der zitierten Publikation";
  var lang_vars_searches_cpc_classification_numbers =
    "Sucht nach CPC-Klassifizierungsnummern";
  var lang_vars_searches_ecla_classification_numbers =
    "Sucht nach ECLA-Klassifizierungsnummern.";
  var lang_vars_searches_fterm_classification_numbers =
    "Sucht nach F-Term-Klassifizierungsnummern.";
  var lang_vars_searches_ipc_classification_numbers =
    "Sucht nach IPC-Klassifizierungsnummern.";
  var lang_vars_searches_us_classification_numbers =
    "Sucht nach US-Klassifikationsnummern";
  var lang_vars_searches_all_reassignees =
    "Durchsucht alle neu zugewiesenen Personen";
  var lang_vars_searches_all_examiner_names = "Durchsucht alle Prüfernamen";
  var lang_vars_searches_description_of_patent =
    "Recherchen basierend auf der Beschreibung des Patents";
  var lang_vars_searches_description_of_patent_depending_on_lang =
    "Sucht an einer beliebigen Stelle in der Beschreibung, abhängig von der angegebenen Sprache. * ist der Sprachcode";
  var lang_vars_searches_based_on_amended_claims =
    "Recherchen auf der Grundlage der geänderten Patentansprüche";
  var lang_vars_searches_based_on_amended_claims_depending_on_lang =
    "Suchanfragen in den geänderten Ansprüchen in Abhängigkeit von der angegebenen Sprache; * ist der Sprachcode";
  var lang_vars_searches_full_text =
    "Durchsucht Titel ODER Zusammenfassung ODER Ansprüche ODER Beschreibung";
  var lang_vars_search_all_country_kind_codes =
    "Durchsucht alle Arten von Veröffentlichungscodes";
  var lang_vars_searches_legal_status =
    "Durchsucht alle rechtlichen Statusereignisse";
  var lang_vars_searches_legal_status_dates =
    "Durchsucht alle rechtlichen Statusdaten";
  var lang_vars_searches_all_non_patent_citations =
    "Durchsucht alle Nichtpatentzitate.";
  var lang_vars_searches_priority_date =
    "Durchsucht alle Prioritätsdaten.(Bereichssuche nicht erlaubt)";
  var lang_vars_searches_priority_number =
    "Durchsucht alle Prioritätsdokumentnummern";
  var lang_vars_searches_priority_authority =
    "Durchsucht alle Prioritätsberechtigungscodes.";
  var lang_vars_searches_title_abstract_or_claims =
    "Durchsucht alle Titel ODER Abstract ODER Claims unabhängig von der Sprache.";
  var lang_vars_derived_from_classification =
    "Abgeleitet von der Klassifikation. Die Werte umfassen: Chemikalie, Chemikalie / Elektrik, Konstruktion, Elektrik, Elektrik / Mechanik, Mechanik, Anlage.";
  var lang_vars_anticipated_expirated_date_msg =
    "Das voraussichtliche Ablaufdatum wird gemäß der Patentbehörde und der Art des Dokuments berechnet und spiegelt die maximale Laufzeit des Patents wider, vorausgesetzt, die Wartungsgebühren werden gezahlt und die Laufzeit wird nicht verlängert";
  var lang_vars_adjusted_expiration_date_msg =
    "Das angepasste Ablaufdatum / -jahr enthält ein Datum, das durch vom USPTO unter 35 USC 154 vorgenommene Laufzeitanpassungen angepasst wurde. Nur für USA vorhanden";
  var lang_vars_patent_current_status_msg =
    "Recherche nach Patentstatus des Patents.";
  var lang_vars_searches_all_current_assignee =
    "Sucht nach dem Namen des aktuellen Bearbeiters.";
  var lang_vars_searches_publication_authority =
    "Durchsucht alle Veröffentlichungsberechtigungscodes.";
  var lang_vars_searches_classification_fi =
    "Sucht nach FI-Termklassifizierungsnummern.";
  var lang_vars_share_url_copied = "Freigabe-URL kopiert.";
  var lang_vars_pdfs_that_were_not_found_in_zipped_are =
    "PDfs, die nicht im gezippten Ordner gefunden wurden, sind:";
  var lang_vars_to_upload_them_please_attach_their_pdfs_in_zip_and_try_again =
    "Um sie hochzuladen, hängen Sie bitte ihre PDFs in zip an und versuchen Sie es erneut.";
  var no_data_is_their_in_csv_to_be_uploaded =
    "In CSV sind keine Daten zum Hochladen vorhanden.";
  var lang_vars_no_data_uploaded_because_of_inexistence_of_correct_pdfs_in_zip =
    "Es wurden keine NPL-Daten hochgeladen, da gemäß CSV keine korrekten PDF-Namen im gezippten Ordner vorhanden waren. PDFs, die :";
  var lang_vars_all_pdfs_in_csv_are_not_present_in_zip_folder =
    "Alle PDFs in CSV sind nicht im Zip-Ordner vorhanden.";
  var lang_vars_to_reload_zip_file_again = "um die zip-Datei erneut zu laden";
  var lang_vars_to_skip_incorrect_npl_data_and_upload_correct_npl =
    "um die falschen npl Daten zu überspringen und die korrekten npl hochzuladen.";
  var lang_vars_reload = "Neu laden";
  var lang_vars_mail_successfully_sent = "Mail erfolgreich gesendet.";
  var lang_vars_columns_automatched_perfectly = "Spalten perfekt automatched.";
  var lang_vars_missing_patents_copied = "Fehlende Patente kopiert.";
  var lang_vars_patent_uploaded_successfully_into_profiles =
    "Patent Erfolgreich in Profile hochgeladen.";
  var lang_avrs_come_patents_could_not_be_uploaded_missing_patents_are_listed =
    "Einige Patente konnten nicht hochgeladen werden. Fehlende Patente sind unten aufgeführt..";
  var lang_vars_copy_missing_patents_to_clipboard =
    "Fehlende Patente in die Zwischenablage kopieren";
  var lang_vars_some_patents_could_not_be_uploaded_profiles_doesnot_exists_for_patents =
    "Profildaten für einige Patente konnten nicht hochgeladen werden. Profile existieren nicht für Patente.";
  var lang_vars_metadata_of_some_fields_could_not_be_uploaded =
    "Metadaten einiger Felder konnten nicht hochgeladen werden. Die folgenden Metadatenfelder sind nicht vorhanden.";
  var lang_vars_kindly_remove_multiple_patent_enteries_and_then_upload =
    "Bitte entfernen Sie die mehrfachen Patenteinträge und laden Sie sie dann hoch!";
  var lang_vars_all_patents_in_profiles_are_invalid =
    "Alle in der Datei enthaltenen Patente sind ungültig";
  var lang_vars_metadata_fields = "Metadatenfelder";
  var lang_vars_error = "Fehler";
  var lang_vars_fetching_data_from_csv = "Abrufen von Daten aus CSV";
  var lang_vars_inserting = "Einfügen";
  var lang_vars_of = "von";
  var lang_vars_upload_failed = "Upload fehlgeschlagen!";
  var lang_vars_upload_aborted = "Upload abgebrochen!";
  var lang_vars_skip = "Überspringen";
  var lang_vars_Please_select_atleast_one_parameter_for_search =
    "Bitte geben Sie mindestens einen Parameter für die Suche ein";
  var lang_vars_search_operators_change_msg2 =
    "* kann mit mindestens 3 Zeichen verwendet werden.";
  var lang_vars_search_operators_change_msg3 =
    "Halten Sie die Abfrage in der Klammer Beispiel: text:(printer and scanner).Halten Sie Datumsbereichsabfragen in eckigen Klammern: ad:[19700101 TO 20180101].";
  var lang_vars_search_operators_change_msg4 =
    "Verwenden Sie Datumsbereichsabfragen mit dem Schlüsselwort TO, Beispiel: ad: [19700101 TO 20180101].";
  var lang_vars_change_query =
    "Bitte ändern Sie die Abfrage und wiederholen Sie ..";
  var lang_vars_ask_to_run_query = "Möchten Sie dieselbe Abfrage ausführen?";
  var lang_vars_star_questionmark_msg =
    "Ein Stern (*), um ein oder mehrere Zeichen zu ersetzen. Ein Fragezeichen (?), Um irgendwo im Begriff nur ein Zeichen hinzuzufügen.";
  var lang_vars_colon_msg =
    "Nach jedem Suchfeld wird ein Doppelpunkt (:) verwendet. Die Abfrage ist in eckigen Klammern angegeben. Beispiel: text:(printer and scanner).";
  var lang_vars_nearn_search_msg =
    "Der NEARn-Konnektor zum Auffinden von Dokumenten mit Suchwörtern, die innerhalb von n Wörtern voneinander angezeigt werden. Beispiel: antenna NEAR5 radio.";
  var lang_vars_pre_search_msg =
    "Der PREn-Konnektor zum Suchen von Dokumenten, bei denen das erste Suchwort dem zweiten um nicht mehr als die angegebene Anzahl von Wörtern vorausgeht. Beispiel: radio PRE3 antenna.";
  var lang_vars_earliest_priority_country = "Land mit der frühesten Priorität";
  var lang_vars_Metadata = "Metadaten";
  var lang_vars_selectall = "Wählen Sie Alle";
  var lang_vars_success = "Erfolg";
  var lang_vars_weekly = "Wöchentlich";
  var lang_vars_fortnightly = "14-tägig";
  var lang_vars_monthly = "Monatlich";
  var lang_vars_quarterly = "Vierteljährlich";
  var lang_vars_concept = "Konzept";
  var lang_vars_request_successful = "Anfrage erfolgreich.";
  var lang_vars_except_for_following_invalid_patents =
    "Mit Ausnahme der folgenden ungültigen Patente.";
  var lang_vars_invalid_patents_listed_below =
    "Ungültige Patente sind unten aufgeführt.";
  var lang_vars_copy_invalid_patents_to_clipboard =
    "Kopieren von ungültigen Patenten in die Zwischenablage";
  var lang_vars_all_patents_entered_are_invalid =
    "Alle eingegebenen Patente sind ungültig.";
  var lang_vars_Your_session_has_expired =
    "Ihre Sitzung ist abgelaufen. Bitte melden Sie sich erneut an";
  var lang_vars_following_pdfs_no_title =
    "Folgende PDF(s) haben keinen Titel: ";
  var lang_vars_to_upload_them_please_add_their_title_in_csv_and_try_again =
    "Um sie hochzuladen, fügen Sie bitte ihren Titel in csv hinzu und versuchen Sie es erneut.";
  var lang_vars_uploading_failed = "Upload fehlgeschlagen.";
  var lang_vars_ok = "Ok";
  var lang_vars_past_dates_cant_be_selected_only_present_and_past_dates_are_allowed =
    "Vergangene Termine können nicht ausgewählt werden. Es sind nur aktuelle und zukünftige Daten zulässig.";
  var lang_vars_monday = "Montag";
  var lang_vars_tuesday = "Dienstag";
  var lang_vars_wednesday = "Mittwoch";
  var lang_vars_thursday = "Donnerstag";
  var lang_vars_friday = "Freitag";
  var lang_vars_error_in_Mapped_Column_for_PDF =
    "Fehler in zugeordneter Spalte für PDF";
  var lang_vars_invalid_characters_found_in_row =
    "Ungültige Zeichen in Zeile gefunden";
  var lang_vars_please_remove_them_or_use_different_encoding_and_try_again =
    "Bitte entfernen Sie sie oder verwenden Sie eine andere Kodierung und versuchen Sie es erneut";
  var lang_vars_all_pdfs_in_csv_empty = "Alle PDF-Namen in CSV sind leer.";
  var lang_vars_this_account_is_already_in_use_do_you_want_to_continue =
    "Dieses Konto wird bereits verwendet. Möchten Sie fortfahren und auf diese Weise wird die erste Person abgemeldet";
  var lang_vars_are_you_sure_to_delete_this_comment =
    "sind Sie sicher, diesen Kommentar zu löschen";
  var lang_vars_select_atleast_one_valid_patent_to_search =
    "Wählen Sie mindestens ein gültiges Patent für die Suche aus";
  var lang_vars_Invalid_Patents_Copied = "Ungültige Patente kopiert";
  var lang_vars_please_login_again = "bitte loggen Sie sich ein";
  var lang_vars_Your_request_has_been_successfully_submitted =
    "Ihre Anfrage wurde erfolgreich übermittelt";
  var lang_vars_The_ADMIN_Team_will_take_2_days_to_process_your_request =
    "Das ADMIN-Team wird 2-3 Tage brauchen, um Ihre Anfrage zu bearbeiten.";
  var lang_vars_sure_to_perform_this_action =
    "Möchten Sie diese Aktion wirklich ausführen?";
  var lang_vars_selection_of_platform_and_main_profile_are_compulsory =
    "Die Auswahl der Plattform und des Hauptprofils ist obligatorisch";
  var lang_vars_kindly_balance_paranthesis =
    "Bitte gleichen Sie die Klammern in der Abfrage aus.";
  var lang_vars_searches_in_applicant_assignee_reassignee =
    "Sucht im Feld Bewerber / Beauftragter, das Bewerber, Beauftragten und Neuzugeordnete enthält.";
  var lang_vars_searches_all_original_assignee =
    "Sucht nach dem ursprünglichen Empfängernamen.";
  var lang_start_date_can_not_be_empty_please_select_start_date =
    "Startdatum darf nicht leer sein, bitte Startdatum auswählen";
  var lang_end_date_can_not_be_empty_please_select_end_date =
    "Enddatum darf nicht leer sein, bitte Enddatum auswählen";
  var lang_start_date_can_not_be_greater_than_end_date =
    "Bitte wählen Sie das Enddatum, das vor dem Startdatum liegt";
  var lang_vars_your_request_has_been_submitted_saturday =
    "Ihre Anfrage wurde erfolgreich übermittelt. Sie wird am kommenden Samstag bearbeitet und aktualisiert";
  var lang_vars_creation_date = "Erstellungsdatum";
  var lang_vars_Publication_Country = "Veröffentlichungsland";
  var lang_vars_select_previous_project_code =
    "Bitte wählen Sie Vorherigen / Neuen Projektcode hinzufügen";
  var lang_vars_please_enter_project_code =
    "Bitte geben Sie den Projektcode ein";
  var lang_vars_please_select_project_code = "Bitte wählen Sie Projektcode";
  var lang_vars_please_enter_citation_category =
    "Bitte geben Sie die Zitierkategorie ein";
  var lang_vars_please_enter_correct_citation_category_without_any_spaces =
    "Bitte geben Sie die richtige Zitierkategorie ohne Leerzeichen ein";
  var lang_vars_this_citation_category_already_exists_in_the_project_code_msg =
    "Diese Zitierkategorie ist bereits im Projektcode vorhanden";
  var lang_vars_please_select_citation_category =
    "Bitte wählen Sie Zitierkategorie";
  var lang_vars_this_project_code_already_exists_please_enter_a_new_name =
    "Dieser Projektcode existiert bereits. Bitte geben Sie einen neuen Namen ein";
  var lang_vars_are_you_sure_you_want_to_delete_this_project_code =
    "Möchten Sie diesen Projektcode wirklich löschen?";
  var lang_vars_project_code_deletion_notification =
    "Projektcode-Löschbenachrichtigung erfolgreich gesendet";
  var lang_vars_citation_category_cannot_be_blank =
    "Zitierkategorie darf nicht leer sein";
  var lang_vars_citation_category_already_exists =
    "Zitierkategorie existiert bereits";
} else if (lang == "chi") {
  var lang_vars_or_keyword = "要么";
  var lang_vars_and_keyword = "和";
  var lang_vars_not_keyword = "不";
  var lang_vars_ALL_keyword = "所有";
  var lang_vars_Full_Text = "全文";
  var lang_vars_Abstract = "摘要";
  var lang_vars_Claim = "权利要求";
  var lang_vars_Title = "标题";
  var lang_vars_Description = "说明书";
  var lang_vars_Title_Abstract_Claim = "标题/摘要/索赔";
  var lang_vars_Title_Abstract = "标题/摘要";
  var lang_vars_Publication_Date = "公开/公告日期";
  var lang_vars_Application_Date = "申请日期";
  var lang_vars_Priority_Date = "优先权日期";
  var lang_vars_Earliest_Priority_Date = "最早的优先权日期";
  var lang_vars_Publication_Number = "公开号";
  var lang_vars_Application_Number = "申请号";
  var lang_vars_Priority_Number = "优先权号";
  var lang_vars_Earliest_Priority_Number = "最早的优先权号";
  var lang_vars_Assignee = "代理人";
  var lang_vars_Inventor = "发明者";
  var lang_vars_Assignee_Standardized = "标准受让人";
  var lang_vars_Classification_CPC_or_IPC = "分类CPC或IPC";
  var lang_vars_Classification_IPC = "分类IPC";
  var lang_vars_Classification_CPC = "分类CPC";
  var lang_vars_Classification_ECLA = "分类ECLA";
  var lang_vars_Classification_US_Main_Further = "分类美国主要和进一步";
  var lang_vars_Family_Members = "族成员";
  var lang_vars_Backward_Citations = "向后引用";
  var lang_vars_Forward_Citations = "转发引用";
  var lang_vars_CPC_Classification = "CPC分类";
  var lang_vars_EP_Classification = "EP分类";
  var lang_vars_IPC_Classification = "IPC分类";
  var lang_vars_US_Classification = "US分类";
  var lang_vars_Legal_Status = "法律地位";
  var lang_vars_Platform = "平台";
  var lang_vars_Main_Profile = "主要字段";
  var lang_vars_Sub_Profile = "子字段";
  var lang_vars_Standardized_Assignees = "标准化受让人";
  var lang_vars_No_Patents_in_the_profile = "个人资料中没有专利";
  var lang_vars_Some_error_occured_Please_try_again_later =
    "发生了一些错误!!请稍后再试.";
  var lang_vars_Please_select_atleast_one_column_to_export =
    "请选择至少一列进行导出";
  var lang_vars_Template_field_name_cannot_be_empty_Please_enter_a_value =
    "模板字段名称不能为空！请输入一个值.";
  var lang_vars_This_template_field_already_exists_Please_enter_a_new_name =
    "此模板字段已存在！请输入新名称";
  var lang_vars_Please_login_to_add_fields = "请登录以添加字段";
  var lang_vars_are_you_sure_you_want_to_delete_this_field =
    "您确定要删除此字段吗？";
  var lang_vars_This_Tag_name_already_exists_in_this_field =
    "此标记名称已存在于此字段中。请输入新名称";
  var lang_vars_Yes_Im_sure = "是，我确定";
  var lang_vars_Data_Successfully_Uploaded = "数据成功上传";
  var lang_vars_input_field_cannot_be_empty = "输入字段不能为空";
  var lang_vars_msg_to_select_atleast_one_searchterm_or_platform =
    "请选择至少1个平台或输入搜索词";
  var lang_vars_msg_to_select_atleast_one_country = "请选择至少一个国家";
  var lang_vars_please_enter_correct_date = "请输入正确的日期";
  var lang_vars_please_enter_correct_date_in_correct_format_as_mentioned_in_placeholder =
    "请按照占位符提及的正确格式输入日期";
  var lang_vars_your_session_has_expired_due_to_login_at_another_browser =
    "由于帐户在其他浏览器上登录，您的会话已过期。";
  var lang_vars_your_session_expired_due_to_inactivity_please_login_again =
    "由于不活动，您的会话已过期，请重新登录。";
  var lang_vars_enter_atleast_one_patent_for_search =
    "输入至少一个专利号进行搜索";
  var lang_vars_checking_data_integrity = "检查数据完整性...";
  var lang_vars_uploading_data = "上传数据";
  var lang_vars_data_successfully_uploaded = "数据成功上传";
  var lang_vars_data_successfully_uploaded_except_some_invalid_patent =
    "除一些无效专利外，数据已成功上传";
  var lang_vars_formatting_data = "格式化数据";
  var lang_vars_request_failed = "请求失败";
  var lang_vars_publications_keyword = "公开文件";
  var lang_vars_families_keyword = "族";
  var lang_vars_template_field_deleted_successfully = "模板字段已成功删除！";
  var lang_vars_template_field_updated_successfully = "模板字段已成功更新";
  var lang_vars_tag_name_cannot_be_empty = "标签名称不能为空";
  var lang_vars_are_you_sure_to_delete_this_tag = "您确定要删除此标记吗？";
  var lang_vars_are_you_sure__to_delete_this_standard_assignee =
    "您确定要删除此标准受让人吗？";
  var lang_vars_are_you_sure_to_copy_this_patent_to = "您确定要将此专利复制到";
  var lang_vars_are_you_sure_to_delete_this_patent = "你确定要删除这个专利吗？";
  var lang_vars_are_you_sure_to_move_this_patent_to =
    "你确定要把这个专利转移到";
  var lang_vars_are_you_sure_to_make_these_changes = "您确定要进行这些更改吗？";
  var lang_vars_please_select_platform = "请选择平台";
  var lang_vars_please_select_main_profile = "请选择主要配置文件";
  var lang_vars_please_select_sub_profile = "请选择子配置文件";
  var lang_vars_this_name_already_exists_for_this_patent =
    "该专利已存在此名称。";
  var lang_vars_no_go_back = "不回去!";
  var lang_vars_no_emails_allowed_beside_johndeere =
    "除了johndeere.com之外，没有其他电子邮件允许";
  var lang_vars_alert_start_date_cannotbe_empty_please_select_a_date =
    "警报开始日期不能为空。请选择一个日期。";
  var lang_vars_platform_name_cannot_be_empty = "平台名称不能为空";
  var lang_vars_mainprofile_name_cannot_be_empty = "主要配置文件名称不能为空";
  var lang_vars_this_platform_already_exists_please_enter_a_new_name =
    "此平台已存在。请输入新名称。.";
  var lang_vars_this_main_profile_already_exists_in_the_platform_msg =
    "此主要配置文件已存在于平台中。请输入新名称。";
  var lang_vars_subprofile_name_cannot_be_empty = "子配置文件名称不能为空";
  var lang_vars_please_select_frequency = "请选择频率";
  var lang_vars_this_subprofile_already_exists_in_mainprofile =
    "此子配置文件已存在于主配置文件中。请输入新名称。";
  var lang_vars_are_you_sure_you_want_to_delete = "你确定你要删除";
  var lang_vars_deletion_mail_successfully_sent = "删除通知已成功发送";
  var lang_vars_please_enter_correct_main_profile_name_without_any_spaces =
    "请输入正确的主要配置文件。（名称仅包含空格）.";
  var lang_vars_please_enter_new_platform_name = "请输入新的平台名称";
  var lang_vars_please_enter_main_profile = "请输入主要资料";
  var lang_vars_alerts_are_sentonly_on_weekdays_please_change_alert_start_date =
    "警报仅在周一至周五的工作日发送。请更改提醒开始日期。";
  var lang_vars_searches_anywhere_in_abstract =
    "在专利摘要中的任何地方进行搜索。";
  var lang_vars_searches_anywhere_in_abstract_depending_on_lang =
    "根据所提供的语言在摘要中的任何地方进行搜索; *是语言代码";
  var lang_vars_searches_anywhere_in_claim =
    "在索赔中的任何位置搜索独立于语言的内容";
  var lang_vars_searches_anywhere_in_claim_depending_on_lang =
    "根据语言搜索索赔中的任何位置; *是语言代码";
  var lang_vars_searches_anywhere_in_title = "根据专利标题进行搜索";
  var lang_vars_searches_anywhere_in_title_depending_on_lang =
    "根据所提供的语言搜索标题中的任何位置; *是语言代码";
  var lang_vars_searches_all_original_patent_assignees =
    "搜索专利的受让人的名称，即，已将申请中的全部权利，标题和权益分配给的人或法人。";
  var lang_vars_searches_anywhere_in_inventor_of_patent =
    "在Inventor字段中的任何位置搜索。";
  var lang_vars_searches_anywhere_in_publication_dates =
    "在发布日期的任何地方搜索。";
  var lang_vars_searches_based_on_publicationo =
    "使用具有国家代码，编号和种类代码的出版物标识符进行搜索。";
  var lang_vars_searches_anywhere_in_authority_code_independent_of_lang =
    "在权限代码中的任何位置搜索独立于语言";
  var lang_vars_searches_application_number =
    "搜索所有标准化应用程序编号，无需授权代码";
  var lang_vars_searches_anywhere_in_application_date =
    "在申请日期的任何地方搜索";
  var lang_vars_searches_anywhere_in_earliest_priority_date =
    "在最早的优先日期搜索任何地方";
  var lang_vars_searches_all_patent_attorney_or_registered_agents =
    "搜索所有专利律师或注册代理人。";
  var lang_vars_searches_document_no_of_publication_being_cited =
    "搜索所引用的出版物的文档编号";
  var lang_vars_searches_country_code_of_publication_being_cited =
    "搜索所引用出版物的国家/地区代码";
  var lang_vars_searches_kind_codeof_publication_being_cited =
    "搜索被引用的出版物的种类代码";
  var lang_vars_searches_cpc_classification_numbers = "搜索CPC分类号。";
  var lang_vars_searches_ecla_classification_numbers = "搜索ECLA分类号。";
  var lang_vars_searches_fterm_classification_numbers = "搜索F术语分类号。";
  var lang_vars_searches_ipc_classification_numbers = "搜索IPC分类号。";
  var lang_vars_searches_us_classification_numbers = "搜索美国分类号。";
  var lang_vars_searches_all_reassignees = "搜索所有reassignees。";
  var lang_vars_searches_all_examiner_names = "搜索所有审查员姓名。";
  var lang_vars_searches_description_of_patent = "根据专利说明进行搜索";
  var lang_vars_searches_description_of_patent_depending_on_lang =
    "根据提供的语言搜索描述中的任何位置; *是语言代码";
  var lang_vars_searches_based_on_amended_claims =
    "基于该专利的修改权利要求进行检索";
  var lang_vars_searches_based_on_amended_claims_depending_on_lang =
    "根据提供的语言搜索修改后的声明中的任何位置; *是语言代码";
  var lang_vars_searches_full_text = "搜索标题或摘要或声明或描述";
  var lang_vars_search_all_country_kind_codes = "搜索所有出版物种类代码";
  var lang_vars_searches_legal_status = "搜索所有合法状态事件";
  var lang_vars_searches_legal_status_dates = "搜索所有合法状态日期";
  var lang_vars_searches_all_non_patent_citations = "搜索所有非专利引用。";
  var lang_vars_searches_priority_date = "搜索所有优先日期。（不允许范围搜索）";
  var lang_vars_searches_priority_number = "搜索所有优先权文件编号";
  var lang_vars_searches_priority_authority = "搜索所有优先权限代码。";
  var lang_vars_searches_title_abstract_or_claims =
    "搜索所有标题或摘要或声明独立于语言。";
  var lang_vars_derived_from_classification =
    "来自分类。值包括：化学，化学/电气，设计，电气，电气/机械，机械，工厂。";
  var lang_vars_anticipated_expirated_date_msg =
    "预计到期日根据专利授权和文件类型计算，并反映专利的最长寿命，假设支付维护费并且期限延期不到位";
  var lang_vars_adjusted_expiration_date_msg =
    "调整后的到期日/年包含由美国专利商标局根据35 USC 154进行的期限调整调整的日期。目前仅限美国";
  var lang_vars_patent_current_status_msg = "按专利的专利状态搜索。";
  var lang_vars_searches_all_current_assignee = "按当前受让人名称搜索。";
  var lang_vars_searches_publication_authority = "搜索所有发布授权代码。";
  var lang_vars_searches_classification_fi = "搜索FI术语分类号。";
  var lang_vars_share_url_copied = "共享网址已复制";
  var lang_vars_npl_data_successfully_uploaded = "NPL数据已成功上传。";
  var lang_vars_pdfs_that_were_not_found_in_zipped_are =
    "在zipped文件夹中找不到的PDfs是：";
  var lang_vars_to_upload_them_please_attach_their_pdfs_in_zip_and_try_again =
    "要上传它们，请将其PDF格式附加到zip中，然后重试。";
  var lang_vars_no_data_is_their_in_csv_to_be_uploaded =
    "CSV中没有要上传的数据。";
  var lang_vars_no_data_uploaded_because_of_inexistence_of_correct_pdfs_in_zip =
    "没有NPL数据由于CSV中压缩文件夹中没有正确的PDF名称而无法上传。可以找到的PDF是";
  var lang_vars_all_pdfs_in_csv_are_not_present_in_zip_folder =
    "CSV文件夹中没有CSV格式的所有PDF文件。";
  var lang_vars_to_reload_zip_file_again = "再次重新加载zip文件";
  var lang_vars_to_skip_incorrect_npl_data_and_upload_correct_npl =
    "跳过不正确的npl数据并上传正确的npl。";
  var lang_vars_reload = "刷新";
  var lang_vars_mail_successfully_sent = "邮件已成功发送。";
  var lang_vars_columns_automatched_perfectly = "列自动匹配完美。";
  var lang_vars_missing_patents_copied = "缺少专利复制";
  var lang_vars_patent_uploaded_successfully_into_profiles =
    "专利成功上传到字段";
  var lang_vars_come_patents_could_not_be_uploaded_missing_patents_are_listed =
    "有些专利无法上传。缺少的专利如下。";
  var lang_vars_copy_missing_patents_to_clipboard = "将缺失的专利复制到剪贴板";
  var lang_vars_some_patents_could_not_be_uploaded_profiles_doesnot_exists_for_patents =
    "无法上传某些专利的个人资料数据。专利不存在配置文件";
  var lang_vars_metadata_of_some_fields_could_not_be_uploaded =
    "无法上传某些字段的元数据。以下元数据字段不存在。";
  var lang_vars_kindly_remove_multiple_patent_enteries_and_then_upload =
    "请删除多个专利条目然后上传！";
  var lang_vars_all_patents_in_profiles_are_invalid = "文件中的所有专利均无效";
  var lang_vars_metadata_fields = "元数据字段";
  var lang_vars_error = "错误";
  var lang_vars_fetching_data_from_csv = "从CSV获取数据";
  var lang_vars_inserting = "插入";
  var lang_vars_of = "的";
  var lang_vars_upload_failed = "上传失败！";
  var lang_vars_upload_aborted = "上传已中止！";
  var lang_vars_skip = "跳转";
  var lang_vars_Please_select_atleast_one_parameter_for_search =
    "请输入至少一个搜索参数";
  var lang_vars_search_operators_change_msg2 = "*可以使用至少3个字符。";
  var lang_vars_search_operators_change_msg3 =
    "保持查询括在括号中，例如：text :(打印机和扫描仪）。用方括号括起来的日期范围查询 例: ad:[19700101 TO 20180101].";
  var lang_vars_search_operators_change_msg4 =
    "使用带有TO关键字示例的日期范围查询：ad：[19700101 TO 20180101]。";
  var lang_vars_change_query = "请更改查询并重新运行..";
  var lang_vars_ask_to_run_query = "你想运行相同的查询吗？";
  var lang_vars_star_questionmark_msg =
    "一个星号（*）代替一个或多个字符。一个问号（？）在术语的任何地方只添加一个字符。";
  var lang_vars_colon_msg =
    "在每个搜索字段后使用冒号（:)，查询括在括号示例中：text：（printer and scanner）。";
  var lang_vars_nearn_search_msg =
    "NEARn连接器用于查找具有彼此n个单词内的搜索词的文档. . antenna NEAR5 radio.";
  var lang_vars_pre_search_msg =
    "PREn连接器，用于查找第一个搜索字在第二个搜索字之前的文档，其数量不超过规定的字数. 例. radio PRE3 antenna.";
  var lang_vars_earliest_priority_country = "最早的优先国家";
  var lang_vars_Metadata = "元数据";
  var lang_vars_selectall = "全选";
  var lang_vars_success = "成功";
  var lang_vars_weekly = "每周";
  var lang_vars_fortnightly = "半月";
  var lang_vars_monthly = "每月一次";
  var lang_vars_quarterly = "季";
  var lang_vars_concept = "概念";
  var lang_vars_request_successful = "要求成功。";
  var lang_vars_except_for_following_invalid_patents = "以下无效专利除外。";
  var lang_vars_invalid_patents_listed_below = "下面列出了无效专利。";
  var lang_vars_copy_invalid_patents_to_clipboard = "将无效专利复制到剪贴板";
  var lang_vars_all_patents_entered_are_invalid = "输入的所有专利均无效。";
  var lang_vars_Your_session_has_expired = "您的会话已过期。请再次登录";
  var lang_vars_following_pdfs_no_title = "以下PDF（s）没有标题： ";
  var lang_vars_to_upload_them_please_add_their_title_in_csv_and_try_again =
    "要上传它们，请在csv中添加标题，然后重试。";
  var lang_vars_uploading_failed = "上传失败。";
  var lang_vars_ok = "好";
  var lang_vars_past_dates_cant_be_selected_only_present_and_past_dates_are_allowed =
    "过去的日期无法选择。仅允许现在和将来的日期。";
  var lang_vars_monday = "星期一";
  var lang_vars_tuesday = "星期二";
  var lang_vars_wednesday = "星期三";
  var lang_vars_thursday = "星期四";
  var lang_vars_friday = "星期五";
  var lang_vars_error_in_Mapped_Column_for_PDF = "PDF的映射列出错";
  var lang_vars_invalid_characters_found_in_row = "在行中找到无效字符";
  var lang_vars_please_remove_them_or_use_different_encoding_and_try_again =
    "请删除它们或使用不同的编码，然后重试";
  var lang_vars_all_pdfs_in_csv_empty = "CSV中的所有PDF名称均为空。";
  var lang_vars_this_account_is_already_in_use_do_you_want_to_continue =
    "此帐户已在使用中。你想继续这样做，第一个人将被注销";
  var lang_vars_are_you_sure_to_delete_this_comment = "你肯定会删除这条评论";
  var lang_vars_select_atleast_one_valid_patent_to_search =
    "选择至少一个有效的专利进行搜索";
  var lang_vars_Invalid_Patents_Copied = "无效专利已复制";
  var lang_vars_please_login_again = "请登录";
  var lang_vars_Your_request_has_been_successfully_submitted =
    "您的请求已成功提交";
  var lang_vars_The_ADMIN_Team_will_take_2_days_to_process_your_request =
    "ADMIN团队将需要2-3天来处理您的请求";
  var lang_vars_sure_to_perform_this_action = "你确定要执行这个动作吗？";
  var lang_vars_selection_of_platform_and_main_profile_are_compulsory =
    "平台和主要轮廓的选择是强制性的";
  var lang_vars_kindly_balance_paranthesis = "请平衡查询中的括号。";
  var lang_vars_searches_in_applicant_assignee_reassignee =
    "在申请人/受让人字段中进行搜索，其中包括申请人，受让人和再受让人。";
  var lang_vars_searches_all_original_assignee = "按原始受让人名称搜索。";
  var lang_start_date_can_not_be_empty_please_select_start_date =
    "开始日期不能为空，请选择开始日期";
  var lang_end_date_can_not_be_empty_please_select_end_date =
    "结束日期不能为空，请选择结束日期";
  var lang_start_date_can_not_be_greater_than_end_date =
    "请选择开始日期之前的结束日期";
  var lang_vars_your_request_has_been_submitted_saturday =
    "您的请求已成功提交。下周六将进行处理和更新";
  var lang_vars_creation_date = "创建日期";
  var lang_vars_Publication_Country = "出版国家";
  var lang_vars_select_previous_project_code = "请选择上一个/添加新的项目代码";
  var lang_vars_please_enter_project_code = "请输入项目代码";
  var lang_vars_please_select_project_code = "请选择项目代码";
  var lang_vars_please_enter_citation_category = "请输入引用类别";
  var lang_vars_please_enter_correct_citation_category_without_any_spaces =
    "请输入正确的引文类别，不得包含空格";
  var lang_vars_this_citation_category_already_exists_in_the_project_code_msg =
    "此引用类别已存在于项目代码中";
  var lang_vars_please_select_citation_category = "请选择引用类别";
  var lang_vars_this_project_code_already_exists_please_enter_a_new_name =
    "该项目代码已存在，请输入新名称";
  var lang_vars_are_you_sure_you_want_to_delete_this_project_code =
    "您确定要删除此项目代码吗";
  var lang_vars_project_code_deletion_notification =
    "项目代码删除通知已成功发送";
  var lang_vars_citation_category_cannot_be_blank = "引用类别不能为空";
  var lang_vars_citation_category_already_exists = "引用类别已存在";
}

export default function makeSearchQuery(data_array) {
  var user_id = data_array["user_id"];
  var metadata_operator = data_array["metadata_operator"];
  var keyword_operator = data_array["keyword_operator"];
  var classification_operator = data_array["classification_operator"];
  var names_operator = data_array["names_operator"];
  var numbers_operator = data_array["numbers_operator"];
  var date_operator = data_array["date_operator"];

  var metadatafieldModel = data_array["metadatafieldModel"];
  var keywordfieldModel = data_array["keywordfieldModel"];
  var classificationfieldModel = data_array["classificationfieldModel"];
  var namesfieldModel = data_array["namesfieldModel"];
  var numbersfieldModel = data_array["numbersfieldModel"];
  var datefieldModel = data_array["datefieldModel"];
  var domain_type = data_array["domain_type"];
  var domain_email = data_array["domain_email"];
  var mainprofileSelected = [];
  var platformSelected = [];
  if (!("projectCode" in data_array)) {
    platformSelected = [];
  } else {
    platformSelected = data_array["projectCode"];
  }
  if (!("citationCategory" in data_array)) {
    mainprofileSelected = [];
  } else {
    mainprofileSelected = data_array["citationCategory"];
  }
  var countryselected = data_array["countryselected"];

  var keywordfield_array = [];
  var numbersfield_array = [];
  var validations = 1;
  var my_search_arr = [];
  var selected_columns = [];
  var temparray = [];
  var selected = [];
  var ifi_pnkind = [];
  var ifi_pubtype = [];
  var count = 0;
  var counter = 0;
  var error_msg = "";
  var operator = [];
  var string_proximity = [];
  var assignee_proximity = [];
  var search_terms = [];
  var search_final_terms = [];
  var checkTitle = 0;
  var keywords_arr = [];
  var keywords_operator_arr = [];
  var finalResponseArr = [];
  var domain_email_query = [];
  var value = "";
  var regExp = "";
  var seq_operator_find_regx = "";
  var matchFound = [];
  var country_code_arr = {
    "United States of America": "US",
    "European Patent Office": "EP",
    WIPO: "WO",
    Japan: "JP",
    China: "CN",
    India: "IN",
    ARIPO: "AP",
    Argentina: "AR",
    Austria: "AT",
    Australia: "AU",
    "Bosnia And Herzegovina": "BA",
    Belgium: "BE",
    Bulgaria: "BG",
    Boliva: "BO",
    Brazil: "BR",
    Belarus: "BY",
    Canada: "CA",
    Switzerland: "CH",
    Chile: "CL",
    Columbia: "CO",
    "Costa Rica": "CR",
    Czechoslovakia: "CS",
    Cuba: "CU",
    Cyprus: "CY",
    "Czech Republic": "CZ",
    "East Germany": "DD",
    Germany: "DE",
    Denmark: "DK",
    "Dominican Republic": "DO",
    Algeria: "DZ",
    "Eurasian Patent Organization": "EA",
    Ecuador: "EC",
    Estonia: "EE",
    Egypt: "EG",
    Spain: "ES",
    Finland: "FI",
    France: "FR",
    "Great Britain": "GB",
    GCC: "GC",
    Georgia: "GE",
    Greece: "GR",
    Guatemala: "GT",
    "Hong Kong": "HK",
    Honduras: "HN",
    Croatia: "HR",
    Hungary: "HU",
    Indonesia: "ID",
    Ireland: "IE",
    Israel: "IL",
    Iceland: "IS",
    Italy: "IT",
    Kenya: "KE",
    "South Korea": "KR",
    Kazakhstan: "KZ",
    Lithuania: "LT",
    Luxembourg: "LU",
    Latvia: "LV",
    Morocco: "MA",
    Monaco: "MC",
    Moldova: "MD",
    Mongolia: "MN",
    Malta: "MT",
    Malawi: "MW",
    Mexico: "MX",
    Malaysia: "MY",
    Nicaragua: "NI",
    Netherlands: "NL",
    Norway: "NO",
    "New Zealand": "NZ",
    OAPI: "OA",
    Panama: "PA",
    Peru: "PE",
    Philippines: "PH",
    Poland: "PL",
    Portugal: "PT",
    Paraguay: "PY",
    Romania: "RO",
    Russia: "RU",
    Sweden: "SE",
    Singapore: "SG",
    Slovenia: "SI",
    Slovakia: "SK",
    "San Marino": "SM",
    "Soviet Union": "SU",
    "El Salvador": "SV",
    Tajikistan: "TJ",
    Thailand: "TH",
    Turkey: "TR",
    Trinidad: "TT",
    Taiwan: "TW",
    "Ukranian Republic": "UA",
    Uruguay: "UY",
    Uzbekistan: "UZ",
    Venezuela: "VE",
    Vietnam: "VN",
    Yugoslavia: "YU",
    "South Africa": "ZA",
    Zambia: "ZM",
    Zimbabwe: "ZW",
  };

  if (
    (validations != 0 && countryselected.length > 0) ||
    countryselected.length == 0
  ) {
    selected = [];
    value = "";
    for (var key in countryselected) {
      if (countryselected.hasOwnProperty(key)) {
        value = countryselected[key];
        if (value in country_code_arr) {
          selected.push(country_code_arr[value]);
        }
      }
    }
    var checked_c = selected.join(" OR ");
    if (checked_c == "") {
      validations = 0;
      error_msg = lang_vars_msg_to_select_atleast_one_country;
    } else {
      counter = 0;
      my_search_arr[count] = new Array();
      my_search_arr[count][counter] = new Array();
      my_search_arr[count][counter][0] = "Publication Country";
      my_search_arr[count][counter][1] = checked_c;
      my_search_arr[count][counter][2] = " AND ";
      selected_columns[count] = "Country";
      count++;
    }
  }
  // Formatting keywords
  keywordfield_array = [];
  if (
    validations != 0 &&
    keywordfieldModel.length > 0 &&
    "value" in keywordfieldModel[0]
  ) {
    keywordfieldModel[0]["value"] = keywordfieldModel[0]["value"].trim();
    if (keywordfieldModel[0]["value"].length > 0) {
      my_search_arr[count] = new Array();
      counter = 0;
      var keys_arr = [];
      for (key in keywordfieldModel) {
        value = keywordfieldModel[key];
        if ("value" in value && value["value"].trim().length != 0) {
          value["value"] = value["value"].trim();
          var keywords_text = value["value"];
          var balancedParanthesis = checkBalancedParanthesis(keywords_text);
          if (!balancedParanthesis) {
            validations = 0;
            error_msg = lang_vars_kindly_balance_paranthesis;
            break;
          }
          if (validations != 0) {
            keywords_text = keywords_text.replace(/\s+/g, " ");
            keywords_text = keywords_text.replace(/ or /gi, " OR ");
            keywords_text = keywords_text.replace(/ and /gi, " AND ");
            keywords_text = keywords_text.replace(/ not /gi, " NOT ");

            seq_operator_find_regx = /[\s]*\b(and|or|not|near|near[\s]*\d+)\b[\s]+\b(and|or|not|near|near[\s]*\d+)\b[\s]*/gim;

            if (keywords_text.match(seq_operator_find_regx) != null) {
              validations = 0;
              error_msg =
                "You have entered two operators consecutively in your query. Please change your query.";
              break;
            } else {
              keywords_text = make_default_near(keywords_text);
            }

            regExp = /[\s]+pre[\s]*([^\s\(\[a-zA-Z\]]+)[\s]+/gim;
            matchFound = keywords_text.match(regExp);
            var x = keywords_text;
            x = x.replace(/\"/g, "");
            if (matchFound != null) {
              for (i = 0; i < matchFound.length; i++) {
                x = x.replace(matchFound[i], " OR ");
              }
            }
            regExp = /[\s]+near[\s]*([^\s\(\[a-zA-Z\]]+)[\s]+/gim;
            matchFound = x.match(regExp);
            if (matchFound != null) {
              for (i = 0; i < matchFound.length; i++) {
                x = x.replace(matchFound[i], " OR ");
              }
            }

            search_terms.push(x);

            value["value"] = keywords_text;
            if (value["value"].substr(0, 1) == "*") {
              validations = 0;
              error_msg = "Query string cannot start with *";
              break;
            }
            string_proximity.push(value["value"]);
            var string = value["value"];
            var returnVal = formatStringForElastic(string);
            if (returnVal["is_error"] == 1) {
              validations = 0;
              error_msg = "Please check your search query.";
              break;
            } else {
              string = returnVal["searchStr"];
              keywords_arr[counter] = [];
              keywords_operator_arr[counter] = [];
              keywords_arr[counter] = string.split(/ AND | OR | NOT /);
              keywords_operator_arr[counter] = string.match(
                / AND | OR | NOT /g
              );

              my_search_arr[count][counter] = [];
              my_search_arr[count][counter][0] = value["key"];
              my_search_arr[count][counter][1] = string;
              my_search_arr[count][counter][2] = value["opt"];
              keys_arr.push(value["key"]);
              counter++;
            }
          }
        } else {
          validations = 0;
          error_msg = lang_vars_input_field_cannot_be_empty;
          break;
        }
      }
      if (search_terms.length > 0) {
        search_final_terms = [];
        for (i = 0; i < search_terms.length; i++) {
          search_terms[i] = search_terms[i].replace(/\(/g, "");
          search_terms[i] = search_terms[i].replace(/\)/g, "");
          search_terms[i] = search_terms[i].replace(/\s+/g, " ");
          search_terms[i] = search_terms[i].replace(/ OR | AND | NOT /g, " ");
          search_terms[i] = search_terms[i].replace(/\s/g, " OR ");
          search_final_terms = search_final_terms.concat(
            search_terms[i].split(" OR ")
          );
        }
      }
      if (validations != 0) {
        selected_columns[count] = "Keyword";
        count++;
      }
    }
  }
  console.log("my_search_arr", my_search_arr, keywordfieldModel);
  // Formatting Classifications
  var classificationfield_array = [];
  if (
    validations != 0 &&
    classificationfieldModel.length > 0 &&
    "value" in classificationfieldModel[0]
  ) {
    classificationfieldModel[0]["value"] = classificationfieldModel[0][
      "value"
    ].trim();
    if (classificationfieldModel[0]["value"].length > 0) {
      for (key in classificationfieldModel) {
        value = classificationfieldModel[key];
        if ("value" in value && value["value"].trim().length != 0) {
          var classes = value["value"];
          balancedParanthesis = checkBalancedParanthesis(classes);
          if (!balancedParanthesis) {
            validations = 0;
            error_msg = lang_vars_kindly_balance_paranthesis;
            break;
          }
          if (validations != 0) {
            if (
              value["key"] == lang_vars_Classification_CPC_or_IPC ||
              value["key"] == lang_vars_Classification_CPC ||
              value["key"] == lang_vars_Classification_IPC ||
              value["key"] == lang_vars_Classification_ECLA
            ) {
              var result = classes.replace(/\(/g, " ");
              result = result.replace(/\)/g, " ");
              result = result.replace(/\s\s+/g, " ");
              result = result.replace(/ or /gi, " OR ");
              result = result.replace(/ and /gi, " AND ");
              result = result.replace(/ not /gi, " NOT ");
              result = result.replace(/\:/g, "");
              classes = result;
              result = result
                .split(" OR ")
                .join(" AND ")
                .split(" NOT ")
                .join(" AND ")
                .split(" AND ");
              for (var keyy in result) {
                result[keyy] = result[keyy].trim();
                var new_key = result[keyy].trim();
                new_key = new_key.replace(/\s+/g, " ");
                classes = classes.replace(result[keyy], new_key);
              }
            } else if (
              value["key"] == lang_vars_Classification_US_Main_Further
            ) {
              var result = classes.replace(/\(/g, " ");
              result = result.replace(/\)/g, " ");
              result = result.replace(/\s\s+/g, " ");
              result = result.replace(/ or /gi, " OR ");
              result = result.replace(/ and /gi, " AND ");
              result = result.replace(/ not /gi, " NOT ");
              result = result.replace(/\:/g, "");
              classes = result;
              result = result
                .split(" OR ")
                .join(" AND ")
                .split(" NOT ")
                .join(" AND ")
                .split(" AND ");

              for (var keyy in result) {
                new_key = result[keyy];
                var val = result[keyy].trim();
                if (new_key.indexOf("*") > -1) {
                  result[keyy] = val;
                  classes = classes.replace(new_key, result[keyy]);
                } else {
                  if (new_key.indexOf("/") > -1) {
                    val = val.replace("/", "");
                  }
                  val = val + "*";
                  result[keyy] = val;
                  classes = classes.replace(new_key, result[keyy]);
                }
              }
            }
            classificationfield_array.push({
              opt: value["opt"],
              key: value["key"],
              value: classes,
            });
          }
        } else {
          validations = 0;
          error_msg = lang_vars_input_field_cannot_be_empty;
          break;
        }
      }
      if (validations != 0 && classificationfield_array.length > 0) {
        my_search_arr[count] = [];
        counter = 0;
        keys_arr = [];
        for (key in classificationfield_array) {
          value = classificationfield_array[key];
          my_search_arr[count][counter] = [];
          my_search_arr[count][counter][0] = value["key"];
          my_search_arr[count][counter][1] = value["value"];
          my_search_arr[count][counter][2] = value["opt"];
          keys_arr.push(value["key"]);
          counter++;
        }
        selected_columns[count] = "Classification";
        count++;
      }
    }
  }

  //Datefield Model
  if (
    validations != 0 &&
    datefieldModel.length > 0 &&
    "value" in datefieldModel[0]
  ) {
    var datefield_array = [];
    for (key in datefieldModel) {
      value = datefieldModel[key];
      if (validations != 0) {
        var from = value.value.startDate.date;
        var to = value.value.endDate.date;

        if (
          from != null &&
          to != null &&
          from != "" &&
          to != "" &&
          from.length != 0 &&
          to.length != 0
        ) {
          var d = new Date(from);
          var d1 = new Date(to);
          if (d == "Invalid Date" || d1 == "Invalid Date") {
            validations = 0;
            error_msg = "Please enter correct date";
            break;
          } else {
            if (d1 >= d) {
              var from_date =
                d.getFullYear() +
                "" +
                ("0" + (d.getMonth() + 1)).slice(-2) +
                "" +
                ("0" + d.getDate()).slice(-2);
              var to_date =
                d1.getFullYear() +
                "" +
                ("0" + (d1.getMonth() + 1)).slice(-2) +
                "" +
                ("0" + d1.getDate()).slice(-2);
              datefield_array.push({
                opt: value["opt"],
                key: value["key"],
                value: { to: to_date, from: from_date },
              });
            } else {
              validations = 0;
              error_msg =
                "Please select the end date that fall before start date";
              break;
            }
          }
        } else if (from === undefined || to === undefined) {
          validations = 0;
          error_msg =
            "Please enter the date in correct format as mentioned on placeholder";
          break;
        } else if (
          (from != "" && to == "") ||
          (from != null && to == null) ||
          (from == null && to != null) ||
          (from == "" && to != "")
        ) {
          if ((from != "" && to == "") || (from != null && to == null)) {
            d = new Date(from);
            d1 = "*";
          } else if ((from == null && to != null) || (from == "" && to != "")) {
            d = "*";
            d1 = new Date(to);
          }
          if (d == "Invalid Date" || d1 == "Invalid Date") {
            validations = 0;
            error_msg = "Please enter correct date";
            break;
          } else {
            if (d1 == "*") {
              from_date =
                d.getFullYear() +
                "" +
                ("0" + (d.getMonth() + 1)).slice(-2) +
                "" +
                ("0" + d.getDate()).slice(-2);
              to_date = "*";
            } else if (d == "*") {
              from_date = "*";
              to_date =
                d1.getFullYear() +
                "" +
                ("0" + (d1.getMonth() + 1)).slice(-2) +
                "" +
                ("0" + d1.getDate()).slice(-2);
            }
            datefield_array.push({
              opt: value["opt"],
              key: value["key"],
              value: { to: to_date, from: from_date },
            });
          }
        }
      }
    }

    if (validations != 0 && datefield_array.length > 0) {
      my_search_arr[count] = [];
      counter = 0;
      keys_arr = [];
      for (key in datefield_array) {
        value = datefield_array[key];
        my_search_arr[count][counter] = [];
        my_search_arr[count][counter][0] = value["key"];
        my_search_arr[count][counter][1] = value["value"];
        my_search_arr[count][counter][2] = value["opt"];
        keys_arr.push(value["key"]);
        counter++;
      }
      selected_columns[count] = "Date";
      count++;
    }
  }

  // Formatting Names
  if (
    validations != 0 &&
    namesfieldModel.length > 0 &&
    "value" in namesfieldModel[0]
  ) {
    namesfieldModel[0]["value"] = namesfieldModel[0]["value"].trim();
    var i = 0;
    if (namesfieldModel[0]["value"].length > 0) {
      var namesfield_array = [];
      for (key in namesfieldModel) {
        value = namesfieldModel[key];
        if ("value" in value && value["value"].trim().length != 0) {
          if (validations != 0) {
            temparray[counter] = new Array();
            var nameVal = value["value"];
            if (nameVal.substr(0, 1) == "*") {
              validations = 0;
              error_msg = "Query string cannot start with *";
              break;
            }
            if (validations != 0) {
              var names = value["value"];
              balancedParanthesis = checkBalancedParanthesis(names);
              if (!balancedParanthesis) {
                validations = 0;
                error_msg = lang_vars_kindly_balance_paranthesis;
                break;
              }
              if (validations != 0) {
                names = names.replace(/\n/g, " ");
                names = names.replace(/ or /gi, " OR ");
                names = names.replace(/ and /gi, " AND ");
                names = names.replace(/ not /gi, " NOT ");
                names = names.replace(/\:/g, "");
                names = names.replace(/\s/g, " ");

                seq_operator_find_regx = /[\s]*\b(and|or|not|near|near[\s]*\d+)\b[\s]+\b(and|or|not|near|near[\s]*\d+)\b[\s]*/gim;

                if (names.match(seq_operator_find_regx) != null) {
                  validations = 0;
                  error_msg =
                    "You have entered two operators consecutively in your query. Please change your query.";
                  break;
                } else {
                  names = make_default_near(names);
                  namesfieldModel[key]["value"] = names;
                }
                var result = names.split(" OR ");
                temparray[i] = result.join(" OR ");
                i++;
                result = result.join(" OR ");
                string = result;
                assignee_proximity.push(value["value"]);
                var returnVal = formatStringForElastic(string);
                if (returnVal["is_error"] == 1) {
                  validations = 0;
                  error_msg = "Please check your search query.";
                  break;
                } else {
                  string = returnVal["searchStr"];
                  namesfield_array.push({
                    opt: value["opt"],
                    key: value["key"],
                    value: string,
                  });
                }
              }
            }
          }
        } else {
          validations = 0;
          error_msg = lang_vars_input_field_cannot_be_empty;
          break;
        }
      }

      if (validations != 0 && namesfield_array.length > 0) {
        my_search_arr[count] = [];
        counter = 0;
        keys_arr = [];
        for (key in namesfield_array) {
          value = namesfield_array[key];
          my_search_arr[count][counter] = [];
          if (value["key"] == lang_vars_ALL_keyword) {
            value["key"] = "Allnames";
          }
          my_search_arr[count][counter][0] = value["key"];
          my_search_arr[count][counter][1] = value["value"];
          my_search_arr[count][counter][2] = value["opt"];
          keys_arr.push(value["key"]);
          counter++;
        }
        selected_columns[count] = "Name";
        count++;
      }
    }
  }

  //Formatting Numbers
  if (
    validations != 0 &&
    numbersfieldModel.length > 0 &&
    "value" in numbersfieldModel[0]
  ) {
    var numbersfield_array = [];
    numbersfieldModel[0]["value"] = numbersfieldModel[0]["value"].trim();
    if (numbersfieldModel[0]["value"].length > 0) {
      for (key in numbersfieldModel) {
        value = numbersfieldModel[key];
        if ("value" in value && value["value"].trim().length != 0) {
          var pubnos = value["value"];
          balancedParanthesis = checkBalancedParanthesis(pubnos);
          if (!balancedParanthesis) {
            validations = 0;
            error_msg = lang_vars_kindly_balance_paranthesis;
            break;
          }
          pubnos = pubnos.replace(/\(/g, " ");
          pubnos = pubnos.replace(/\)/g, " ");
          pubnos = pubnos.replace(/-/g, "");
          pubnos = pubnos.replace(/\n/g, " ");
          pubnos = pubnos.replace(/ OR /gi, " ");
          pubnos = pubnos.replace(/\'/g, " ");
          pubnos = pubnos.replace(/\"/g, " ");
          pubnos = pubnos.replace(/\s/g, " ");
          var ucid_arr = pubnos.split(" ");
          if (validations != 0) {
            var tempQry = "";
            if (value["key"] == lang_vars_Publication_Number) {
              for (k = 0; k < ucid_arr.length; k++) {
                if (ucid_arr[k].length > 2) {
                  // ucid_arr[k] = "make_valid_num_pub_search(ucid_arr[k], 0);";
                }
              }
            }
            numbersfield_array.push({
              opt: value["opt"],
              key: value["key"],
              value: ucid_arr.join(" OR ").replace(/-/g, ""),
            });
          }
        } else {
          validations = 0;
          error_msg = lang_vars_input_field_cannot_be_empty;
          break;
        }
      }

      if (validations != 0 && numbersfield_array.length > 0) {
        my_search_arr[count] = [];
        counter = 0;
        keys_arr = [];
        for (key in numbersfield_array) {
          value = numbersfield_array[key];
          my_search_arr[count][counter] = [];
          my_search_arr[count][counter][0] = value["key"];
          my_search_arr[count][counter][1] = value["value"];
          my_search_arr[count][counter][2] = value["opt"];
          keys_arr.push(value["key"]);
          counter++;
        }
        selected_columns[count] = "Number";
        count++;
      }
    }
  }

  // Formatting Metadata
  var metadatafield_array = [];
  if (
    validations != 0 &&
    metadatafieldModel.length > 0 &&
    "value" in metadatafieldModel[0]
  ) {
    metadatafieldModel[0]["value"] = metadatafieldModel[0]["value"].trim();
    if (metadatafieldModel[0]["value"].length > 0) {
      my_search_arr[count] = new Array();
      counter = 0;
      keys_arr = [];
      for (key in metadatafieldModel) {
        value = metadatafieldModel[key];
        if ("value" in value && value["value"].trim().length != 0) {
          value["value"] = value["value"].trim();
          if (value["type"] === "radio_box" || value["type"] === "check_box") {
            const res = value["sub_templates"]
              ? value["sub_templates"].filter(
                  (sub) =>
                    sub.name.toLowerCase() == value["value"].toLowerCase()
                )
              : [];
            string = res.length ? res[0].id : -1;
            console.log("value", value["value"], string);
            if (string == -1) {
              validations = 0;
              error_msg =
                "Please enter relevant option value for the metadata field";
              break;
            }
          } else {
            var meta_text = value["value"];
            meta_text = meta_text.replace(/\s\s+/g, " ");
            meta_text = meta_text.replace(/ or /gi, " OR ");
            meta_text = meta_text.replace(/ and /gi, " AND ");
            meta_text = meta_text.replace(/ not /gi, " NOT ");
            //meta_text     = meta_text.replace(/\:/g,'');
            meta_text = meta_text;

            if (value["value"].substr(0, 1) == "*") {
              validations = 0;
              error_msg = "Query string cannot start with *";
              break;
            }
            if (validations != 0) {
              balancedParanthesis = checkBalancedParanthesis(meta_text);
              if (!balancedParanthesis) {
                validations = 0;
                error_msg = lang_vars_kindly_balance_paranthesis;
                break;
              }
              if (validations != 0) {
                var string = meta_text;

                seq_operator_find_regx = /[\s]*\b(and|or|not|near|near[\s]*\d+)\b[\s]+\b(and|or|not|near|near[\s]*\d+)\b[\s]*/gim;
                if (string.match(seq_operator_find_regx) != null) {
                  validations = 0;
                  error_msg =
                    "You have entered two operators consecutively in your query. Please change your query.";
                  break;
                } else {
                  string = make_default_near(string);
                  metadatafieldModel[key]["value"] = string;
                }

                var returnVal = formatStringForElastic(string);
                if (returnVal["is_error"] == 1) {
                  validations = 0;
                  error_msg = "Please check your search query.";
                  break;
                } else {
                  string = returnVal["searchStr"];
                }
              }
            }
          }
          console.log("my_search_arr", my_search_arr);
          if (validations != 0) {
            my_search_arr[count][counter] = [];
            my_search_arr[count][counter][0] = value["key"];
            my_search_arr[count][counter][1] = string;
            my_search_arr[count][counter][2] = value["opt"];
            my_search_arr[count][counter][3] = value["id"];
            keys_arr.push(value["key"]);
            counter++;
          }
        } else {
          validations = 0;
          error_msg = lang_vars_input_field_cannot_be_empty;
          break;
        }
      }
      if (validations != 0) {
        selected_columns[count] = "Metadata";
        count++;
      }
    }
  }
  if (validations == 1) {
    var platArr = [];
    var buckArr = [];

    if (platformSelected.length <= 0) {
      platArr = [];
      buckArr = [];
    } else {
      if (mainprofileSelected.length <= 0) {
        platArr = platformSelected;
        buckArr = [];
      } else {
        platArr = platformSelected;
        buckArr = mainprofileSelected;
      }
    }
    var query_array = [];
    query_array = { bool: { must: [], should: [], must_not: [] } };
    if (platArr.length == 0) {
    } else {
      var join_platform = [];
      for (var i = 0; i < platArr.length; i++) {
        join_platform.push(platArr[i]["id"]);
      }
      var str_platform =
        "(Profiles.Platform.id:(" + join_platform.join(" OR ") + "))";
      var qy = { query_string: { query: str_platform } };
      query_array["bool"]["must"].push(qy);
      if (buckArr.length == 0) {
        // no restriction
      } else {
        var join_buckArr = [];
        for (var i = 0; i < buckArr.length; i++) {
          join_buckArr.push(buckArr[i]["id"]);
        }
        str_platform =
          "(Profiles.Main_Profile.id:(" + join_buckArr.join(" OR ") + "))";
        var qy = { query_string: { query: str_platform } };
        query_array["bool"]["must"].push(qy);
      }
    }

    if (selected_columns.length == 1 && selected_columns[0] == "Country") {
      if (platformSelected.length <= 0) {
        validations = 0;
        error_msg = lang_vars_msg_to_select_atleast_one_searchterm_or_platform;
        finalResponseArr = {
          status: "failed",
          error_msg: error_msg,
          query_array: [],
          eng_query: eng_query,
          search_final_terms: [],
        };
      } else {
        x = my_search_arr[0][0][1].split(" OR ");
        var countryCount = x.length;
        var country_eng_query = "";
        if (countryCount == 99) {
          var str_pub_country =
            "( bibliography.publicationReference.country:(*))";
          country_eng_query = "(Publication Country:ALL)";
        } else {
          str_pub_country =
            "( bibliography.publicationReference.country:(" +
            my_search_arr[0][0][1] +
            "))";
          country_eng_query =
            "(Publication Country:" + my_search_arr[0][0][1] + ")";
        }

        if (domain_type == "shared") {
          domain_email_query = "( domain_email:(" + domain_email + "))";
        } else {
          domain_email_query = "( user_id:(" + user_id + "))";
        }
        console.log("domain_type", domain_type, domain_email_query);
        var qy1 = {
          query_string: { default_operator: "AND", query: str_pub_country },
        };
        var qy2 = {
          query_string: { default_operator: "AND", query: domain_email_query },
        };
        query_array["bool"]["must"].push(qy1);
        query_array["bool"]["must"].push(qy2);

        var plat = "";
        for (i = 0; i < platformSelected.length; i++) {
          if (plat.length == 0) {
            plat = platformSelected[i]["label"];
          } else {
            plat = plat + ", " + platformSelected[i]["label"];
          }
        }
        var bucket = "";
        for (i = 0; i < mainprofileSelected.length; i++) {
          if (bucket.length == 0) {
            bucket = mainprofileSelected[i]["label"];
          } else {
            bucket = bucket + ", " + mainprofileSelected[i]["label"];
          }
        }

        if (plat.length > 0 && bucket.length <= 0) {
          eng_query = "Project Code : " + plat;
        } else if (plat.length > 0 && bucket.length > 0) {
          eng_query =
            "(Project Code : " +
            plat +
            ", Citation Category : " +
            bucket +
            ") ";
        }

        eng_query = "(" + eng_query + ") AND " + country_eng_query;
        finalResponseArr = {
          status: "success",
          error_msg: "",
          query_array: query_array,
          eng_query: eng_query,
          search_final_terms: [],
        };
      }
    } else {
      var my_search_array_json = my_search_arr;
      var elastic_query = "";
      x = my_search_arr[0][0][1].split(" OR ");
      countryCount = x.length;
      if (countryCount == 99) {
        str_pub_country = "( bibliography.publicationReference.country:(*))";
      } else {
        str_pub_country =
          "( bibliography.publicationReference.country:(" +
          my_search_arr[0][0][1] +
          "))";
      }

      if (domain_type == "shared") {
        domain_email_query = "( domain_email:(" + domain_email + "))";
      } else {
        domain_email_query = "( user_id:(" + user_id + "))";
      }
      console.log("filterjs userObj", domain_email_query, domain_type);
      var qy1 = {
        query_string: { default_operator: "AND", query: str_pub_country },
      };
      var qy2 = {
        query_string: { default_operator: "AND", query: domain_email_query },
      };

      query_array["bool"]["must"].push(qy1);
      query_array["bool"]["must"].push(qy2);

      var qy = {
        query_string: { default_operator: "AND", query: str_pub_country },
      };
      query_array["bool"]["must"].push(qy);

      for (i = 1; i < my_search_arr.length; i++) {
        elastic_query = "";

        var group_operator = "";
        switch (selected_columns[i]) {
          case "Name":
            group_operator = names_operator;
            break;

          case "Number":
            group_operator = numbers_operator;
            break;

          case "Keyword":
            group_operator = keyword_operator;
            break;

          case "Classification":
            group_operator = classification_operator;
            break;

          case "Date":
            group_operator = date_operator;
            break;

          case "Metadata":
            group_operator = metadata_operator;
            break;
        }
        var qry;
        var qry_obj;
        var group_bool_operator = "";
        switch (group_operator) {
          case lang_vars_and_keyword:
            group_bool_operator = "AND";
            qry = { bool: { must: [] } };
            qry_obj = qry["bool"]["must"];
            break;

          case lang_vars_or_keyword:
            group_bool_operator = "OR";
            qry = { bool: { should: [] } };
            qry_obj = qry["bool"]["should"];
            break;

          case lang_vars_not_keyword:
            group_bool_operator = "NOT";
            qry = { bool: { must_not: [] } };
            qry_obj = qry["bool"]["must_not"];
            break;
        }
        var group_query;
        group_query = [];
        group_query = { bool: { must: [], should: [], must_not: [] } };
        for (var j = 0; j < my_search_arr[i].length; j++) {
          var isNearQuery = 0;
          var modified_query = my_search_arr[i][j][1];
          var str = "";
          var set_operator = "";
          var operator = my_search_arr[i][j][2];
          switch (operator) {
            case lang_vars_and_keyword:
              set_operator = "AND";
              var qry_arr = { bool: { must: [] } };
              qry_arr["bool"]["must"].push(qy);

              break;

            case lang_vars_or_keyword:
              set_operator = "OR";
              qry_arr = { bool: { should: [] } };
              qry_arr["bool"]["should"].push(qy);
              break;

            case lang_vars_not_keyword:
              set_operator = "NOT";
              qry_arr = { bool: { must_not: [] } };
              qry_arr["bool"]["must_not"].push(qy);
              break;

            default:
              break;
          }

          if (selected_columns[i] != "Date") {
            if (selected_columns[i] == "Metadata") {
              var domain = "";
              var searchValue = modified_query;
              var searchTemplate = my_search_arr[i][j][0];
              var inputVal = my_search_arr[i][j][1];
              var searchId = my_search_arr[i][j][3];
              console.log(
                "my_search_arr[i][j]",
                my_search_arr[i][j],
                modified_query
              );
              if (searchTemplate != "Comments") {
                regExp = /[\s]+near[\s]*([^\s\(\[a-zA-Z\]]+)[\s]+/gim;
                matchFound = modified_query.match(regExp);
                if (matchFound != null) {
                  if (searchId == -1) {
                    // callErrorSwal(lang_vars_proximity_search_not_allowed_in_all_metadatafields)
                    // return
                    validations = 0;
                    error_msg = "error";
                    // finalResponseArr = { "status":"failed", "error_msg":lang_vars_proximity_search_not_allowed_in_all_metadatafields, "query_array" : [], "eng_query": '', "search_final_terms":[]};
                    break;
                  }
                  isNearQuery = 1;
                  var returnVal = get_elastic_span_query(
                    searchValue,
                    "metadata." + domain_email + "." + searchId + ".value",
                    set_operator
                  );
                  if (returnVal["is_error"]) {
                    // callErrorSwal(returnVal['error_msg'])
                    validations = 0;
                    error_msg = returnVal["error_msg"];

                    // finalResponseArr = { "status":"failed", "error_msg":returnVal['error_msg'], "query_array" : [], "eng_query": '', "search_final_terms":[]};
                    break;
                    // return
                  } else {
                    str = returnVal["main_qry"];
                  }
                  qry = str;
                } else {
                  if (searchId == -1) {
                    str = "";
                    //including comments also in All metadata fields
                    str =
                      "(Comment.value:(" +
                      searchValue +
                      ") OR Comment.sso_id:(" +
                      searchValue +
                      ") OR Comment.time:(" +
                      searchValue +
                      "))";

                    if (str != "") {
                      var temp = {};
                      temp["query_string"] = {};
                      temp["query_string"] = {
                        default_operator: "AND",
                        query: str,
                      };
                      qry = temp;
                    }
                  } else {
                    str =
                      "(metadata." +
                      domain_email +
                      "." +
                      searchId +
                      ".value" +
                      ":(" +
                      searchValue +
                      "))";
                    var temp = {};
                    temp["query_string"] = {};
                    temp["query_string"] = {
                      default_operator: "AND",
                      query: str,
                    };
                    qry = temp;
                  }
                }
              } else {
                regExp = /[\s]+near[\s]*([^\s\(\[a-zA-Z\]]+)[\s]+/gim;
                matchFound = modified_query.match(regExp);
                if (matchFound != null) {
                  isNearQuery = 1;
                  var returnVal = get_elastic_span_query(
                    modified_query,
                    "Comment",
                    set_operator
                  );
                  if (returnVal["is_error"]) {
                    // callErrorSwal(returnVal['error_msg'])
                    // return
                    validations = 0;
                    error_msg = returnVal["error_msg"];
                    // finalResponseArr = { "status":"failed", "error_msg":returnVal['error_msg'], "query_array" : [], "eng_query": '', "search_final_terms":[]};
                    break;
                  } else {
                    str = returnVal["main_qry"];
                  }
                  qry = str;
                } else {
                  str =
                    "(Comment.value:(" +
                    modified_query +
                    ") OR Comment.sso_id:(" +
                    modified_query +
                    ") OR Comment.time:(" +
                    modified_query +
                    "))";
                  var temp = {};
                  temp["query_string"] = {};
                  temp["query_string"] = {
                    default_operator: "AND",
                    query: str,
                  };
                  qry = temp;
                }
              }
            } else {
              modified_query = modified_query.trim();
              regExp = /[\s]+near[\s]*([^\s\(\[a-zA-Z\]]+)[\s]+/gim;
              matchFound = modified_query.match(regExp);
              if (matchFound != null) {
                isNearQuery = 1;
                var returnVal = get_elastic_span_query(
                  modified_query,
                  my_search_arr[i][j][0],
                  set_operator
                );

                if (returnVal["is_error"]) {
                  // callErrorSwal(returnVal['error_msg'])
                  // return
                  validations = 0;
                  error_msg = returnVal["error_msg"];
                  // finalResponseArr = { "status":"failed", "error_msg":returnVal['error_msg'], "query_array" : [], "eng_query": '', "search_final_terms":[]};
                  break;
                } else {
                  str = returnVal["main_qry"];
                }
                qry = str;
              } else {
                str = "(" + modified_query + ")";
                switch (my_search_arr[i][j][0]) {
                  case "Allnames":
                    str =
                      "(((" +
                      elastic_column_map[lang_vars_Assignee] +
                      ":(" +
                      modified_query +
                      ")) OR (" +
                      elastic_column_map[lang_vars_Inventor] +
                      ":(" +
                      modified_query +
                      "))) OR  (" +
                      elastic_column_map[lang_vars_Assignee_Standardized] +
                      ":(" +
                      modified_query +
                      ")))";
                    break;

                  case lang_vars_Title_Abstract_Claim:
                    var temp_arr = [];
                    var temp_operator_arr = [];
                    temp_arr = keywords_arr[j];
                    temp_operator_arr = keywords_operator_arr[j];
                    str = "";

                    for (
                      var keyword_key = 0;
                      keyword_key < temp_arr.length;
                      keyword_key++
                    ) {
                      var tempval = temp_arr[keyword_key];
                      if (keyword_key == 0) {
                        str =
                          "(( " +
                          elastic_column_map[lang_vars_Abstract] +
                          ":(" +
                          tempval +
                          ")) OR (" +
                          elastic_column_map[lang_vars_Title] +
                          ":(" +
                          tempval +
                          ")) OR (" +
                          elastic_column_map[lang_vars_Claim] +
                          ":(" +
                          tempval +
                          ")))";
                      } else {
                        var tempoperator = temp_operator_arr[keyword_key - 1];
                        str =
                          "(" +
                          str +
                          " " +
                          tempoperator +
                          " (( " +
                          elastic_column_map[lang_vars_Abstract] +
                          ":(" +
                          tempval +
                          ")) OR (" +
                          elastic_column_map[lang_vars_Title] +
                          ":(" +
                          tempval +
                          ")) OR (" +
                          elastic_column_map[lang_vars_Claim] +
                          ":(" +
                          tempval +
                          "))))";
                      }
                    }
                    // str = '(((( _abstract.eng.text:('+modified_query+')) OR ( bibliography.title.\\*.value:('+modified_query+'))) OR ( claims.\\*.claim:('+modified_query+'))) NOT ( _abstract.eng.text:('+modified_query+'))';
                    break;

                  case lang_vars_Title_Abstract:
                    temp_arr = [];
                    temp_operator_arr = [];
                    temp_arr = keywords_arr[j];
                    temp_operator_arr = keywords_operator_arr[j];
                    str = "";
                    for (
                      keyword_key = 0;
                      keyword_key < temp_arr.length;
                      keyword_key++
                    ) {
                      tempval = temp_arr[keyword_key];
                      if (keyword_key == 0) {
                        str =
                          "(( " +
                          elastic_column_map[lang_vars_Abstract] +
                          ":(" +
                          tempval +
                          ")) OR (" +
                          elastic_column_map[lang_vars_Title] +
                          ":(" +
                          tempval +
                          ")))";
                      } else {
                        tempoperator = temp_operator_arr[keyword_key - 1];
                        str =
                          "(" +
                          str +
                          " " +
                          tempoperator +
                          " (( " +
                          elastic_column_map[lang_vars_Abstract] +
                          ":(" +
                          tempval +
                          ")) OR (" +
                          elastic_column_map[lang_vars_Title] +
                          ":(" +
                          tempval +
                          "))))";
                      }
                    }
                    break;

                  case lang_vars_ALL_keyword:
                    str = "(" + modified_query + ")";

                    break;
                  case lang_vars_Full_Text:
                    temp_arr = [];
                    temp_operator_arr = [];
                    temp_arr = keywords_arr[j];
                    temp_operator_arr = keywords_operator_arr[j];
                    str = "";

                    for (
                      keyword_key = 0;
                      keyword_key < temp_arr.length;
                      keyword_key++
                    ) {
                      tempval = temp_arr[keyword_key];
                      if (keyword_key == 0) {
                        str =
                          "(( " +
                          elastic_column_map[lang_vars_Abstract] +
                          ":(" +
                          tempval +
                          ")) OR (" +
                          elastic_column_map[lang_vars_Title] +
                          ":( " +
                          tempval +
                          ")) OR (" +
                          elastic_column_map[lang_vars_Claim] +
                          ":(" +
                          tempval +
                          ")) OR (" +
                          elastic_column_map[lang_vars_Description] +
                          ":(" +
                          tempval +
                          ")))";
                      } else {
                        tempoperator = temp_operator_arr[keyword_key - 1];
                        str =
                          "(" +
                          str +
                          " " +
                          tempoperator +
                          " (( " +
                          elastic_column_map[lang_vars_Abstract] +
                          ":(" +
                          tempval +
                          ")) OR (" +
                          elastic_column_map[lang_vars_Title] +
                          ":(" +
                          tempval +
                          ")) OR (c" +
                          elastic_column_map[lang_vars_Claim] +
                          ":(" +
                          tempval +
                          ")) OR (" +
                          elastic_column_map[lang_vars_Description] +
                          ":(" +
                          tempval +
                          "))))";
                      }
                    }
                    break;
                  case lang_vars_Classification_CPC_or_IPC:
                    str =
                      "((" +
                      elastic_column_map[lang_vars_Classification_IPC] +
                      ":(" +
                      modified_query +
                      ")) OR (" +
                      elastic_column_map[lang_vars_Classification_CPC] +
                      ":(" +
                      modified_query +
                      ")))";
                    if (modified_query.indexOf("*") > -1) {
                      modified_query = modified_query.replace(/\/+/g, "\\/");
                      modified_query = modified_query.replace(/\ +/g, "\\ ");
                      str =
                        "((" +
                        elastic_column_map[lang_vars_Classification_IPC] +
                        ".keyword:(" +
                        modified_query +
                        ")) OR (" +
                        elastic_column_map[lang_vars_Classification_CPC] +
                        ".keyword:(" +
                        modified_query +
                        ")))";
                    } else {
                      str =
                        "((" +
                        elastic_column_map[lang_vars_Classification_IPC] +
                        ':("' +
                        modified_query +
                        '")) OR (' +
                        elastic_column_map[lang_vars_Classification_CPC] +
                        ':("' +
                        modified_query +
                        '")))';
                    }
                    break;
                  case lang_vars_Classification_IPC:
                    if (modified_query.indexOf("*") > -1) {
                      modified_query = modified_query.replace(/\/+/g, "\\/");
                      modified_query = modified_query.replace(/\ +/g, "\\ ");
                      str =
                        elastic_column_map[lang_vars_Classification_IPC] +
                        ".keyword:(" +
                        modified_query +
                        ")";
                    } else {
                      str =
                        elastic_column_map[lang_vars_Classification_IPC] +
                        ':("' +
                        modified_query +
                        '")';
                    }
                    break;
                  case lang_vars_Classification_CPC:
                    if (modified_query.indexOf("*") > -1) {
                      modified_query = modified_query.replace(/\/+/g, "\\/");
                      modified_query = modified_query.replace(/\ +/g, "\\ ");
                      str =
                        elastic_column_map[lang_vars_Classification_CPC] +
                        ".keyword:(" +
                        modified_query +
                        ")";
                    } else {
                      str =
                        elastic_column_map[lang_vars_Classification_CPC] +
                        ':("' +
                        modified_query +
                        '")';
                    }
                    break;
                  case lang_vars_Classification_US_Main_Further:
                    str =
                      "((" +
                      elastic_column_map[
                        lang_vars_Classification_US_Main_Further
                      ] +
                      ":(" +
                      modified_query +
                      ")) AND ( " +
                      elastic_column_map[lang_vars_Publication_Country] +
                      ":(US)))";
                    break;

                  case lang_vars_Priority_Number:
                  case lang_vars_Earliest_Priority_Number:
                  case lang_vars_Application_Number:
                    str =
                      "(" +
                      elastic_column_map[my_search_arr[i][j][0]] +
                      ":(" +
                      modified_query.replace(/\//g, "\\/") +
                      "))";
                    break;

                  default:
                    str =
                      "(" +
                      elastic_column_map[my_search_arr[i][j][0]] +
                      ":(" +
                      modified_query +
                      "))";
                    break;
                }
                temp = {};
                temp["query_string"] = {};
                temp["query_string"] = { default_operator: "AND", query: str };
                qry = temp;
              }
            }
          } else {
            var temp = {};
            if (modified_query["from"] == "*") {
              modified_query["from"] = new Date(1699, 0, 1, 0, 0, 0, 0);
              var temp_date = modified_query["from"];
              modified_query["from"] =
                temp_date.getFullYear() +
                "" +
                ("0" + (temp_date.getMonth() + 1)).slice(-2) +
                "" +
                ("0" + temp_date.getDate()).slice(-2);
            }
            if (modified_query["to"] == "*") {
              modified_query["to"] = new Date();
              temp_date = modified_query["to"];
              modified_query["to"] =
                temp_date.getFullYear() +
                "" +
                ("0" + (temp_date.getMonth() + 1)).slice(-2) +
                "" +
                ("0" + temp_date.getDate()).slice(-2);
            }
            if (my_search_arr[i][j][0] == lang_vars_creation_date) {
              modified_query["to"] =
                modified_query["to"].substr(0, 4) +
                "-" +
                modified_query["to"].substr(4, 2) +
                "-" +
                modified_query["to"].substr(6, 2);
              modified_query["from"] =
                modified_query["from"].substr(0, 4) +
                "-" +
                modified_query["from"].substr(4, 2) +
                "-" +
                modified_query["from"].substr(6, 2);
            }
            temp["range"] = {};
            if (
              elastic_column_map[my_search_arr[i][j][0]] == "Dates.creation"
            ) {
              temp["range"][elastic_column_map[my_search_arr[i][j][0]]] = {
                gte: modified_query["from"],
                lte: modified_query["to"],
              };
            } else {
              temp["range"][elastic_column_map[my_search_arr[i][j][0]]] = {
                gte: modified_query["from"],
                lte: modified_query["to"],
              };
            }
            qry = temp;
          }
          if (j == 0) {
            switch (set_operator) {
              case "AND":
                group_query["bool"]["must"].push(qry);
                break;

              case "OR":
                group_query["bool"]["should"].push(qry);
                break;

              case "NOT":
                group_query["bool"]["must_not"].push(qry);
                break;
            }
          } else {
            var temp_query_array = {};
            temp_query_array = { bool: { must: [], should: [], must_not: [] } };
            switch (set_operator) {
              case "AND":
                temp_query_array["bool"]["must"].push(qry);
                temp_query_array["bool"]["must"].push(group_query);
                break;

              case "OR":
                temp_query_array["bool"]["should"].push(qry);
                temp_query_array["bool"]["should"].push(group_query);
                break;

              case "NOT":
                temp_query_array = group_query;
                group_query["bool"]["must_not"].push(qry);
                break;
            }
            group_query = temp_query_array;
          }
        }
        if (i == 1) {
          // if(selected_columns[i] == 'Date'){
          qry = group_query;
          // }else{
          //     qry = {"query_string":{"default_operator":"AND","query":group_query}}
          // }
          switch (group_bool_operator) {
            case "AND":
              query_array["bool"]["must"].push(qry);
              break;

            case "OR":
              query_array["bool"]["should"].push(qry);
              break;

            case "NOT":
              query_array["bool"]["must_not"].push(qry);
              break;
          }
        } else {
          temp_query_array = {};
          temp_query_array = { bool: { must: [], should: [], must_not: [] } };
          // if(selected_columns[i] == 'Date'){
          qry = group_query;
          // }else{
          //     qry = {"query_string":{"default_operator":"AND","query":group_query}}
          // }
          switch (group_bool_operator) {
            case "AND":
              var qry1 = [];
              qry1 = query_array;
              temp_query_array["bool"]["must"].push(qry);
              temp_query_array["bool"]["must"].push(qry1);
              break;

            case "OR":
              qry1 = [];
              qry1 = query_array;
              temp_query_array["bool"]["should"].push(qry);
              temp_query_array["bool"]["should"].push(qry1);
              break;

            case "NOT":
              temp_query_array = query_array;
              query_array["bool"]["must_not"].push(qry);
              break;
          }
          query_array = temp_query_array;
        }

        if (validations == 0) {
          break;
        }
      }
      console.log("validations", validations, error_msg, returnVal);
      //Making english query
      if (validations != 0) {
        var operators = [];
        var operator_count = 0;
        for (i = 0; i < selected_columns.length; i++) {
          if (selected_columns[i] == "Country") {
          } else {
            switch (selected_columns[i]) {
              case "Keyword":
                operators[operator_count] = keyword_operator;
                break;

              case "Name":
                operators[operator_count] = names_operator;
                break;

              case "Classification":
                operators[operator_count] = classification_operator;
                break;

              case "Number":
                operators[operator_count] = numbers_operator;
                break;

              case "Date":
                operators[operator_count] = date_operator;
                break;
              case "Metadata":
                operators[operator_count] = metadata_operator;
                break;

              default:
                break;
            }

            operator_count++;
          }
        }
        var eng_query = "";
        plat = "";
        for (i = 0; i < platformSelected.length; i++) {
          if (plat.length == 0) {
            plat = platformSelected[i]["label"];
          } else {
            plat = plat + ", " + platformSelected[i]["label"];
          }
        }
        bucket = "";
        for (i = 0; i < mainprofileSelected.length; i++) {
          if (bucket.length == 0) {
            bucket = mainprofileSelected[i]["label"];
          } else {
            bucket = bucket + ", " + mainprofileSelected[i]["label"];
          }
        }

        if (plat.length > 0 && bucket.length <= 0) {
          eng_query = "(Project Code : " + plat + ") AND ";
        } else if (plat.length > 0 && bucket.length > 0) {
          eng_query =
            "(Project Code : " +
            plat +
            ", Citation Category : " +
            bucket +
            ") AND ";
        }
        for (var jsonkey = 0; jsonkey < my_search_arr.length; jsonkey++) {
          // //console.log(my_search_array_json[jsonkey]);
          for (var k = 0; k < my_search_array_json[jsonkey].length; k++) {
            var jsonvalue = my_search_array_json[jsonkey][k];
            if (jsonvalue["0"] == "Publication Country") {
              if (jsonvalue["1"].split(" OR ").length == 99) {
                jsonvalue["1"] = lang_vars_ALL_keyword;
              } else if (jsonvalue["1"] == "*") {
                jsonvalue["1"] = lang_vars_ALL_keyword;
              }
            }
            if (jsonvalue["0"] == "Allnames") {
              jsonvalue["0"] = "Names";
            }
            if (
              jsonvalue["0"] == lang_vars_ALL_keyword ||
              jsonvalue["0"] == lang_vars_Title ||
              jsonvalue["0"] == lang_vars_Full_Text ||
              (jsonvalue["0"] == lang_vars_Abstract) |
                (jsonvalue["0"] == lang_vars_Claim) ||
              jsonvalue["0"] == lang_vars_Description ||
              jsonvalue["0"] == lang_vars_Title_Abstract_Claim ||
              jsonvalue["0"] == lang_vars_Title_Abstract
            ) {
              jsonvalue["1"] = string_proximity[k];
            }
            if (
              jsonvalue["0"] == "Names" ||
              jsonvalue["0"] == lang_vars_Assignee ||
              jsonvalue["0"] == lang_vars_Inventor ||
              jsonvalue["0"] == lang_vars_Assignee_Standardized
            ) {
              jsonvalue["1"] = assignee_proximity[k];
            }
            if (
              jsonvalue["0"] == lang_vars_Publication_Date ||
              jsonvalue["0"] == lang_vars_Application_Date ||
              jsonvalue["0"] == lang_vars_Priority_Date ||
              jsonvalue["0"] == lang_vars_Earliest_Priority_Date ||
              jsonvalue["0"] == lang_vars_creation_date
            ) {
              if (k == 0) {
                eng_query =
                  eng_query +
                  " (" +
                  jsonvalue["0"] +
                  " : " +
                  jsonvalue["1"]["from"] +
                  " to " +
                  jsonvalue["1"]["to"] +
                  ")";
              } else {
                eng_query =
                  eng_query +
                  " " +
                  jsonvalue["2"] +
                  " " +
                  "(" +
                  jsonvalue["0"] +
                  " : " +
                  jsonvalue["1"]["from"] +
                  " to " +
                  jsonvalue["1"]["to"] +
                  ") ";
              }
            } else {
              if (k == 0) {
                if (jsonvalue.length == 6 && jsonvalue[5] != "text") {
                  eng_query =
                    eng_query +
                    " (" +
                    jsonvalue["0"] +
                    " : " +
                    jsonvalue["4"] +
                    ")";
                } else {
                  eng_query =
                    eng_query +
                    " (" +
                    jsonvalue["0"] +
                    " : " +
                    jsonvalue["1"] +
                    ")";
                }
              } else {
                if (jsonvalue.length == 6 && jsonvalue[5] != "text") {
                  eng_query =
                    eng_query +
                    " " +
                    jsonvalue["2"] +
                    " " +
                    "(" +
                    jsonvalue["0"] +
                    " : " +
                    jsonvalue["4"] +
                    ") ";
                } else {
                  eng_query =
                    eng_query +
                    " " +
                    jsonvalue["2"] +
                    " " +
                    "(" +
                    jsonvalue["0"] +
                    " : " +
                    jsonvalue["1"] +
                    ") ";
                }
              }
            }
          }
          if (jsonkey != my_search_array_json.length - 1) {
            eng_query = eng_query + " " + operators[jsonkey];
          }
        }
        finalResponseArr = {
          status: "success",
          error_msg: "",
          query_array: query_array,
          eng_query: eng_query,
          search_final_terms: search_final_terms,
        };
      } else {
        finalResponseArr = {
          status: "failed",
          error_msg: error_msg,
          query_array: [],
          eng_query: "",
          search_final_terms: [],
        };
      }
    }
  } else {
    finalResponseArr = {
      status: "failed",
      error_msg: error_msg,
      query_array: [],
      eng_query: "",
      search_final_terms: [],
    };
  }
  return finalResponseArr;
}
function trimBracketsAtPeaks(str) {
  var temp_stack_arr = [];
  var temp_qry_arr = [];
  temp_qry_arr = str.split(/ /);
  for (var i = 0; i < temp_qry_arr.length; i++) {
    if (temp_qry_arr[i] != ")") {
      temp_stack_arr.push(temp_qry_arr[i]);
    } else {
      var stack_len = 0;
      var top = "";
      var temp_arr1 = [];
      temp_arr1.unshift(temp_qry_arr[i]);
      while (temp_stack_arr.length != 0) {
        stack_len += 1;
        top = temp_stack_arr.pop();
        temp_arr1.unshift(top);
        if (top == "(") {
          break;
        }
      }
      if (top == "(" && stack_len == 1) {
        if (str.indexOf("(") == 0 && str.lastIndexOf(")") == str.length - 1) {
          str = str.substring(1, str.length - 1);
          str = str.trim();
          // str = trimBracketsAtPeaks(str)
        }
      }
    }
  }
  return str;
}
function get_stack_top(arr) {
  var top = "";
  if (arr.length > 0) {
    top = arr[arr.length - 1];
  }
  return top;
}

function insertBracketsInUserQuery(query_arr) {
  var temp_arr = [];
  var str = "";
  if (query_arr.length > 0) {
    str = query_arr[0];
    temp_arr.push(query_arr[0]);
    for (var j = 1; j < query_arr.length; j++) {
      temp_arr.push(query_arr[j]);
      if (temp_arr.length % 3 == 0) {
        str = "( " + temp_arr[0] + " " + temp_arr[1] + " " + temp_arr[2] + " )";
        temp_arr = [];
        temp_arr.push(str);
      }
    }
  }
  // str = '( ' +str +' )'
  return str;
}
function balanceTermsforBracketInsertion(qry_arr) {
  var temp_arr = [];
  for (var i = 0; i < qry_arr.length; i++) {
    if (qry_arr[i] != ")") {
      temp_arr.push(qry_arr[i]);
    } else {
      var temp_stack = [];
      for (var j = temp_arr.length - 1; j >= 0; j--) {
        if (temp_arr[j] == "(") {
          break;
        } else {
          temp_stack.unshift(temp_arr[j]);
        }
      }
      var stcklen = temp_stack.length;
      temp_arr.splice(j, stcklen + 1);
      var arr = balanceTermsforBracketInsertion(temp_stack);
      var output_qry = insertBracketsInUserQuery(arr);
      // output_qry =trimBracketsAtPeaks(output_qry)
      temp_arr.push(output_qry);
    }
  }
  return temp_arr;
}
function insertNear0intoQuery(arr) {
  var tempArr = [];
  var qrystr = "";
  qrystr = arr[0];
  var previous_value = qrystr;
  for (var i = 1; i < arr.length; i++) {
    if (
      arr[i] == "AND" ||
      arr[i] == "OR" ||
      arr[i] == "NOT" ||
      arr[i].match(/[\s](near)[\d]+[\s]/i) != null
    ) {
      qrystr = qrystr + " " + arr[i];
    } else {
      if (
        previous_value != "AND" &&
        previous_value != "OR" &&
        previous_value != "NOT" &&
        previous_value.match(/[\s](near)[\d]+[\s]/i) == null
      ) {
        qrystr = "( " + qrystr + " near0 " + arr[i] + " )";
      } else {
        qrystr = "( " + qrystr + " " + arr[i] + " )";
      }
    }
    previous_value = arr[i];
  }
  return qrystr;
}
function BreakInvertedCommaQuery(qry_arr) {
  var temp_arr = [];
  var output_qry = "";
  var invertedCommaOccurred = 0;
  for (var i = 0; i < qry_arr.length; i++) {
    if (qry_arr[i] == '"' || qry_arr[i] == "'") {
      if (!invertedCommaOccurred) {
        for (var j = 0; j < temp_arr.length; j++) {
          output_qry = output_qry + " " + temp_arr[j];
        }
        temp_arr = [];
        temp_arr.push(qry_arr[i]);
        invertedCommaOccurred = 1;
      } else {
        var temp_stack = [];
        if (invertedCommaOccurred) {
          for (var j = temp_arr.length - 1; j >= 0; j--) {
            if (temp_arr[j] == '"' || temp_arr[j] == "'") {
              break;
            } else {
              temp_stack.unshift(temp_arr[j]);
            }
          }
          var stcklen = temp_stack.length;
          temp_arr.splice(j, stcklen + 1);
          var returnVal = insertNear0intoQuery(temp_stack);
          output_qry = output_qry + " " + returnVal;
          invertedCommaOccurred = 0;
        } else {
        }
      }
    } else {
      temp_arr.push(qry_arr[i]);
    }
  }
  var top = "";
  while (temp_arr.length != 0) {
    top = temp_arr.shift();
    output_qry = output_qry + " " + top;
  }
  return output_qry;
}
function checkOperatorInstring(str) {
  var AND_occurence = str.indexOf(" AND ");
  var OR_occurence = str.indexOf(" OR ");
  var NOT_occurence = str.indexOf(" NOT ");
  var NEAR_occurence = str.match(/[\s](near)[\d]+[\s]/i);
  var arr = {
    AND: AND_occurence,
    OR: OR_occurence,
    NOT: NOT_occurence,
    NEAR: NEAR_occurence,
  };
  var max = -1;
  var maxIndex = "";
  var key;
  for (key in arr) {
    if (key == "AND" || key == "OR" || key == "NOT") {
      if (arr[key] != -1 && (key == "AND" || key == "NOT")) {
        max = arr[key];
        maxIndex = key;
      } else if (arr[key] != -1 && max == -1) {
        max = arr[key];
        maxIndex = key;
      }
    } else {
      if (arr[key] != null) {
        var matchFound = arr[key];
        var matchFoundLast = matchFound[matchFound.length - 1];
        var strIndex = str.lastIndexOf(matchFoundLast);
        if (max < strIndex) {
          max = strIndex;
          maxIndex = key;
        }
      }
    }
  }
  return maxIndex;
}
function formatStringForElastic(string) {
  string = string.replace(/[`~!@#$%^&_|+\-=;:,.<>\\\/]/gi, " ");
  string = string.replace(/[\s]+/g, " ");

  var is_error = 0;
  //replace strings like "near 5" to near5  menaing replacing space b/w near and digit.
  var regExp = /[\s]+near[\s]*([^\s\(\[a-zA-Z\]]+)[\s]+/gim;
  var matchFound = string.match(regExp);
  if (matchFound != null) {
    for (var i = 0; i < matchFound.length; i++) {
      var initalMatch = matchFound[i].trim(); // important
      matchFound[i] = matchFound[i].replace(/\s+/g, "");
      string = string.replace(initalMatch, matchFound[i]);
    }
  }
  var temp_arr = [];
  string = string.trim();
  temp_arr = string.split(/ /); //split string with space.
  var tempstr = "";
  var previous_element = "";
  var encountered_inverted_comma = 0;
  if (temp_arr.length > 0) {
    previous_element = temp_arr[0];
    tempstr = temp_arr[0];
    if (temp_arr[0].indexOf('"') != -1) {
      encountered_inverted_comma = 1;
    }
  }

  // this loop inserts AND b/w every 2 words that are not operators
  for (var i = 1; i < temp_arr.length; i++) {
    if (encountered_inverted_comma == 1) {
      if (temp_arr[i] == '"' || temp_arr[i] == "'") {
        encountered_inverted_comma = 0;
      } else if (
        temp_arr[i].indexOf('"') == temp_arr[i].length - 1 ||
        temp_arr[i].indexOf("'") == temp_arr[i].length - 1
      ) {
        encountered_inverted_comma = 0;
      }
      tempstr = tempstr + " " + temp_arr[i];
    } else {
      if (
        temp_arr[i] == '"' ||
        temp_arr[i] == "'" ||
        temp_arr[i].indexOf('"') == 0 ||
        temp_arr[i].indexOf("'") == 0
      ) {
        encountered_inverted_comma = 1;
        if (
          previous_element == "AND" ||
          previous_element == "OR" ||
          previous_element == "NOT" ||
          previous_element == "(" ||
          previous_element == ")" ||
          previous_element.indexOf("(") == previous_element.length - 1 ||
          previous_element.indexOf(")") == previous_element.length - 1
        ) {
          tempstr = tempstr + " " + temp_arr[i];
        } else {
          tempstr = tempstr + " AND " + temp_arr[i];
        }
      } else {
        if (
          temp_arr[i] == "AND" ||
          temp_arr[i] == "OR" ||
          temp_arr[i] == "NOT" ||
          temp_arr[i] == "(" ||
          temp_arr[i] == ")"
        ) {
          tempstr = tempstr + " " + temp_arr[i];
        } else {
          if (
            previous_element == "AND" ||
            previous_element == "OR" ||
            previous_element == "NOT" ||
            previous_element == '"' ||
            previous_element == "'" ||
            previous_element.indexOf("'") == previous_element.length - 1 ||
            previous_element.indexOf('"') == previous_element.length - 1 ||
            previous_element == "("
          ) {
            if (
              (previous_element == "'" ||
                previous_element.indexOf("'") == previous_element.length - 1 ||
                previous_element.indexOf('"') == previous_element.length - 1) &&
              temp_arr[i].indexOf("~") == -1
            ) {
              tempstr = tempstr + " AND " + temp_arr[i];
            } else {
              tempstr = tempstr + " " + temp_arr[i];
            }
          } else {
            tempstr = tempstr + " AND " + temp_arr[i];
          }
        }
      }
    }
    previous_element = temp_arr[i];
  }

  // above loop considered 'AND, OR, NOT' as operators but not near.. so it inserted AND before and after near also. so the following loop replaces AND before and after near
  regExp = /(AND)[\s]+near[\s]*([^\s\(\[a-zA-Z\]]+)[\s]+(AND)/gim; //change this
  matchFound = tempstr.match(regExp);
  if (matchFound != null) {
    for (var i = 0; i < matchFound.length; i++) {
      initalMatch = matchFound[i];
      matchFound[i] = matchFound[i].replace(/(AND)+/g, "");
      tempstr = tempstr.replace(initalMatch, matchFound[i]);
      tempstr = tempstr.replace(/[\s]+/, " ");
    }
  }

  // this loop converted query that has search terms in inverted comma - near) form. example "air conditioning" near5 fluid will be equivalent to ((air near0 conditioning) near5 fluid)
  if (tempstr.match(/[\s](near)[\d]+[\s]/i) != null) {
    var qry_str = tempstr;
    qry_str = qry_str.replace(/\(/g, " ( ");
    qry_str = qry_str.replace(/\)/g, " ) ");
    qry_str = qry_str.replace(/\"/g, ' " ');
    qry_str = qry_str.replace(/\'/g, " ' ");
    qry_str = qry_str.replace(/[\s]+/g, " ");
    var qry_str = qry_str.trim();
    qry_arr = [];
    qry_arr = qry_str.split(/ /);
    var output_qry = BreakInvertedCommaQuery(qry_arr);
    tempstr = output_qry;
  }

  // this inserts brackets in case brackets are not present assuming preference from left to right in case near is present.
  if (tempstr.match(/[\s](near)[\d]+[\s]/i) != null) {
    var qry_str = tempstr;
    qry_str = qry_str.replace(/\(/g, " ( ");
    qry_str = qry_str.replace(/\)/g, " ) ");
    qry_str = qry_str.replace(/[\s]+/g, " ");
    qry_str = qry_str.trim();
    var qry_arr = [];
    qry_arr = qry_str.split(/ /);
    var temp_arr = [];
    var top = "";

    qry_arr = balanceTermsforBracketInsertion(qry_arr);
    console.log(qry_arr);
    output_qry = insertBracketsInUserQuery(qry_arr);
    console.log(output_qry);

    // output_qry =trimBracketsAtPeaks(output_qry)
    tempstr = output_qry;
  }

  //check whether query is logically correct or not
  var temparray = [];
  tempstr = tempstr.trim();
  var queryArr = tempstr.split(/ /);
  for (var ii = 0; ii < queryArr.length; ii++) {
    if (queryArr[ii] != ")") {
      temparray.push(queryArr[ii]);
    } else {
      var tempStck = [];
      temparray.push(queryArr[ii]);
      var top = temparray.pop();
      var operator = "";
      var checkOperator = [];
      while (top != "(" && temparray.length != 0) {
        tempStck.unshift(top);
        console.log(top.match(/[\s](near)[\d]+[\s]/i));
        if (top == "AND") {
          operator = top;
        } else if (top == "OR") {
          operator = top;
        } else if (top == "NOT") {
          operator = top;
        } else if (
          (top.match(/[\s](near)[\d]+[\s]/i) != null &&
            top.trim().length <= 9) ||
          (top.match(/(near)[\d]+/i) != null && top.trim().length <= 6)
        ) {
          // if((top.trim()).length <= 6){
          operator = top;
          // }
        } else if (top != ")" && top != "(") {
          var returnVal = checkOperatorInstring(top);
          checkOperator.push(returnVal);
        }
        top = temparray.pop();
      }
      if (top == "(") {
        tempStck.unshift(top);
      }
      if (operator != "") {
        if (operator == "AND" || operator == "OR" || operator == "NOT") {
          // do nothing
        } else {
          for (var j = 0; j < checkOperator.length; j++) {
            if (checkOperator[j] == "AND" || checkOperator[j] == "NOT") {
              is_error = 1;
            }
          }
        }
      }
      if (is_error) {
        break;
      }
      var tempString = tempStck.join(" ");
      temparray.push(tempString);
    }
  }

  //extra space removal in query and before and after brackets accordingly
  if (!is_error) {
    tempstr = tempstr.replace(/\([\s]+/g, "(");
    tempstr = tempstr.replace(/[\s]+\)/g, ")");
    tempstr = tempstr.replace(/[\s]+/g, " ");
    tempstr = tempstr.trim();
    console.log("final string after conversions " + tempstr);
    if (tempstr == "" || tempstr.length == 0) {
      is_error = 1;
    }
  }
  var returnArr = { is_error: is_error, searchStr: tempstr };

  return returnArr;
}

function makeWildCardQuery(field, value) {
  var wildCardQuery = { IsChanged: 0, changedValue: value };
  var starIndex = value.indexOf("*");
  var questionMarkIndex = value.indexOf("?");
  if (starIndex == -1 && questionMarkIndex == -1) {
  } else {
    var x = {};
    x["span_multi"] = {};
    x["span_multi"]["match"] = {};
    x["span_multi"]["match"]["wildcard"] = {};
    x["span_multi"]["match"]["wildcard"][field] = {
      value: value,
      rewrite: "top_terms_1024",
    };
    wildCardQuery.changedValue = x;
    wildCardQuery.IsChanged = 1;
  }
  return wildCardQuery;
}
function maketermQuery(field, value) {
  var x = {};
  x["span_term"] = {};
  x["span_term"][field] = value;
  return x;
}
function makeQuery(stck, field, AND_NOT_qry_occurence) {
  var j;
  var qry = {};
  var query_type = "";
  var comments_search_fields_arr = [
    "Comment.time",
    "Comment.value",
    "Comment.sso_id",
  ];
  if (stck[0] == "(" && stck[stck.length - 1] == ")") {
    stck = stck.slice(1, stck.length - 1);
  }
  var elastic_field = "";
  if (
    field == lang_vars_Title_Abstract ||
    field == lang_vars_Title_Abstract_Claim ||
    field == lang_vars_Full_Text
  ) {
    elastic_field = "bibliography.title.eng.value";
  } else {
    elastic_field = field;
  }
  var duplicated_query = 0;
  if (stck.length > 1 && stck.length <= 3) {
    var operator_index = 0;
    for (j = 0; j < stck.length; j++) {
      if (typeof stck[j] == "string") {
        if (
          stck[j] == "AND" ||
          stck[j] == "OR" ||
          stck[j] == "NOT" ||
          stck[j].match(/(near)[\d]+/i) != null
        ) {
          operator_index = j;
          break;
        }
      }
    }
    var span_operator = stck[j];

    stck.splice(j, 1);
    qry = {};
    var check_OR_bool_existence = 0;
    if (span_operator == "AND" || span_operator == "NOT") {
      qry = {};
      qry["bool"] = {};
      qry["bool"]["must"] = [];
      qry["bool"]["must_not"] = [];
      qry["bool"]["should"] = [];
    }
    for (var k = 0; k < stck.length; k++) {
      var temp_qry = "";
      var wildCard_return = {};
      var multiChange = 0;
      var multiChangeValue = "";
      if (typeof stck[k] != "object") {
        stck[k] = stck[k].toLowerCase();
        wildCard_return = makeWildCardQuery(elastic_field, stck[k]);
        multiChangeValue = "";
        multiChange = 0;
        if (wildCard_return["IsChanged"]) {
          multiChange = 1;
          multiChangeValue = wildCard_return["changedValue"];
        }
      }
      if (span_operator == "AND" || span_operator == "NOT") {
        duplicated_query = 1;
        if (span_operator == "AND") {
          query_type = "query_string_AND";
        } else {
          query_type = "query_string_NOT";
        }
        if (typeof stck[k] == "object") {
          temp_qry = stck[k];
          if (
            AND_NOT_qry_occurence == 0 &&
            (field == lang_vars_Title_Abstract ||
              field == lang_vars_Title_Abstract_Claim ||
              field == lang_vars_Full_Text)
          ) {
            console.log(temp_qry);
            if (field == lang_vars_Title_Abstract) {
              var elastic_field_arr = [
                "_abstract.eng.text",
                "bibliography.title.eng.value",
              ];
            } else if (field == lang_vars_Title_Abstract_Claim) {
              elastic_field_arr = [
                "claims.eng.claim",
                "_abstract.eng.text",
                "bibliography.title.eng.value",
              ];
            } else if (field == lang_vars_Full_Text) {
              elastic_field_arr = [
                "description.eng.full",
                "claims.eng.claim",
                "_abstract.eng.text",
                "bibliography.title.eng.value",
              ];
            }
            var tempQryArr = {};
            tempQryArr["bool"] = {};
            tempQryArr["bool"]["should"] = [];
            for (var ii = 0; ii < elastic_field_arr.length; ii++) {
              var tempVal = JSON.stringify(temp_qry);
              var tempVal1 = tempVal.replace(
                /(bibliography.title.eng.value)/g,
                elastic_field_arr[ii]
              );
              var temp_qry1 = JSON.parse(tempVal1);
              tempQryArr["bool"]["should"].push(temp_qry1);
            }
            if (span_operator == "AND") {
              qry["bool"]["must"].push(tempQryArr);
            } else {
              if (k == 0) {
                qry["bool"]["should"].push(tempQryArr);
              } else {
                qry["bool"]["must_not"].push(tempQryArr);
              }
            }
          } else if (field == "Comment") {
            if (span_operator == "AND") {
              qry["bool"]["must"].push(temp_qry);
            } else {
              if (k == 0) {
                qry["bool"]["should"].push(temp_qry);
              } else {
                qry["bool"]["must_not"].push(temp_qry);
              }
            }
          } else {
            if (span_operator == "AND") {
              qry["bool"]["must"].push(temp_qry);
            } else {
              if (k == 0) {
                qry["bool"]["should"].push(temp_qry);
              } else {
                qry["bool"]["must_not"].push(temp_qry);
              }
            }
          }
        } else {
          str = "(" + elastic_field + ":(" + stck[k] + "))";
          temp_qry = { query_string: { default_operator: "AND", query: str } };

          if (
            field == lang_vars_Title_Abstract ||
            field == lang_vars_Title_Abstract_Claim ||
            field == lang_vars_Full_Text
          ) {
            if (field == lang_vars_Title_Abstract) {
              elastic_field_arr = [
                "_abstract.eng.text",
                "bibliography.title.eng.value",
              ];
            } else if (field == lang_vars_Title_Abstract_Claim) {
              elastic_field_arr = [
                "claims.eng.claim",
                "_abstract.eng.text",
                "bibliography.title.eng.value",
              ];
            } else if (field == lang_vars_Full_Text) {
              elastic_field_arr = [
                "description.eng.full",
                "claims.eng.claim",
                "_abstract.eng.text",
                "bibliography.title.eng.value",
              ];
            }

            tempQryArr = {};
            tempQryArr["bool"] = {};
            tempQryArr["bool"]["must"] = [];
            tempQryArr["bool"]["must_not"] = [];
            tempQryArr["bool"]["should"] = [];
            var str = "";
            for (ii = 0; ii < elastic_field_arr.length; ii++) {
              if (str == "") {
                str = "(" + elastic_field_arr[ii] + ":(" + stck[k] + "))";
              } else {
                str =
                  "(" +
                  str +
                  " OR " +
                  "(" +
                  elastic_field_arr[ii] +
                  ":(" +
                  stck[k] +
                  ")))";
              }
            }
            temp_qry = {
              query_string: { default_operator: "AND", query: str },
            };
            if (span_operator == "AND") {
              qry["bool"]["must"].push(temp_qry);
            } else {
              if (k == 0) {
                qry["bool"]["should"].push(temp_qry);
              } else {
                qry["bool"]["must_not"].push(temp_qry);
              }
            }
          } else if (field == "Comment") {
            tempQryArr = {};
            tempQryArr["bool"] = {};
            tempQryArr["bool"]["must"] = [];
            str = "";
            for (ii = 0; ii < comments_search_fields_arr.length; ii++) {
              if (str == "") {
                str =
                  "(" + comments_search_fields_arr[ii] + ":(" + stck[k] + "))";
              } else {
                str =
                  "(" +
                  str +
                  " OR " +
                  "(" +
                  comments_search_fields_arr[ii] +
                  ":(" +
                  stck[k] +
                  ")))";
              }
            }
            temp_qry = {
              query_string: { default_operator: "AND", query: str },
            };
            if (span_operator == "AND") {
              qry["bool"]["must"].push(temp_qry);
            } else {
              if (k == 0) {
                qry["bool"]["should"].push(temp_qry);
              } else {
                qry["bool"]["must_not"].push(temp_qry);
              }
            }
          } else {
            if (span_operator == "AND") {
              qry["bool"]["must"].push(temp_qry);
            } else {
              if (k == 0) {
                qry["bool"]["should"].push(temp_qry);
              } else {
                qry["bool"]["must_not"].push(temp_qry);
              }
            }
          }
        }
      } else if (span_operator == "OR") {
        if (!("span_or" in qry)) {
          qry["span_or"] = {};
          qry["span_or"]["clauses"] = [];
        }
        if (multiChange) {
          var x = multiChangeValue;
        } else if (typeof stck[k] == "object") {
          x = stck[k];
        } else {
          x = maketermQuery(elastic_field, stck[k]);
        }
        qry["span_or"]["clauses"].push(x);
        query_type = "span_or";
      } else if (span_operator.match(/(near)[\d]+/i) != null) {
        if (!("span_near" in qry)) {
          qry["span_near"] = {};
          qry["span_near"]["clauses"] = [];
        }
        var slop = span_operator.replace(/(near)/i, "");
        slop = slop.trim();
        if (multiChange) {
          x = multiChangeValue;
        } else if (typeof stck[k] == "object") {
          x = stck[k];
        } else {
          x = maketermQuery(elastic_field, stck[k]);
        }
        qry["span_near"]["clauses"].push(x);
        qry["span_near"]["slop"] = slop;
        qry["span_near"]["in_order"] = "false";
        query_type = "span_near";
      }
    }
    if (
      (query_type == "span_near" || query_type == "span_or") &&
      elastic_field == "Comment"
    ) {
      var temp_x = JSON.stringify(qry);
      var temp_query = {};
      temp_query["bool"] = {};
      temp_query["bool"]["should"] = [];
      for (var i = 0; i < comments_search_fields_arr.length; i++) {
        var temp_y = temp_x.replace(
          /(Comment)/g,
          comments_search_fields_arr[i]
        );
        temp_query["bool"]["should"].push(JSON.parse(temp_y));
      }
      qry = temp_query;
    }
  } else {
    console.log("some issue");
  }
  var final_arr = {
    query_type: query_type,
    qry: qry,
    duplicated_query: duplicated_query,
  };
  return final_arr;
}
function checkGap_BW_brackets(temp_arr) {
  if (temp_arr.length > 0) {
    temp_arr.push(")");
    if (temp_arr.length >= 3) {
      if (
        temp_arr[temp_arr.length - 1] == ")" &&
        temp_arr[temp_arr.length - 3] == "("
      ) {
        temp_arr = temp_arr.slice(0, temp_arr.length - 1);
        temp_arr.splice(temp_arr.length - 2, 1);
      }
    } else if (temp_arr.length == 2) {
      if (
        temp_arr[temp_arr.length - 1] == ")" &&
        temp_arr[temp_arr.length - 2] == "("
      ) {
        temp_arr = [];
      }
    }
  } else {
    temp_arr = [];
    temp_arr.push(")");
  }
  return temp_arr;
}
function get_elastic_span_query(fieldquery, searchfield, fieldoperator) {
  var field;
  var local_duplicated_query = 0;
  var final_duplicated_query = 0;
  var i, j;
  var str = fieldquery;
  str = str.replace(/\(/g, " ( ");
  str = str.replace(/\)/g, " ) ");
  str = str.replace(/[\s]+/g, " ");
  str = str.trim();
  str = "( " + str + " )";
  var group_qry = [];
  group_qry = { bool: { must: [], should: [], must_not: [] } };
  var str_arr = str.split(/ /);
  var qry = "";
  var stack_arr = [];
  var main_qry = [];
  var qry_arr = [];
  var is_error = 0;
  var error_msg = "";
  var check_AND_NOT_qry_occurence = 0;
  if (
    searchfield == lang_vars_Title_Abstract ||
    searchfield == lang_vars_Title_Abstract_Claim ||
    searchfield == lang_vars_Full_Text
  ) {
    field = searchfield;
  } else if (
    searchfield.indexOf("Metadata") != -1 ||
    searchfield.indexOf("Comment") != -1
  ) {
    field = searchfield;
  } else {
    field = elastic_column_map[searchfield];
    if (
      searchfield == lang_vars_Claim ||
      searchfield == lang_vars_Title ||
      searchfield == lang_vars_Description
    ) {
      field = field.replace(/[\\*]+/, "eng");
    }
  }

  for (var i = 0; i < str_arr.length; i++) {
    if (str_arr[i] != ")") {
      stack_arr.push(str_arr[i]);
    } else {
      var tempArr = checkGap_BW_brackets(stack_arr);
      if (tempArr != stack_arr) {
        stack_arr = tempArr;
      } else {
        qry_arr = [];
        for (j = stack_arr.length - 1; j >= 0; j--) {
          qry_arr.unshift(stack_arr[j]);
          if (stack_arr[j] == "(") {
            break;
          }
        }
        var stcklen = stack_arr.length;

        stack_arr.splice(j, stcklen);
        var qry_return = makeQuery(qry_arr, field, check_AND_NOT_qry_occurence);
        if (qry_return["query_type"] == "no_operator") {
          //issue
          console.log("SOME ISSUE");
        } else {
          stack_arr.push(qry_return["qry"]);
        }
        if ("duplicated_query" in qry_return && "query_type" in qry_return) {
          if (
            check_AND_NOT_qry_occurence &&
            !qry_return["duplicated_query"] &&
            (qry_return["query_type"] == "span_near" ||
              qry_return["query_type"] == "span_or")
          ) {
          } else {
            var duplicated_query = qry_return["duplicated_query"];
            if (!check_AND_NOT_qry_occurence && duplicated_query) {
              check_AND_NOT_qry_occurence = duplicated_query;
            }
          }
        }
      }
    }
  }
  main_qry = stack_arr[0];

  if (
    searchfield == lang_vars_Title_Abstract ||
    searchfield == lang_vars_Title_Abstract_Claim ||
    searchfield == lang_vars_Full_Text
  ) {
    if (fieldquery.indexOf("AND") != -1 || fieldquery.indexOf("NOT") != -1) {
      //duplication already done
    } else {
      var elastic_field_arr = [];
      if (searchfield == lang_vars_Title_Abstract) {
        elastic_field_arr = [
          elastic_column_map[lang_vars_Abstract],
          elastic_column_map[lang_vars_Title],
        ];
      } else if (searchfield == lang_vars_Title_Abstract_Claim) {
        elastic_field_arr = [
          elastic_column_map[lang_vars_Claim],
          elastic_column_map[lang_vars_Abstract],
          elastic_column_map[lang_vars_Title],
        ];
      } else if (searchfield == lang_vars_Full_Text) {
        elastic_field_arr = [
          elastic_column_map[lang_vars_Description],
          elastic_column_map[lang_vars_Claim],
          elastic_column_map[lang_vars_Title],
          elastic_column_map[lang_vars_Abstract],
        ];
      }
      var tempQryArr = {};
      tempQryArr["bool"] = {};
      tempQryArr["bool"]["should"] = [];
      var temp_qry = {};
      temp_qry = main_qry;
      for (var ii = 0; ii < elastic_field_arr.length; ii++) {
        var tempVal = JSON.stringify(temp_qry);
        elastic_field_arr[ii] = elastic_field_arr[ii].replace(/[\\*]+/, "eng");
        var tempVal1 = tempVal.replace(
          /(bibliography.title.eng.value)/g,
          elastic_field_arr[ii]
        );
        var temp_qry1 = JSON.parse(tempVal1);
        tempQryArr["bool"]["should"].push(temp_qry1);
      }
      main_qry = tempQryArr;
    }
  }
  var returnVal = {
    is_error: is_error,
    error_msg: error_msg,
    main_qry: main_qry,
  };
  return returnVal;
}
function make_default_near(query) {
  // query = query.replace(/[\s]+/g,' ');
  query = query.replace(/\(/g, " ( ");
  query = query.replace(/\)/g, " ) ");
  query = query.replace(/\"/g, ' " ');
  // query = query.replace(/[\s]+/g,' ');

  var defualt_near_arr = query.split(" ");
  var numbers = /^[0-9]+$/;
  var or_exp = /or/gim;
  var and_exp = /and/gim;
  var exact_match = 0;
  for (var di = 0; di < defualt_near_arr.length - 1; di++) {
    if (defualt_near_arr[di].indexOf('"') >= 0) {
      exact_match =
        exact_match == 1
          ? (exact_match = exact_match - 1)
          : (exact_match = exact_match + 1);
    }
    var prev_element = null;
    var next_element = null;
    next_element = defualt_near_arr[di + 1];

    if (di > 0) {
      prev_element = defualt_near_arr[di - 1];
    }

    if (
      ((defualt_near_arr[di] == "NEAR" || defualt_near_arr[di] == "near") &&
        (di == 0 ||
          di == defualt_near_arr.length - 1 ||
          prev_element == "(" ||
          next_element == ")")) ||
      exact_match != 0
    ) {
      continue;
    }
    if (
      (defualt_near_arr[di] == "NEAR" || defualt_near_arr[di] == "near") &&
      defualt_near_arr[di + 1].match(numbers) == null
    ) {
      defualt_near_arr[di] = "near5";
    }
  }
  query = defualt_near_arr.join(" ");
  query = query.replace(/\ \(\ /g, "(");
  query = query.replace(/\ \)\ /g, ")");
  query = query.replace(/\ \"\ /g, '"');
  return query;
}
function checkBalancedParanthesis(string) {
  var parentheses = "[]{}()";
  var stack = [];
  var i, character, bracePosition;

  for (i = 0; (character = string[i]); i++) {
    bracePosition = parentheses.indexOf(character);

    if (bracePosition === -1) {
      continue;
    }

    if (bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); // push next expected brace position
    } else {
      if (stack.length === 0 || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
var elastic_column_map = [];
elastic_column_map[lang_vars_ALL_keyword] = "_all";
elastic_column_map[lang_vars_Full_Text] = "_all";
/*elastic_column_map[lang_vars_Abstract] = '_abstract.\\*';
elastic_column_map[lang_vars_Claim] = 'claims.\\*.claim';
elastic_column_map[lang_vars_Title] = 'bibliography.title.\\*';*/
elastic_column_map[lang_vars_Abstract] = "_abstract.eng.text";
elastic_column_map[lang_vars_Claim] = "claims.\\*.claim";
elastic_column_map[lang_vars_Title] = "bibliography.title.\\*.value";
elastic_column_map[lang_vars_Description] = "description.\\*.full";
// elastic_column_map[lang_vars_Title_Abstract_Claim] = '_all';
// elastic_column_map[lang_vars_Title_Abstract] = '_all';
elastic_column_map[lang_vars_Classification_CPC] =
  "bibliography.ClassificationCpc.narrow";
elastic_column_map[lang_vars_Classification_IPC] =
  "bibliography.ClassificationIpcr.narrow";
elastic_column_map[lang_vars_Classification_ECLA] =
  "bibliography.ClassificationEcla.\\*.narrow";
// elastic_column_map[lang_vars_Classification_CPC_or_IPC] = '_all';
elastic_column_map[lang_vars_Classification_US_Main_Further] =
  "bibliography.classificationNational.narrow";

elastic_column_map["Publication Country"] =
  "bibliography.publicationReference.country";

elastic_column_map[lang_vars_Publication_Number] =
  "bibliography.publicationReference.full";
elastic_column_map[lang_vars_Application_Number] =
  "bibliography.applicationReference.full";
elastic_column_map[lang_vars_Priority_Number] =
  "bibliography.priority.priorities.full";
elastic_column_map[lang_vars_Earliest_Priority_Number] =
  "bibliography.priority.earliestnumber";
elastic_column_map[lang_vars_Assignee] = "bibliography.assignees.orgname";
elastic_column_map[lang_vars_Assignee_Standardized] = "Assignees_standard";
elastic_column_map[lang_vars_Inventor] = "bibliography.inventors.name";

elastic_column_map[lang_vars_Publication_Date] =
  "bibliography.publicationReference.date";
elastic_column_map[lang_vars_Application_Date] =
  "bibliography.applicationReference.date";
elastic_column_map[lang_vars_Priority_Date] =
  "bibliography.priority.priorities.date";
elastic_column_map[lang_vars_Earliest_Priority_Date] =
  "bibliography.priority.earliestdate";
elastic_column_map[lang_vars_creation_date] = "Dates.creation";
elastic_column_map[lang_vars_Publication_Country] =
  "bibliography.publicationReference.country";
