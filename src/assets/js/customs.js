$('#BSbtnwarning').filestyle({ 
  buttonName : 'btn-warning', 
  buttonText : 'Choose file' 
}); 
$('#BSbtnsuccess').filestyle({ 
  buttonName : 'btn-success', 
  buttonText : 'รูปภาพประกอบ' 
}); 
$('#BSbtninfo').filestyle({ 
  buttonName : 'btn-info', 
  buttonText : ' Select a File' 
}); 
$('#BSbtndanger').filestyle({ 
  buttonName : 'btn-danger', 
  buttonText : ' Select a File' 
}); 
$('#BSbtndefault').filestyle({ 
  buttonName : 'btn-default', 
  buttonText : ' Choose file' 
}); 
$('#icondemo').filestyle({ 
  buttonText : 'แกลอรี่', 
  buttonName : 'btn-danger' 
}); 
  // //////////////////////////////////////////////////////////////////////////////////////////////////
  hs.graphicsDir = 'assets/highslide/graphics/';
	hs.align = 'center';
	hs.transitions = ['expand', 'crossfade'];
	hs.outlineType = 'rounded-white';
	hs.fadeInOut = true;
	hs.numberPosition = 'caption';
	hs.dimmingOpacity = 0.75;

	if (hs.addSlideshow) hs.addSlideshow({
		interval: 5000,
		repeat: false,
		useControls: true,
		fixedControls: 'fit',
		overlayOptions: {
			opacity: .75,
			position: 'bottom center',
			hideOnMouseOut: true
		}
	});

	// //////////////////////////////////////////////////////////////////////////////////////////////////
