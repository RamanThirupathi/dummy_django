$(function() {
$('#Depend-Submit-form').on('submit', function(event){
    event.preventDefault();
   // console.log("dependancy form submitted!")  // sanity check
    $('body').removeClass('loaded');
    $('#Depend-Submit-form-header').show();
    $('#Depend-Submit-form-header2').show();

    create_dependancy_post();
});

// AJAX for posting
function create_dependancy_post() {
    //console.log("dependency create post is working!") // sanity check
    //console.log($('#id_jobname').val())

    $.ajax({
        url : "hresults/", // the endpoint
        type : "POST", // http method
        data : { jobname : $('#id_jobname').val() ,
        csrfmiddlewaretoken: $( "input[name*='csrfmiddlewaretoken']" ).val()
        }, // data sent with the post request

        // handle a successful response
        success : function(json) {
            //$('#post-text').val(''); // remove the value from the input
            //console.log(json); // log the returned json to the console
            $('#Depend-Submit-form-result').html(json);
            $( "#Scroll-link" ).trigger( "click" );
           // console.log("success"); // another sanity check
            $('body').addClass('loaded');
             $('.collapse').on('show.bs.collapse', function () {
                 $(this).siblings('.card-header').addClass('active');
                  });

              $('.collapse').on('hide.bs.collapse', function () {
              $(this).siblings('.card-header').removeClass('active');
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




$('#Jobinfo-Submit-form').on('submit', function(event){
    event.preventDefault();
    //console.log("jobinfo  form submitted!")  // sanity check
    $('body').removeClass('loaded');
    $('#Depend-Submit-form-header').show();
    $('#Depend-Submit-form-header2').show();
   // console.log($('#id_DatacenterName-span').text())  // sanity check

    create_getjobinfo_post();
});

// AJAX for posting
function create_getjobinfo_post() {
//    console.log("jobinfo create post is working!") // sanity check
//    console.log($('#Select_Column_field1').val())
    List_of_Columns_var=getcheckedbox()
    $.ajax({
        url : "jresults/", // the endpoint
        type : "POST", // http method
        data : { FolderName : $('#id_FolderName').val(),
        JobName : $('#id_JobName').val(),
        FolderName : $('#id_FolderName').val(),
        HostName : $('#id_HostName').val(),
        DatacenterName : $('#id_DatacenterName-span').text(),
        Select_Column_field1 : $('#id_Select_Column_field1').val(),
        Select_Column_Value1 : $('#id_Select_Column_Value1').val(),
        Select_Column_field2 : $('#id_Select_Column_field2').val(),
        Select_Column_Value2 : $('#id_Select_Column_Value2').val(),
        List_of_Columns : List_of_Columns_var,
        csrfmiddlewaretoken: $( "input[name*='csrfmiddlewaretoken']" ).val()
            }, // data sent with the post request

        // handle a successful response
        success : function(json) {
            //$('#post-text').val(''); // remove the value from the input
            //console.log(json); // log the returned json to the console
            $('#Jobinfo-Submit-form-result').html(json);
            //$( "#Scroll-link" ).trigger( "click" );
            scrollWin(0, 400)
            //console.log("success"); // another sanity check
            $('body').addClass('loaded');


 $('#tblresult').DataTable( {
         paging: true,
         //scrollY: 350,
        paging:  true,
         "scrollX": true,
         colReorder: true,
	  fixedHeader: {
           header: true
			},
 			 lengthMenu: [
            [ 10, 25, 50, -1 ],
            [ '10 rows', '25 rows', '50 rows', 'Show all' ]
        ],
        dom: 'Bfrtip',
        buttons: [ 'pageLength','csv', 'excel' //,'colvis'
        ]
    } );
    },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            $('#Jobinfo-Submit-form-result').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        $('body').addClass('loaded');
        }
    });
  /*  .done(function(response) {
            $('#JobResult').html(response);
                    });*/
};





$('#Status-Submit-form').on('submit', function(event){
    event.preventDefault();
    //console.log("status  form submitted!")  // sanity check
    $('body').removeClass('loaded');
    $('#Status-Submit-form-result').show();

$(document).ready(function (){
    var table = $('#tblresult').DataTable({
          "destroy": true,
         "ajax": {
                    url : "sresults/", // the endpoint
                    type : "POST", // http method
                    data : { FolderName : $('#id_FolderName').val(),
                    JobName : $('#id_JobName').val(),
                    DatacenterName : $('#id_DatacenterName-span').text(),
                    status : $('#id_status-span').text(),
                    HostName : $('#id_HostName').val(),
                    CTM_token : $('#id_CTM_token').text(),
                    csrfmiddlewaretoken: $( "input[name*='csrfmiddlewaretoken']" ).val()
                        }
                   },
        'dom': 'RBfrtip',
        "aoColumns": [
               null,
               null,
            {  "sClass": "textwrap" },
            {  "sClass": "textwrap" },
            {  "sClass": "textwrap" },
            {  "sClass": "textwrap" },
            {  "sClass": "textwrap" },
            {  "sClass": "textwrap" },
            {  "sClass": "textwrap" }
            ],
          "scrollX": true,
         buttons: [ 'pageLength','csv', 'excel' //,'colvis'
        ],
          processing: true,
    'language':{
       "loadingRecords": "&nbsp;",
       "processing": "Loading..."

    }
    });
    });

    $('body').addClass('loaded');
});


$('#Download-folder-Submit-form').on('submit', function(event){
    event.preventDefault();
    //console.log("jobinfo  form submitted!")  // sanity check
    $('body').removeClass('loaded');
    download_jobinfo_post('Folder');


});

$('#Download-job-Submit-form').on('submit', function(event){
    event.preventDefault();
    $('body').removeClass('loaded');
    download_jobinfo_post('Job');
});

// AJAX for posting
function download_jobinfo_post(objtype_v) {
//    console.log("jobinfo create post is working!") // sanity check
    var id_result="#Download-"+objtype_v+"-Submit-form-result"
    $.ajax({
        url : "downresults/", // the endpoint
        type : "POST", // http method
        data : {
        JobName : $('#id_JobName_J').val(),
        FolderName : $('#id_FolderName_F').val(),
        ObjType : objtype_v,
        csrfmiddlewaretoken: $( "input[name*='csrfmiddlewaretoken']" ).val()
            }, // data sent with the post request

        // handle a successful response
        success : function(json) {
            $(id_result).html(json);
            $( "#Scroll-link" ).trigger( "click" );
            //console.log("success"); // another sanity check
            $('body').addClass('loaded');
            },

        error : function(xhr,errmsg,err) {
            $('#Jobinfo-Submit-form-result').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        $('body').addClass('loaded');
        }
    });
};


});

$(function() {
$('#id_DatacenterName').multipleSelect({
 placeholder: "Datacenter Name",
 Spanid: "id_DatacenterName-span"
});
});

