<?php 
// Read merchandising.xml 
$merchXML = simplexml_load_file("core/data/merchandising.xml");
// Get random merchandising item
$item = $merchXML->item[rand(0, count($merchXML->item) - 1)];
?>
<aside class="sidebar lay-side row backdrop" role="complementary">
	<div class="sidebar-inner">
		<a class="sidebar-rmit respimg-link" href="https://rmitlink.rmit.edu.au/Clubs/Club.aspx?CID=30" target="_blank"><img class="respimg-fit" src="images/rmit-link.png" width="150" height="35" alt="The club's page on RMIT Link"></a>
	</div>
	<div class="sidebar-inner">
		<h3><a class="link-inv" href="https://rmitlink.rmit.edu.au/Clubs/Club.aspx?CID=30" target="_blank">Club Shop</a></h3>
		<p><a class="respimg-link" href="<?php echo $item->link; ?>" target="_blank"><img class="respimg-fit lazy-loading" src="" data-src="images/merchandising/<?php echo $item->image['filename']; ?>" width="<?php echo $item->image['width']; ?>" height="<?php echo $item->image['height']; ?>" alt=""></a></p>
		<h4 class="merch-title"><a class="link-inv" href="<?php echo $item->link; ?>" target="_blank"><?php echo $item->title; ?></a></h4>
		<p class="merch-desc"><?php echo $item->description; ?></p>
		<p class="merch-get"><a href="<?php echo $item->link; ?>" target="_blank">Get it!</a></p>
	</div>
</aside>