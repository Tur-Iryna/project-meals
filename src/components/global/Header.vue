<template>
	<header class="header">
		<div class="container">
			<div class="header__inner">
				<div class="logo">
					<router-link
						:to="{ name: 'home' }"
						class="logo__link"
						href="#"
					>
						<img src="/src/assets/images/logo.png" alt="" />
					</router-link>
				</div>
				<nav class="nav-menu">
					<ul class="nav-menu__list">
						<li class="nav-menu__item">
							<router-link
								:to="{ name: 'home' }"
								class="nav-menu__link"
								href=""
								>Home</router-link
							>
						</li>
						<li class="nav-menu__item">
							<a class="nav-menu__link" href="">Categories</a>
						</li>
						<li class="nav-menu__item">
							<a class="nav-menu__link" href="">Ingredients</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
	&__inner {
		height: 75px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}

.logo {
	width: 80px;
}

.nav-menu {
	&__list {
		display: flex;
		gap: 60px;
	}
	&__link {
		color: $black-color;
		font-family: "Rubik";
		font-size: 20px;
	}
}
</style>
