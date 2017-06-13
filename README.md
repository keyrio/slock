# slock
Very Lightweight jQuery Parallax plugin

<h2>Getting started</h2>
<h3>Javascript (requires JQuery)</h3>
<pre>
	jQuery(".slock").slock({
		speed: 0.2 
	});
</pre>

<h3>HTML</h3>
<pre>
  <div class="slock" style="background-image: url(yourimage.jpg);">
  </div>	
</pre>

<h3>CSS</h3>
<pre>
  .slock
	{
		height:       				500px;
		background-position: 	0 0;
		background-repeat: 		no-repeat;
		background-size: 		  cover;
		transform: 				    translateX(0);
		will-change: 			    background-position-y;
	}	
</pre>
