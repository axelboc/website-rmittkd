<?php 

// Get a random merchandising item
$merchItem = Merchandising::getRandom();

// If an image URL is not provided, use the placeholder
$merchImageSrc = $merchItem['merch-image'] ? $merchItem['merch-image'] : '/images/merchandising/placeholder.png';

?>
<aside class="sidebar lay-side row backdrop" role="complementary">
	<div class="sidebar-inner">
		<a class="sidebar-rmit respimg-link" href="<?php echo CLUB_SHOP_URL; ?>" target="_blank"><img class="respimg-fit" src="/images/rmit-link.png" width="150" height="35" alt="The club's page on RMIT Link"></a>
	</div>
	<div class="sidebar-inner">
		<h3>Club Shop</h3>
		<a class="respimg-link" href="<?php echo CLUB_SHOP_URL; ?>" target="_blank"><img class="respimg-fit lazy-loading" src="" data-src="<?php echo $merchImageSrc; ?>" alt=""></a>
		<h4 class="merch-title"><?php echo $merchItem['merch-title']; ?></h4>
		<p class="merch-desc"><?php echo $merchItem['merch-desc']; ?></p>
		<p class="merch-get"><a href="<?php echo CLUB_SHOP_URL; ?>" target="_blank">Get it!</a></p>
	</div>
</aside>