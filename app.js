const a_parent = document.querySelectorAll(".a_parent");
const dd_menu_a = document.querySelectorAll(".dd_menu_a")
const dd_submenu = document.querySelectorAll(".dd_submenu")


// click on main-menu-item
a_parent.forEach(function(a_parent_item) {
    // console.log(a_parent_item);
    a_parent_item.addEventListener("click", () => {

        dd_menu_a.forEach(function(dd_menu_a_item){
            dd_menu_a_item.classList.remove("active");
        })
        a_parent.forEach(function(a_parent_item){
            a_parent_item.classList.remove("active");
        })
        a_parent_item.classList.add("active");
    })
})


// click on dropdown-menu-item
dd_menu_a.forEach(function(dd_menu_a_item) {
    // console.log(dd_menu_a_item);  //debug
    dd_menu_a_item.addEventListener("click", () => {

        dd_menu_a.forEach(function(dd_menu_a_item){
            dd_menu_a_item.classList.remove("active");
        })
        dd_menu_a_item.classList.add("active");

        // // clear parent item active class
        // a_parent.forEach(function(a_parent_item) {
        //     // console.log(a_parent_item);  // debug
        //     a_parent_item.classList.remove("active");
        // })
    })
})
