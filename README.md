# slock
Very Lightweight jQuery Parallax plugin

<h2>Getting started</h2>
<h3>Javascript (requires JQuery)</h3>
<p>
	jQuery(".slock").slock({
		speed: 0.2 
	});
</p>

<h3>HTML</h3>
<p>
  <div class="slock" style="background-image: url(yourimage.jpg);">
  </div>	
</p>

<h3>CSS</h3>
<p>
  .slock
	{
		height:       				500px;
		background-position: 	0 0;
		background-repeat: 		no-repeat;
		background-size: 		  cover;
		transform: 				    translateX(0);
		will-change: 			    background-position-y;
	}	
</p>
