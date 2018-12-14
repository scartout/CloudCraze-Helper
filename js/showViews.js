var actualCode = `

	if(typeof CCRZ !== 'undefined'){

	    let dynamicViews = CCRZ.dynamicViews.filter((view)=>view.$el.length > 0);

		function closeModal(){
			$(".cch_modal_widget").remove();
		}

		$(document).keyup((e)=> {
			if (e.keyCode === 27) hideViews();
		});

		function hideViews(){
			$('.cch_view_content').remove();
		}

		function getRandomColor() {
			const letters = '0123456789ABCDEF';
			let color = '#';
			for (let i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		}

		var content = $('.cch_view_content');

		if(content.length!=0){
			hideViews();
		}
		else{
		    closeModal();
			dynamicViews.forEach((view, index)=>{
                var viewBox = $( "<span class='cch_view_content' title='Click to render' onclick='CCRZ.dynamicViews["+index+"].render()'><h2 class='cch_view_title'>"+view.viewName+"<h2></span>" );
                viewBox.css("top",view.$el.position().top);
                viewBox.css("width",view.$el[0].scrollWidth);
                viewBox.css("height",view.$el[0].scrollHeight);
                viewBox.css("left",view.$el.position().left);
                viewBox.css("background-color",""+getRandomColor()+"88");
                viewBox.addClass('cch_view_background');
                view.$el.append(viewBox);
			})
		}

	}

`;


var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();