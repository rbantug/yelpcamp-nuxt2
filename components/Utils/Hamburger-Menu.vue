<template>
    <div class="menu-wrap">
        <input type="checkbox" name id class="toggler" />
        <div class="hamburger">
            <div></div>
        </div>
        <div class="menu">
            <div>
                <div>
                    <ul>
                        <li>
                            <nuxt-link to="/campgrounds">Home</nuxt-link>
                        </li>

                        <li>
                            <nuxt-link v-if="$auth.loggedIn" to="#" class="username">{{$auth.user.data.name}}</nuxt-link>
                            <nuxt-link v-else to="/signin">Login</nuxt-link>
                        </li>
                        <li>
                            <div
                             v-if="$auth.loggedIn"
                             @click="logout" class="logout">Logout</div>
                             <nuxt-link v-else to="/signup">Sign up</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$auth.logout()
            this.$router.push('/campgrounds')
        },
    },
};
</script>

<style scoped>
.menu-wrap {
    position: relative;
}

.menu-wrap .toggler {
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
    width: 50px;
    height: 50px;
    opacity: 0;
}

.menu-wrap .hamburger {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 15px;
    height: 15px;
    padding: 1rem;
    background: rgba(249, 246, 241, 1);
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu-wrap .hamburger>div {
    position: relative;
    width: 100%;
    height: 2px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
}

.menu-wrap .hamburger>div::before,
.menu-wrap .hamburger>div::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: -5px;
    width: 100%;
    height: 2px;
    background: inherit;
}

.menu-wrap .hamburger>div::after {
    top: 5px;
}

.menu-wrap .toggler:checked+.hamburger {
    background-color: red;
}

.menu-wrap .toggler:checked+.hamburger>div {
    transform: rotate(135deg);
    background-color: white;
}

.menu-wrap .toggler:checked+.hamburger>div::before,
.menu-wrap .toggler:checked+.hamburger>div::after {
    top: 0;
    transform: rotate(90deg);
}

.menu-wrap .toggler:checked:hover+.hamburger>div {
    transform: rotate(225deg);
}

.menu-wrap .toggler:checked~.menu {
    visibility: visible;
}

.menu-wrap .toggler:checked~.menu>div {
    transform: translateX(0);
    transition-duration: 0.75s;
}

.menu-wrap .toggler:checked~.menu>div>div {
    opacity: 1;
}

.menu-wrap .toggler:checked~.menu>div>div>ul>li>a:hover,
.logout:hover {
    color: black;
}

/* The overlay parent element */

.menu-wrap .menu {
    position: fixed;
    top: 0;
    /* 5rem */
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    z-index: 1;
    /* BaseInputField.vue inputfield appears above the menu. Adding 'z-index: 1' fixes the problem but the red close button for the menu went underneath the grey menu. It still works though.  */
}

/* Overlay text alignment */

.menu-wrap .menu>div {
    background: rgba(183, 183, 183, 0.8);
    width: 10rem;
    height: 100%;
    padding-top: 10rem;
    transform-origin: right top;
    transform: translateX(15rem);
    transition: all 0.4s ease;
}

.menu-wrap .menu>div>div {
    text-align: center;
    max-width: 90vw;
    max-height: 100vw;
    opacity: 0;
    transition: opacity 0.4 ease;
}

.menu-wrap .menu>div>div>ul>li {
    list-style: none;
    font-size: 1.5rem;
    padding: 2rem 1rem;
    text-align: right;
}

.menu-wrap .menu>div>div>ul>li>a,
.logout {
    text-decoration: none;
    color: white;
    transition: color 0.4s ease;
    cursor: pointer;
}

.username {
    font-weight: 700;
}
</style>
