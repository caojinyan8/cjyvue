<template>
    <div class="header2 clearfloat box-s" id="header">
				<div class="left1 clearfloat fl">
					<a href="javascript:history.back();" class="back"></a>
				</div>
				<div class="middle clearfloat fl">
					{{names}}
				</div>
				<div class="right1 fr clearfloat">
					<a href="#" class="back"></a>
				</div>
			</div>
</template>
<script>
export default {
	props:["names"]
}
</script>

