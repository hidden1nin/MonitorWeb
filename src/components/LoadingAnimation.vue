<template>
    <div class="loader">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>
</template>
<script>
export default {
  name: 'LoadingAnimation',
  props: {}
}
</script>
<style lang="scss" scoped>
$base-duration: 500ms;

// Breakpoints
$sm: new-breakpoint(min-width 320px);
$med: new-breakpoint(min-width 768px);
$lg: new-breakpoint(min-width 1024px);

html{
    overflow: hidden;
}

.loader {
	position: relative;
	display: grid;
	grid-template-columns: 33% 33% 33%;
	grid-gap: 2px;
	width: 50px;
	height: 50px;
	
	> div {
		position: relative;
		width: 100%;
		height: 100%;
		background: #4b9aaa;
		transform: scale(0.0);
		transform-origin: center center;
		animation: loader 2s infinite linear;
		
		&:nth-of-type(7) {}
		
		&:nth-of-type(1),
		&:nth-of-type(5), 
		&:nth-of-type(9) {
			animation-delay: 0.4s;
		}
		
		&:nth-of-type(4),
		&:nth-of-type(8) {
			animation-delay: 0.2s;
		}
		
		&:nth-of-type(2),
		&:nth-of-type(6) {
			animation-delay: 0.6s;
		}
		
		&:nth-of-type(3) {
			animation-delay: 0.8s;
		}
	}
}

@keyframes loader {
	0%   { transform: scale(0.0); }
	40%  { transform: scale(1.0); }
	80%  { transform: scale(1.0); }
	100% { transform: scale(0.0); }
}
</style>