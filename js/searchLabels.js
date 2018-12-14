var actualCode = `

	if(typeof CCRZ !== 'undefined'){

	    var pagevarspagelabels = CCRZ.pagevars.pageLabels,
            configsTable = Object.keys(pagevarspagelabels),
            modal = $("<div id='cch_search_labels_modal_widget' class='col-xs-12 cch_modal_widget'><div class='row'><div class='col-xs-12 cch_modal_widget_close_row'><a onclick='closeModal()' class='pull-right cch_modal_widget_close'>CLOSE&nbsp;&times;</a></div><div class='col-xs-12 cch_input_row'><input id='cch_search_modal_input' autofocus onkeyup='search()' placeholder='Search...'/></div><div class='col-xs-12'><div class='col-xs-6 cch_column_header' data-id='pagelabelname' onclick='sortBy()'>Name</div><div class='col-xs-6 cch_column_header' data-id='label' onclick='sortBy()'>Value</div></div></div>");

		function closeModal(){
			$(".cch_modal_widget").remove();
			sessionStorage.setItem('cch_searchLabels', null);
		}

		function modalsFocusOff(){
            $(document).off('focusin.modal');
        }

        $('.modal').parent().on('shown.bs.modal', () => {
            modalsFocusOff();
        })

		function search(){
			let value = event.target.value.toLowerCase(),
			    rows = $(".cch_row");
			rows.filter(function(){
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
		};

		$(document).keyup((e)=> {
			if (e.keyCode === 27) closeModal();
		});

		function makeTable(labels){
			let table = "";
			labels.forEach((label)=>{
				if (pagevarspagelabels[label]){
					table+="<div class='cch_row row'><div class='col-xs-6 cch_column'>"+label+"</div><div class='col-xs-6 cch_column'>"+pagevarspagelabels[label]+"</div></div>";
				}
			})
			return table;
		}

		function sortBy(){

			const option = $(event.currentTarget).data('id'),
				optionFromStorage = sessionStorage.getItem('cch_searchLabels');

			let divParent = document.querySelector('#cch_search_modal_table'),
				para = document.querySelectorAll('#cch_search_modal_table .cch_row');
				paraArr = [];

            if (option == "pagelabelname"){
			    paraArr = [].slice.call(para).sort((a, b)=> $(a).find('.cch_column:first-child').text().toLowerCase() > $(b).find('.cch_column:first-child').text().toLowerCase() ? 1 : -1)
			}
			else if (option == "label"){
			    paraArr = [].slice.call(para).sort((a, b)=> $(a).find('.cch_column:last-child').text().toLowerCase() > $(b).find('.cch_column:last-child').text().toLowerCase() ? 1 : -1)
			}

			if(option == optionFromStorage){
				paraArr.reverse();
				$('.cch_arrow').remove();
                $(event.currentTarget).append("<span class='cch_arrow'>&nbsp;&#9660;</span>");
				sessionStorage.setItem('cch_searchLabels', null);
			}
			else{
				$('.cch_arrow').remove();
				$(event.currentTarget).append("<span class='cch_arrow'>&nbsp;&#9650;</span>");
				sessionStorage.setItem('cch_searchLabels', option);
			}

			paraArr.forEach((divChild) => divParent.appendChild(divChild));

		}

		closeModal();
		modalsFocusOff();

		var modalPart = "</input><div class='col-xs-12' id='cch_search_modal_table'>"+makeTable(configsTable)+"</div>";

		modal.append(modalPart);

		$("body").append(modal);

	}

`;


var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();