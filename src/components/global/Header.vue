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
					<button
						@click="toggleMenu"
						:class="['menu-btn', { active: btnMenuActive }]"
					>
						<span v-if="!btnMenuActive"></span>
					</button>
					<ul class="nav-menu__list" :class="{ active: activeMenu }">
						<li class="nav-menu__item">
							<router-link
								:to="{ name: 'home', hash: '#banner' }"
								@click="scrollToSection('#banner')"
								class="nav-menu__link"
								>Home</router-link
							>
						</li>
						<li class="nav-menu__item">
							<router-link
								:to="{ name: 'home', hash: '#recipes' }"
								@click="scrollToSection('#recipes')"
								class="nav-menu__link"
								>Recipes</router-link
							>
						</li>
						<li class="nav-menu__item">
							<router-link
								:to="{ name: 'home', hash: '#categories' }"
								@click="scrollToSection('#categories')"
								class="nav-menu__link"
								>Categories</router-link
							>
						</li>
					</ul>
					<ToggleButton />
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
import ToggleButton from "./ToggleButton.vue";

export default {
	components: {
		ToggleButton,
	},
	data() {
		return {
			btnMenuActive: false,
			activeMenu: false,
			scrolled: false,
		};
	},
	methods: {
		toggleMenu() {
			this.activeMenu = !this.activeMenu;
			this.btnMenuActive = !this.btnMenuActive;
			if (this.activeMenu) {
				document.body.style.overflowY = "hidden";
			} else {
				document.body.style.overflowY = "";
			}
		},
		closeMenu() {
			this.btnMenuActive = false;
			this.activeMenu = !this.activeMenu;
			document.body.style.overflowY = "";
		},
		scrollPosition() {
			this.scrolled = window.scrollY > 0;
			if (window.scrollY === 0) {
				this.scrolled = false;
			}
		},
		scrollToSection(section) {
			this.$router.push({ name: "home", hash: section }).then(() => {
				this.$nextTick(() => {
					setTimeout(() => {
						const element = document.querySelector(section);
						if (element) {
							element.scrollIntoView({ behavior: "smooth" });
						}
						this.closeMenu();
					}, 300);
				});
			});
		},
		handleRouteChange(to) {
			const hash = to.hash;
			if (hash) {
				this.$nextTick(() => {
					const element = document.querySelector(hash);
					if (element) {
						element.scrollIntoView({ behavior: "smooth" });
					}
				});
			}
		},
	},
	created() {
		window.addEventListener("scroll", this.scrollPosition);
	},
	mounted() {
		this.handleRouteChange(this.$route);
		this.$router.afterEach((to, from) => {
			this.handleRouteChange(to);
		});
	},
	destroyed() {
		window.removeEventListener("scroll", this.scrollPosition);
	},
};
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
	display: flex;
	align-items: center;
	gap: 30px;
	&__list {
		display: flex;
		gap: 40px;
	}
	&__link {
		color: $black-color;
		font-family: "Semi-Bold";
		font-size: 18px;
		&:hover {
			color: $green-color;
		}
	}
}

.menu-btn {
	width: 25px;
	color: $black-color;
	background-color: transparent;
	padding: 10px 0;
	border: none;
	position: relative;
	display: none;
	cursor: pointer;
	&::before,
	&::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		height: 2px;
		background-color: $black-color;
	}
	&::before {
		top: 0;
	}

	&::after {
		bottom: 0;
	}

	& span {
		display: block;
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;
		height: 2px;
		background-color: $black-color;
		transform: translateY(-50%);
		transition: opacity 0.3s ease;
	}
	&.active::before {
		transform: translateY(8px) rotate(45deg);
	}
	&.active::after {
		transform: translateY(-10px) rotate(-45deg);
	}
	&.active span {
		opacity: 0;
	}
}

@media (max-width: 550px) {
	.nav-menu {
		flex-direction: row-reverse;
		&__list {
			position: fixed;
			top: -900px;
			left: 0px;
			width: 100%;
			background-color: $white-color;
			padding: 90px 20px 30px;
			z-index: 90;
			height: 100vh;
			text-align: center;
			transform: translateY(-100%);
		}
		&__list.active {
			transform: translateY(0);
			display: block;
			top: 65px;
			transition: transform 0.3s ease;
		}
		&__item {
			padding-bottom: 30px;
		}
	}
	.menu-btn {
		display: block;
		background-color: transparent;
		border: none;
		cursor: pointer;
		transition: transform 0.3s ease;
	}
}
</style>
