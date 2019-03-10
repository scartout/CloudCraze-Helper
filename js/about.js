var actualCode = `

	if(typeof CCRZ !== 'undefined'){

		function closeModal(){
			$(".cch_modal_widget").remove();
		}

		$(document).keyup((e)=> {
			if (e.keyCode === 27) closeModal();
		});

		closeModal();

		var modal = $( "<div id='cch_about_modal_widget' class='col-xs-12 cch_modal_widget'><div class='row'><div class='col-xs-12 cch_modal_widget_close_row'><a onclick='closeModal()' class='pull-right cch_modal_widget_close'>CLOSE&nbsp;&times;</a></div></div><div class='col-xs-12 cch_about_row'><h4>Version history:</h4><p>1.0.0</p><ul><li>Show/hide views</li></ul><p>1.0.1</p><ul><li>Bugs fixed</li></ul><p>1.0.2</p><ul><li>Showing events names in tooltip on hover</li><li>Page labels and CC configuration search</li></ul><p>1.0.3</p><ul><li>Ability to close modal by press Esc</li></ul><p>1.0.4</p><ul><li>Ability to hide views display by press Esc</li></ul><p>1.0.5</p><ul><li>Sorting bugs fixed</li></ul><p>1.0.6</p><ul><li>Informations about current page</li></ul><p>1.0.7</p><ul><li>Code refactored, bugs fixed</li></ul><p>1.0.8</p><ul><li>Salesforce backend bug fixed</li></ul><p>1.0.9</p><ul><li>Non-clickable input when CC modal is open bug fixed</li></ul><p>1.0.10</p><ul><li>CloudCraze 4.9 support</li></ul></br><p>CloudCraze Helper 1.0.10</p><p>Developed by Pawel Dudek © 2019</p></div></div>");

		$("body").append(modal);

	}

`;


var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();