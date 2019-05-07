function exportTableToCSV(filename) {
    var csv = [];
    var Tbodys = document.querySelectorAll("tbody");
    var Thead = document.querySelectorAll("thead");
//    console.log(Thead)
    var tableNames = document.getElementsByTagName("table") ;
    var throws = Thead[0].querySelectorAll("th,td");
    var trow=[]
    trow.push("\"Sno\"")
    trow.push("\"MainJob\"")
     for (var j = 0; j < throws.length; j++) {
            trow.push("\""+ throws[j].innerText +"\"");
     }
       //console.log(trow)
       csv.push(trow.join(","));

    for (var k = 0; k < Tbodys.length; k++) {
        var rows = Tbodys[k].querySelectorAll("tr");

    	 var TNameArr = tableNames[k].getAttribute("id").split("--");
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th")
       row.push("\""+ TNameArr[1] + "\"" )
       row.push("\""+ TNameArr[2] + "\"")
        for (var j = 0; j < cols.length; j++) {
            row.push("\""+ cols[j].innerText + "\"");
        }
        csv.push(row.join(","));
    }
}
    downloadCSV(csv.join("\n"), filename);
}

function exportTableToCSV2(filename) {
    var csv = [];
    var Tbodys = document.querySelectorAll("tbody");
    var Thead = document.querySelectorAll("thead");
//    console.log(Thead)
    var tableNames = document.getElementsByTagName("table") ;
    var throws = Thead[0].querySelectorAll("th,td");
    var trow=[]
    for (var j = 0; j < throws.length; j++) {
            //trow.push(throws[j].innerText);
            trow.push("\""+ throws[j].innerText +"\"");
     }
        csv.push(trow.join(","));
     //console.log(throws)
    for (var k = 0; k < Tbodys.length; k++) {
        var rows = Tbodys[k].querySelectorAll("tr");

    	 var TNameArr = tableNames[k].getAttribute("id").split("--");
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th")
        for (var j = 0; j < cols.length; j++) {
            //row.push(cols[j].innerText);
            row.push("\""+ cols[j].innerText + "\"");
        }
        csv.push(row.join(","));
    }
}
    downloadCSV(csv.join("\n"), filename);
}

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;
    csvFile = new Blob([csv], {type: "text/csv"});
    // Download link
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function CopyHtmlTables(id1,id2) {

 var tpred=document.querySelector('#' +id1)
 var tsucc=document.querySelector('#' +id2)
 var tpred_bkp=document.querySelector('#' +id1)
 var tboday_pred=document.querySelector('#' +id1+' tbody')
 var tboday_prd=document.querySelector('#' +id1+' tbody')
 var tboday_succ=document.querySelector('#' +id2+' tbody')
 para = tboday_pred.innerHTML

tboday_pred.innerHTML+=tboday_succ.innerHTML
el=document.getElementById (id1)

	var body = document.body, range, sel;
	if (document.createRange && window.getSelection) {
		range = document.createRange();
		sel = window.getSelection();
		sel.removeAllRanges();
		try {
			range.selectNodeContents(el);
			sel.addRange(range);
		} catch (e) {
			range.selectNodeContents(el);
			sel.addRange(range);
		}
	} else if (body.createTextRange) {
		range = body.createTextRange();
		range.moveToElementText(el);
		range.select();
	}
		document.execCommand("copy");
		tboday_pred.innerHTML=para

 }



function FilterResulttable() {
  var input, filter, table, tr, td,td2, i,j;
  input = document.getElementById("myInputfilter");
  filter = input.value.toUpperCase();
  table = document.getElementById("tblresult");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
     td2 = tr[i].getElementsByTagName("td");
    for (j = 0; j < td2.length; j++) {
       td = tr[i].getElementsByTagName("td")[j];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        { break; }

      } else {
        tr[i].style.display = "none";
      }
    }

   }
  }
  }



function selectallcheckbox(source , grpname) {
  checkboxes = document.getElementsByClassName(grpname);
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked =  source.checked;
}
}

function selectall(source) {
  checkboxes = document.getElementsByClassName('allgroupcheck');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked =  true;
  }
}

function clearall(source) {
  checkboxes = document.getElementsByClassName('allgroupcheck');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked =  false;
  }
}

function joball(source) {
  checkboxes = document.getElementsByClassName('jobgroupcheck');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked =  true;
  }
}

function alertall(source) {
  checkboxes = document.getElementsByClassName('alertgroupcheck');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked =  true;
  }
}

function dependall(source) {
  checkboxes = document.getElementsByClassName('condgroupcheck');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked =  true;
  }
}


function Validatecheckbox(source) {
var true_chk=0
var error_chk=false
  checkboxes = document.getElementsByClassName('allgroupcheck');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    if ( checkboxes[i].checked ==  true )
    {
      true_chk+=1
    }
    else {
    true_chk+=0
    }
  }

  if ( true_chk ==0 )
  {
  alert("Error - No columns selected \nSelecting default columns ")
  joball()
  }

}


function getcheckedbox(source) {
var chk_cols=[]
  checkboxes = document.getElementsByClassName('allgroupcheck');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    if ( checkboxes[i].checked ==  true )
    {
      chk_cols.push(checkboxes[i].value )
    }
    }

return chk_cols.join(",")

}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function scrollWin(x, y) {
    window.scrollBy(x, y);
}


 $('.collapse').on('show.bs.collapse', function () {
$(this).siblings('.card-header').addClass('active');
  });

  $('.collapse').on('hide.bs.collapse', function () {
  $(this).siblings('.card-header').removeClass('active');
  });


 $('.collapse').on('shown.bs.collapse', function () {
$(this).siblings('.card-header').addClass('active');
  });

  $('.collapse').on('hidden.bs.collapse', function () {
  $(this).siblings('.card-header').removeClass('active');
  });



function logoTMO() {
        document.getElementById('brndlogo').src  = '/static/hello/images/TMO-Logo-White2.png';
    }

function logohello() {
       document.getElementById('brndlogo').src = '/static/hello/images/traverse-black.png';
        }

