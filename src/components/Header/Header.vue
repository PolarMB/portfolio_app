<template>
  <div>
    <BNavbar
      type="dark"
      variant="primary">
    <BContainer fluid>
        <BNavbarBrand>Portfolio</BNavbarBrand>
          <BNavbarNav class="ml-auto">
            <BNavItemDropdown right>
              <template slot="button-content"><em>Language</em></template>
              <BDropdownItemButton @click="reroute('/')">English</BDropdownItemButton>
              <BDropdownItemButton @click="reroute('/spanish')">Spanish</BDropdownItemButton>
            </BNavItemDropdown>
          </BNavbarNav>
      </BContainer>
    </BNavbar>
  </div>
</template>

<script>
import {
  BNavbar,
  BContainer,
  BNavbarBrand,
  BNavbarNav,
  BNavItemDropdown,
  BDropdownItemButton,
} from 'bootstrap-vue';

export default {
  name: 'Header',
  components: {
    BNavbar,
    BContainer,
    BNavbarBrand,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItemButton,
  },
  methods: {
    reroute(route) {
      this.$router.push(route);
    },
  }
};
</script>
