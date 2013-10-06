<?php 
// Read merchandising.xml 
$merchXML = simplexml_load_file("merchandising.xml");
// Get random merchandising item
$item = $merchXML->item[rand(0, count($merchXML->item) - 1)];
?>
<aside class="sidebar lay-side" role="complementary">
	<div class="backdrop">
		<div class="backdrop-content">
			<h3><a class="link-inv" href="https://rmitlink.rmit.edu.au/Clubs/Club.aspx?CID=30" target="_blank">Club Shop</a></h3>
			<a href="<?php echo $item->link; ?>" target="_blank"><img class="respimg-fit" src="images/merchandising/<?php echo $item->image['filename']; ?>" width="<?php echo $item->image['width']; ?>" height="<?php echo $item->image['height']; ?>" alt=""></a>
			<h4 class="merch-title"><a class="link-inv" href="<?php echo $item->link; ?>" target="_blank"><?php echo $item->title; ?></a></h4>
			<p class="merch-desc"><?php echo $item->description; ?></p>
			<p class="merch-get"><a href="<?php echo $item->link; ?>" target="_blank">Get it!</a></p>
		</div>
	</div>
</aside>