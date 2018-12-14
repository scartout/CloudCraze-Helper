var actualCode = `

	if(typeof CCRZ !== 'undefined'){

		sessionStorage.setItem('isShowEventsEnabled', true);

		let content = $('.cch_event');

		if(content.length==0){

			(CCRZ.dynamicViews).forEach((view, index)=>{
				if(view.$el.length > 0){

					if(view.events){

						let eventsKeys = Object.keys(view.events),
							eventsValues = Object.values(view.events);

						eventsKeys.forEach((eventKey,index)=>{

							let separators = [' '],
								key = eventKey.split(' ').map((ekey) => ekey.trim()),
								evVal = "";

							if(typeof eventsValues[index]=='function'){
								evVal = (eventsValues[index].name).split(' ').map((ekey) => ekey.trim());
							}
							else{
								evVal = (eventsValues[index]).split(' ').map((ekey) => ekey.trim());
							}

							$(key[1]).attr('title',key[0]+" "+view.viewName+"."+evVal[0]).addClass('cch_event');

						});

					}

				}
			})

		}

	}

`;


var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();