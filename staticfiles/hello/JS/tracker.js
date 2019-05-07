function get_tracker_info(id ,trkJobname,trkfoldername) {
//    console.log("get job tracker called!") // sanity check
//    console.log(trkJobname +  trkfoldername)
    $('.saveButton').attr('disabled', true);
    var idstr= id.replace('#','')
    var fromid='#form-'+idstr
    var btnid='#button-'+idstr
//    console.log(fromid)
//    console.log(btnid)
//console.log(id )
    $.ajax({
        url : "trackerinfo", // the endpoint
        type : "POST", // http method
        data : { JobName : trkJobname ,FolderName :trkfoldername, FormID : id,
        csrfmiddlewaretoken: $( "input[name*='csrfmiddlewaretoken']" ).val()
        }, // data sent with the post request

        // handle a successful response
        success : function(json) {
            //$('#post-text').val(''); // remove the value from the input
            //console.log(json); // log the returned json to the console
            $(id).html(json);
            // console.log("success"); // another sanity check
            $('body').addClass('loaded');


              $(".myForm")
    .on("input", function() {
        // do whatever you need to do when something's changed.
        // perhaps set up an onExit function on the window
//        console.log("from successeded")
        $(".saveButton").attr('disabled', false);
  });

           },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            $('#Depend-Submit-form-result').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        $('body').addClass('loaded');
        }
    });
  /*  .done(function(response) {
            $('#JobResult').html(response);
                    });*/


};



function update_tracker_info( id, trkJobname,trkfoldername) {
//    console.log("get job tracker called!") // sanity check

    var eid='#' + id
    var dataset=document.getElementById(id)
    var inputtags=dataset.getElementsByTagName("input")
    var Requestdata = {     JOBNAME : dataset.getElementsByClassName("JOBNAME").JOBNAME.value,
                            PARENT_FOLDER : dataset.getElementsByClassName("PARENT_FOLDER").PARENT_FOLDER.value,
                            DEVOPS_OWNER : dataset.getElementsByClassName("DEVOPS_OWNER").DEVOPS_OWNER.value,
                            TEAM_NAME : dataset.getElementsByClassName("TEAM_NAME").TEAM_NAME.value,
                            TEAM_DL : dataset.getElementsByClassName("TEAM_DL").TEAM_DL.value,
                            DB_NAME : dataset.getElementsByClassName("DB_NAME").DB_NAME.value,
                            TABLE_NAME : dataset.getElementsByClassName("TABLE_NAME").TABLE_NAME.value,
                            DEV_MANAGER : dataset.getElementsByClassName("DEV_MANAGER").DEV_MANAGER.value,
                            BUSINESS_TEAM : dataset.getElementsByClassName("BUSINESS_TEAM").BUSINESS_TEAM.value,
                            BUSINESS_TEAM_DL : dataset.getElementsByClassName("BUSINESS_TEAM_DL").BUSINESS_TEAM_DL.value,
                            ENCRCOL_ENCRTYPE : dataset.getElementsByClassName("ENCRCOL_ENCRTYPE").ENCRCOL_ENCRTYPE.value,
                            REFERENCE_TABLES : dataset.getElementsByClassName("REFERENCE_TABLES").REFERENCE_TABLES.value,
                            TAGS : dataset.getElementsByClassName("TAGS").TAGS.value,
                            csrfmiddlewaretoken: $( "input[name*='csrfmiddlewaretoken']" ).val()
        } ;
//console.log(id )
    $.ajax({
        url : "trackerupd", // the endpoint
        type : "POST", // http method
        data :  Requestdata , // data sent with the post request

        // handle a successful response
        success : function(json) {
            //$('#post-text').val(''); // remove the value from the input
//            console.log(json); // log the returned json to the console
            $(eid).html(json);
            // console.log("success"); // another sanity check
            $('body').addClass('loaded');
           },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            $('#Depend-Submit-form-result').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        $('body').addClass('loaded');
        }
    });
  /*  .done(function(response) {
            $('#JobResult').html(response);
                    });*/
};





function get_merge_tracker_info(id ,trkJobname,trkfoldername) {
//    console.log("merge job tracker called!") // sanity check
//    console.log(trkJobname +  trkfoldername)
    $('.saveButton').attr('disabled', true);
    var idstr= id.replace('#','')
    var fromid='#form-'+idstr
    var btnid='#button-'+idstr
//    console.log(fromid)
//    console.log(btnid)
//console.log(id )
    $.ajax({
        url : "/traverse/mergetrackerform", // the endpoint
        type : "POST", // http method
        data : { JobName : trkJobname ,FolderName :trkfoldername, FormID : id,
        csrfmiddlewaretoken: $( "input[name*='csrfmiddlewaretoken']" ).val()
        }, // data sent with the post request

        // handle a successful response
        success : function(json) {
            //$('#post-text').val(''); // remove the value from the input
//            console.log(json); // log the returned json to the console
            $(id).html(json);
            // console.log("success"); // another sanity check
            $('body').addClass('loaded');


              $(".myForm")
    .on("input", function() {
        // do whatever you need to do when something's changed.
        // perhaps set up an onExit function on the window
//        console.log("from successeded")
        $(".saveButton").attr('disabled', false);
  });

           },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            $('#Depend-Submit-form-result').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        $('body').addClass('loaded');
        }
    });
  /*  .done(function(response) {
            $('#JobResult').html(response);
                    });*/


};


function update_merge_tracker_info( mgtype, id, trkJobname,trkfoldername) {
//    console.log("get job tracker called!") // sanity check

    var eid='#' + id
    var dataset=document.getElementById(id)
    var inputtags=dataset.getElementsByTagName("input")
    var Requestdata = {     JOBNAME : dataset.getElementsByClassName("JOBNAME").JOBNAME.value,
                            PARENT_FOLDER : dataset.getElementsByClassName("PARENT_FOLDER").PARENT_FOLDER.value,
                            DEVOPS_OWNER : dataset.getElementsByClassName("DEVOPS_OWNER").DEVOPS_OWNER.value,
                            TEAM_NAME : dataset.getElementsByClassName("TEAM_NAME").TEAM_NAME.value,
                            TEAM_DL : dataset.getElementsByClassName("TEAM_DL").TEAM_DL.value,
                            DB_NAME : dataset.getElementsByClassName("DB_NAME").DB_NAME.value,
                            TABLE_NAME : dataset.getElementsByClassName("TABLE_NAME").TABLE_NAME.value,
                            DEV_MANAGER : dataset.getElementsByClassName("DEV_MANAGER").DEV_MANAGER.value,
                            BUSINESS_TEAM : dataset.getElementsByClassName("BUSINESS_TEAM").BUSINESS_TEAM.value,
                            BUSINESS_TEAM_DL : dataset.getElementsByClassName("BUSINESS_TEAM_DL").BUSINESS_TEAM_DL.value,
                            ENCRCOL_ENCRTYPE : dataset.getElementsByClassName("ENCRCOL_ENCRTYPE").ENCRCOL_ENCRTYPE.value,
                            REFERENCE_TABLES : dataset.getElementsByClassName("REFERENCE_TABLES").REFERENCE_TABLES.value,
                            TAGS : dataset.getElementsByClassName("TAGS").TAGS.value,
                            MERGE_TYPE : mgtype,
                            csrfmiddlewaretoken: $( "input[name*='csrfmiddlewaretoken']" ).val()
        } ;
//console.log(id )
    $.ajax({
        url : "mergetrkrupdate", // the endpoint
        type : "POST", // http method
        data :  Requestdata , // data sent with the post request

        // handle a successful response
        success : function(json) {
            //$('#post-text').val(''); // remove the value from the input
//            console.log(json); // log the returned json to the console
            $(eid).html(json);
            // console.log("success"); // another sanity check
            $('body').addClass('loaded');
           },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            $('#Depend-Submit-form-result').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        $('body').addClass('loaded');
        }
    });
  /*  .done(function(response) {
            $('#JobResult').html(response);
                    });*/
};
