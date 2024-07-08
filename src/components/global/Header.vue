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
					<button @click="toggleMenu" class="menu-btn">
						<img
							v-if="!btnMenuActive"
							src="@/assets/images/icons/menu.svg"
							alt=""
						/>
						<img
							v-else
							src="@/assets/images/icons/close.svg"
							alt=""
						/>
					</button>
					<ul class="nav-menu__list" :class="{ active: activeMenu }">
						<li class="nav-menu__item">
							<router-link
								:to="{ name: 'home', hash: '#banner' }"
								@click="closeMenu"
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
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			btnMenuActive: false,
			activeMenu: false,
			scrolled: false,
			activeLink: null,
		};
	},
	methods: {
		toggleMenu() {
			this.activeMenu = !this.activeMenu;
			this.btnMenuActive = !this.btnMenuActive;
			if (this.activeMenu) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "";
			}
		},
		closeMenu() {
			this.btnMenuActive = false;
			this.activeMenu = !this.activeMenu;
			document.body.style.overflow = "";
		},
		scrollPosition() {
			this.scrolled = window.scrollY > 0;
			if (window.scrollY === 0) {
				this.scrolled = false;
			}
		},
		scrollToSection(selector, section) {
			const element = document.querySelector(selector);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
			if (section) {
				setTimeout(() => {
					const element = document.querySelector(section);
					if (element) {
						element.scrollIntoView({ behavior: "smooth" });
					}
				}, 100);
				this.$router.push({ name: "home", hash: section });
			}
			this.closeMenu();
		},
	},
	created() {
		window.addEventListener("scroll", this.scrollPosition);
	},
	mounted() {
		const hash = this.$route.hash;
		if (hash) {
			const element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
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
	&__list {
		display: flex;
		gap: 60px;
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
	display: none;
}

.nav-menu__list.active {
	display: block;
	top: 65px;
	transition: all 0.3s;
}

@media (max-width: 550px) {
	.nav-menu {
		&__list {
			border-radius: 10px;
			position: absolute;
			top: -900px;
			left: 0px;
			width: 100%;
			background-color: $white-color;
			padding: 90px 20px 30px;
			z-index: 90;
			transition: top 0.3s ease;
			height: 100vh;
			text-align: center;
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
	}
}
</style>
