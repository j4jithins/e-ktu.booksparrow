//this code initiates the external panel
$(function () {
    $("body>[data-role='panel']").panel();
});
//panel initialise end



//this code initiates the swipe functionality of external panel
$(document).on("pagecreate", function () {
    $(document).on("swipeleft swiperight", function (e) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ($(".ui-page-active").jqmData("panel") !== "open") {
            if (e.type === "swiperight") {
                $("#left-panel").panel("open");
            }
        }
    });
});
//swipe code ends


//This code loads the external fixed header
$(function () {
    $("[data-role='header'], [data-role='footer']").toolbar();
});
//header code ends


//page loading dynamically
//variables required for catching which page to load
var toLoadBranch;
var toLoadSemester;
var toLoadPage;

//function to identify the page to be loaded
function pageCatcher(branch, semester) {

    //the if code gets eecuted only after the else block as branch is called first and will be nonzero
    //the else block extracts the banch value and assign to toLoadBranch
    //On clicking semester, if code executes and assign the semester data to toLoadSemester variable
    //The variables are concantenated to obtain the page to be opened
    if (branch == 0) {
        toLoadSemester = semester;
        toLoadPage = toLoadSemester + toLoadBranch;
        toLoadPage = "#" + toLoadPage;
        //toLoadPage += ".html"
        //toLoadPage = "syllabus/" + toLoadPage
        alert(toLoadPage);
        //window.open(toLoadPage, "_self");
        $.mobile.navigate(toLoadPage);
    } else {
        toLoadBranch = branch;
        alert(toLoadBranch);
    }
}
//end of pageCatcher code


