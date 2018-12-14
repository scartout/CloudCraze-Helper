var actualCode = `

	if(typeof CCRZ !== 'undefined'){

		var queryParams = Object.keys(CCRZ.pagevars.queryParams).filter((e)=>CCRZ.pagevars.queryParams[e] != ""),
			queryParamsHTML = "",
			queryParamsHTMLRows = "";

		function closeModal(){
			$(".cch_modal_widget").remove();
		}

		$(document).keyup((e)=> {
            if (e.keyCode === 27) closeModal();
        });

		function ifNone(text){
			return (!text) ? "-" : text;
		}

		closeModal();

		queryParams.forEach((e)=>{
            queryParamsHTMLRows += "<div class='col-xs-12'><div class='row'><div class='col-xs-4 cch_column'><strong>"+e+"&nbsp;</strong></div><div class='col-xs-8 cch_column'>"+CCRZ.pagevars.queryParams[e]+"</div></div></div>";
		})

		if (queryParamsHTMLRows != ""){
			queryParamsHTML = "<div class='col-xs-12 cch_newline cch_column'><br/><strong>Query params:</strong></div>"+queryParamsHTMLRows+"</div>";
		}

		var modal = $( "<div id='cch_pageinfo_modal_widget' class='col-xs-12 cch_modal_widget'><div class='row'><div class='col-xs-12 cch_modal_widget_close_row'><a onclick='closeModal()' class='pull-right cch_modal_widget_close'>CLOSE&nbsp;&times;</a></div></div><div class='col-xs-12 cch_pageinfo_row'><div class='col-xs-12'><div class='row'><div class='col-xs-4 cch_column'><strong>Current page name&nbsp;</strong></div><div class='col-xs-8 cch_column'>"+ifNone(CCRZ.pagevars.currentPageName)+"</div></div></div><div class='col-xs-12'><div class='row'><div class='col-xs-4 cch_column'><strong>User locale&nbsp;</strong></div><div class='col-xs-8 cch_column'>"+ifNone(CCRZ.pagevars.userLocale)+"</div></div></div><div class='col-xs-12'><div class='row'><div class='col-xs-4 cch_column'><strong>Currency&nbsp;</strong></div><div class='col-xs-8 cch_column'>"+ifNone(CCRZ.pagevars.currencyData.currencyName)+"</div></div></div><div class='col-xs-12'><div class='row'><div class='col-xs-4 cch_column'><strong>Store name&nbsp;</strong></div><div class='col-xs-8 cch_column'>"+ifNone(CCRZ.pagevars.storeName)+"</div></div></div><div class='col-xs-12'><div class='row'><div class='col-xs-4 cch_column'><strong>Site URL&nbsp;</strong></div><div class='col-xs-8 cch_column'><a href='"+CCRZ.pagevars.currSiteURL+"'>"+ifNone(CCRZ.pagevars.currSiteURL)+"</a></div></div></div><div class='col-xs-12'><div class='row'><div class='col-xs-4 cch_column'><strong>Current URL&nbsp;</strong></div><div class='col-xs-8 cch_column'><a href='"+CCRZ.pagevars.currentPageURL+"'>"+ifNone(CCRZ.pagevars.currentPageURL)+"</a></div></div></div><div class='col-xs-12'><div class='row'><div class='col-xs-4 cch_column'><strong>Is guest&nbsp;</strong></div><div class='col-xs-8 cch_column'>"+CCRZ.pagevars.isGuest+"</div></div></div><div class='col-xs-12'><div class='row'><div class='col-xs-4 cch_column'><strong>Cart ID&nbsp;</strong></div><div class='col-xs-8 cch_column'>"+ifNone(CCRZ.pagevars.currentCartID)+"</div></div></div><div class='col-xs-12'><div class='row'><div class='col-xs-4 cch_column'><strong>Effective account ID&nbsp;</strong></div><div class='col-xs-8 cch_column'>"+ifNone(CCRZ.pagevars.effAccountId)+"</div></div></div>"+queryParamsHTML+"</div>");

		$("body").append(modal);

	}

`;


var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();