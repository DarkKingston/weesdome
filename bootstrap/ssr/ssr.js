import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createTextVNode, ref, onMounted, resolveDirective, createSSRApp, h as h$1 } from "vue";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Link, Head, createInertiaApp } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrGetDirectiveProps, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import Fancybox from "@fancyapps/ui";
import { dragscroll } from "vue-dragscroll";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import vClickOutside from "click-outside-vue3";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { createPinia } from "pinia";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$l = {
  components: {
    Link
  },
  props: {
    id: Number,
    image: String,
    text: String,
    count: Number
  }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper-slide" }, _attrs))} data-v-611c513e>`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/object/" + $props.id,
    class: "popular_item"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="newest_img" data-v-611c513e${_scopeId}><img${ssrRenderAttr("src", $props.image)} data-v-611c513e${_scopeId}><div class="newest_favorite" data-v-611c513e${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-611c513e${_scopeId}><path d="M12 21C17.25 17.4525 22.5 13.5 22.5 8.24997C22.502 7.55998 22.3675 6.8764 22.1044 6.23854C21.8413 5.60069 21.4546 5.02115 20.9667 4.53325C20.4788 4.04534 19.8993 3.65871 19.2614 3.39557C18.6236 3.13243 17.94 2.99799 17.25 2.99997C15.9 2.99997 14.565 3.50997 13.5375 4.53747L12 6.07497L10.4625 4.53747C9.976 4.04811 9.39754 3.65977 8.76041 3.39477C8.12328 3.12977 7.44005 2.99335 6.75 2.99335C6.05996 2.99335 5.37673 3.12977 4.7396 3.39477C4.10247 3.65977 3.52401 4.04811 3.0375 4.53747C2.54934 5.02452 2.16222 5.60322 1.89837 6.24033C1.63452 6.87743 1.49914 7.56039 1.5 8.24997C1.5 13.5 6.75 17.4525 12 21Z" fill="#222222" fill-opacity="0.5" stroke="white" stroke-width="1.5" data-v-611c513e${_scopeId}></path></svg></div></div><div class="newest_content" data-v-611c513e${_scopeId}><div class="newest_box d-flex align-center justify-between" data-v-611c513e${_scopeId}><div class="newest_title fz-15 fw-400" data-v-611c513e${_scopeId}>${ssrInterpolate($props.text)}</div><div class="newest_price fz-14 fw-600" data-v-611c513e${_scopeId}> 1000000 <span class="tt fw-400" data-v-611c513e${_scopeId}>thb</span></div></div><div class="newest_params d-flex align-center justify-between" data-v-611c513e${_scopeId}><div class="newest_params_wrapper d-flex align-center" data-v-611c513e${_scopeId}><div class="newest_param_item fz-15 d-flex align-center" data-v-611c513e${_scopeId}><span data-v-611c513e${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="d-flex align-center" data-v-611c513e${_scopeId}><path d="M10 4H4.55556C4.143 4 3.74733 4.16389 3.45561 4.45561C3.16389 4.74733 3 5.143 3 5.55556V16.4444C3 16.857 3.16389 17.2527 3.45561 17.5444C3.74733 17.8361 4.143 18 4.55556 18H15.4444C15.857 18 16.2527 17.8361 16.5444 17.5444C16.8361 17.2527 17 16.857 17 16.4444V11M11.5556 13.3333H7.66667M7.66667 13.3333V9.44444M7.66667 13.3333L17 4M13.1111 4H17M17 4V7.88889" stroke="#222222" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-611c513e${_scopeId}></path></svg></span> 46м² </div><div class="newest_param_item fz-15 d-flex align-center" data-v-611c513e${_scopeId}><span data-v-611c513e${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="d-flex align-center" data-v-611c513e${_scopeId}><path d="M1 4V18M1 7.5H17.2C17.6774 7.5 18.1352 7.68437 18.4728 8.01256C18.8104 8.34075 19 8.78587 19 9.25V18M1 15.375H19M4.6 7.5V15.375" stroke="#222222" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-611c513e${_scopeId}></path></svg></span> x2 </div><div class="newest_param_item fz-15 d-flex align-center" data-v-611c513e${_scopeId}><span data-v-611c513e${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="d-flex align-center" data-v-611c513e${_scopeId}><path d="M7.3 4.66667L5.05 2.44444C4.8192 2.18728 4.49678 2.02806 4.15 2C3.4147 2 2.8 2.60711 2.8 3.33333V14.4444C2.8 14.9159 2.98964 15.3681 3.32721 15.7015C3.66477 16.0349 4.12261 16.2222 4.6 16.2222H15.4C15.8774 16.2222 16.3352 16.0349 16.6728 15.7015C17.0104 15.3681 17.2 14.9159 17.2 14.4444V10M8.2 3.77778L6.4 5.55556M1 10H19M5.5 16.2222V18M14.5 16.2222V18" stroke="#222222" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-611c513e${_scopeId}></path></svg></span> x2 </div></div><div class="newest_more" data-v-611c513e${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none" data-v-611c513e${_scopeId}><path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-611c513e${_scopeId}></path></svg></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "newest_img" }, [
            createVNode("img", { src: $props.image }, null, 8, ["src"]),
            createVNode("div", { class: "newest_favorite" }, [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none"
              }, [
                createVNode("path", {
                  d: "M12 21C17.25 17.4525 22.5 13.5 22.5 8.24997C22.502 7.55998 22.3675 6.8764 22.1044 6.23854C21.8413 5.60069 21.4546 5.02115 20.9667 4.53325C20.4788 4.04534 19.8993 3.65871 19.2614 3.39557C18.6236 3.13243 17.94 2.99799 17.25 2.99997C15.9 2.99997 14.565 3.50997 13.5375 4.53747L12 6.07497L10.4625 4.53747C9.976 4.04811 9.39754 3.65977 8.76041 3.39477C8.12328 3.12977 7.44005 2.99335 6.75 2.99335C6.05996 2.99335 5.37673 3.12977 4.7396 3.39477C4.10247 3.65977 3.52401 4.04811 3.0375 4.53747C2.54934 5.02452 2.16222 5.60322 1.89837 6.24033C1.63452 6.87743 1.49914 7.56039 1.5 8.24997C1.5 13.5 6.75 17.4525 12 21Z",
                  fill: "#222222",
                  "fill-opacity": "0.5",
                  stroke: "white",
                  "stroke-width": "1.5"
                })
              ]))
            ])
          ]),
          createVNode("div", { class: "newest_content" }, [
            createVNode("div", { class: "newest_box d-flex align-center justify-between" }, [
              createVNode("div", { class: "newest_title fz-15 fw-400" }, toDisplayString($props.text), 1),
              createVNode("div", { class: "newest_price fz-14 fw-600" }, [
                createTextVNode(" 1000000 "),
                createVNode("span", { class: "tt fw-400" }, "thb")
              ])
            ]),
            createVNode("div", { class: "newest_params d-flex align-center justify-between" }, [
              createVNode("div", { class: "newest_params_wrapper d-flex align-center" }, [
                createVNode("div", { class: "newest_param_item fz-15 d-flex align-center" }, [
                  createVNode("span", null, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      class: "d-flex align-center"
                    }, [
                      createVNode("path", {
                        d: "M10 4H4.55556C4.143 4 3.74733 4.16389 3.45561 4.45561C3.16389 4.74733 3 5.143 3 5.55556V16.4444C3 16.857 3.16389 17.2527 3.45561 17.5444C3.74733 17.8361 4.143 18 4.55556 18H15.4444C15.857 18 16.2527 17.8361 16.5444 17.5444C16.8361 17.2527 17 16.857 17 16.4444V11M11.5556 13.3333H7.66667M7.66667 13.3333V9.44444M7.66667 13.3333L17 4M13.1111 4H17M17 4V7.88889",
                        stroke: "#222222",
                        "stroke-opacity": "0.5",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  createTextVNode(" 46м² ")
                ]),
                createVNode("div", { class: "newest_param_item fz-15 d-flex align-center" }, [
                  createVNode("span", null, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      class: "d-flex align-center"
                    }, [
                      createVNode("path", {
                        d: "M1 4V18M1 7.5H17.2C17.6774 7.5 18.1352 7.68437 18.4728 8.01256C18.8104 8.34075 19 8.78587 19 9.25V18M1 15.375H19M4.6 7.5V15.375",
                        stroke: "#222222",
                        "stroke-opacity": "0.5",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  createTextVNode(" x2 ")
                ]),
                createVNode("div", { class: "newest_param_item fz-15 d-flex align-center" }, [
                  createVNode("span", null, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      class: "d-flex align-center"
                    }, [
                      createVNode("path", {
                        d: "M7.3 4.66667L5.05 2.44444C4.8192 2.18728 4.49678 2.02806 4.15 2C3.4147 2 2.8 2.60711 2.8 3.33333V14.4444C2.8 14.9159 2.98964 15.3681 3.32721 15.7015C3.66477 16.0349 4.12261 16.2222 4.6 16.2222H15.4C15.8774 16.2222 16.3352 16.0349 16.6728 15.7015C17.0104 15.3681 17.2 14.9159 17.2 14.4444V10M8.2 3.77778L6.4 5.55556M1 10H19M5.5 16.2222V18M14.5 16.2222V18",
                        stroke: "#222222",
                        "stroke-opacity": "0.5",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  createTextVNode(" x2 ")
                ])
              ]),
              createVNode("div", { class: "newest_more" }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "18",
                  height: "10",
                  viewBox: "0 0 18 10",
                  fill: "none"
                }, [
                  createVNode("path", {
                    d: "M13.8 1L17 5M17 5L13.8 9M17 5H1",
                    stroke: "#222222",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/components/item/AppNewestItem.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const AppNewestItem = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$k], ["__scopeId", "data-v-611c513e"]]);
const _sfc_main$k = {
  components: { AppNewestItem, Navigation },
  props: {
    title: String,
    swiper: String
  },
  setup(props) {
    const catalog = ref([
      {
        id: 1,
        image: "/assets/images/object_1.png",
        text: "Layan Verde",
        count: 37
      },
      {
        id: 2,
        image: "/assets/images/object_2.png",
        text: "Atrium Andaman City",
        count: 37
      },
      {
        id: 3,
        image: "/assets/images/object_3.png",
        text: "Ayana heights seaview residence",
        count: 37
      },
      {
        id: 4,
        image: "/assets/images/object_1.png",
        text: "Sunshine Beach Resort & Residences",
        count: 37
      },
      {
        id: 5,
        image: "/assets/images/object_2.png",
        text: "Layan Verde",
        count: 37
      },
      {
        id: 6,
        image: "/assets/images/object_3.png",
        text: "Layan Verde",
        count: 37
      }
    ]);
    function initSwiper() {
      new Swiper(`.${props.swiper}`, {
        direction: "horizontal",
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 12,
        navigation: {
          nextEl: `.${props.swiper}_catalog_next`,
          prevEl: `.${props.swiper}_catalog_prev`
        },
        breakpoints: {
          1040: {
            slidesPerView: 3
          },
          815: {
            slidesPerView: 2.4
          },
          700: {
            slidesPerView: 2.1
          },
          580: {
            slidesPerView: 1.9
          },
          445: {
            slidesPerView: 1.4
          },
          400: {
            slidesPerView: 1.2
          },
          230: {
            slidesPerView: 1.1
          }
        }
      });
    }
    onMounted(() => {
      initSwiper();
    });
    return { catalog };
  }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppNewestItem = resolveComponent("AppNewestItem");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "popular" }, _attrs))}><div class="container"><div class="popular_title fz-20 fw-700">${ssrInterpolate($props.title)}</div><div class="popular_wrapper d-flex align-start mt-14"><div class="${ssrRenderClass($props.swiper)}"><div class="${ssrRenderClass([`${$props.swiper}_catalog_prev`, "prev"])}"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M4.2 1L1 5M1 5L4.2 9M1 5H17" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="swiper-wrapper"><!--[-->`);
  ssrRenderList($setup.catalog, (item, key) => {
    _push(ssrRenderComponent(_component_AppNewestItem, {
      id: item.id,
      image: item.image,
      text: item.text,
      count: item.count,
      key
    }, null, _parent));
  });
  _push(`<!--]--></div><div class="${ssrRenderClass([`${$props.swiper}_catalog_prev`, "next"])}"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div></div></div></section>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/components/AppObject.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const AppObject = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$j = {
  components: {
    AppObject,
    Fancybox,
    Link
  },
  setup() {
    function initSwiper() {
      new Swiper(".catalog_swiper", {
        modules: [Pagination],
        direction: "horizontal",
        slidesPerView: 1,
        pagination: {
          el: ".catalog_pagination",
          type: "fraction",
          clickable: true
        }
      });
    }
    function initFancy() {
      Fancybox.bind("[data-fancybox='gallery']", {});
      Fancybox.bind("[data-fancybox='gallery_mob']", {});
    }
    function openGallery() {
      Fancybox.fromSelector('[data-fancybox="gallery"]');
    }
    onMounted(() => {
      initSwiper();
      initFancy();
    });
    return {
      openGallery
    };
  }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_AppObject = resolveComponent("AppObject");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main_wrapper_with_breadcrumbs" }, _attrs))}><div class="breadcrumbs d-flex align-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/",
    class: "breadcrumbs_item fz-14 fw-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Главная`);
      } else {
        return [
          createTextVNode("Главная")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="breadcrumbs_delimiter">/</div><div class="breadcrumbs_item fz-14 fw-600">Виллы</div><div class="breadcrumbs_delimiter">/</div><div class="breadcrumbs_item fz-14 fw-600">PROXIMA Phuket Villas</div></div><div class="main_wrapper"><div class="container"><div class="catalog_actions d-flex align-center justify-between"><div class="catalog_actions_box d-flex align-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/",
    class: "catalog_back"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none"${_scopeId}><g clip-path="url(#clip0_2029_519)"${_scopeId}><path d="M0.289062 10.6797C0.105469 10.5 0 10.2578 0 10C0 9.74219 0.105469 9.50001 0.289062 9.32032L7.16406 2.75782C7.53906 2.39844 8.13281 2.41407 8.48828 2.78907C8.84375 3.16407 8.83203 3.75782 8.45703 4.11329L3.27734 9.06251H16.5625C17.082 9.06251 17.5 9.48047 17.5 10C17.5 10.5195 17.082 10.9375 16.5625 10.9375H3.27734L8.46094 15.8828C8.83594 16.2422 8.84766 16.832 8.49219 17.207C8.13672 17.582 7.54297 17.5938 7.16797 17.2383L0.292969 10.6758L0.289062 10.6797Z" fill="black"${_scopeId}></path></g><defs${_scopeId}><clipPath id="clip0_2029_519"${_scopeId}><rect width="17.5" height="20" fill="white"${_scopeId}></rect></clipPath></defs></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "18",
            height: "20",
            viewBox: "0 0 18 20",
            fill: "none"
          }, [
            createVNode("g", { "clip-path": "url(#clip0_2029_519)" }, [
              createVNode("path", {
                d: "M0.289062 10.6797C0.105469 10.5 0 10.2578 0 10C0 9.74219 0.105469 9.50001 0.289062 9.32032L7.16406 2.75782C7.53906 2.39844 8.13281 2.41407 8.48828 2.78907C8.84375 3.16407 8.83203 3.75782 8.45703 4.11329L3.27734 9.06251H16.5625C17.082 9.06251 17.5 9.48047 17.5 10C17.5 10.5195 17.082 10.9375 16.5625 10.9375H3.27734L8.46094 15.8828C8.83594 16.2422 8.84766 16.832 8.49219 17.207C8.13672 17.582 7.54297 17.5938 7.16797 17.2383L0.292969 10.6758L0.289062 10.6797Z",
                fill: "black"
              })
            ]),
            createVNode("defs", null, [
              createVNode("clipPath", { id: "clip0_2029_519" }, [
                createVNode("rect", {
                  width: "17.5",
                  height: "20",
                  fill: "white"
                })
              ])
            ])
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="catalog_title fz-24 fw-700">Тип А-1/2</div></div><div class="catalog_actions_box d-flex align-center"><div class="catalog_share"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none"><path d="M6.59 12.51L13.42 16.49M13.41 5.51L6.59 9.49M19 4C19 5.65685 17.6569 7 16 7C14.3431 7 13 5.65685 13 4C13 2.34315 14.3431 1 16 1C17.6569 1 19 2.34315 19 4ZM7 11C7 12.6569 5.65685 14 4 14C2.34315 14 1 12.6569 1 11C1 9.34315 2.34315 8 4 8C5.65685 8 7 9.34315 7 11ZM19 18C19 19.6569 17.6569 21 16 21C14.3431 21 13 19.6569 13 18C13 16.3431 14.3431 15 16 15C17.6569 15 19 16.3431 19 18Z" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_heart d-flex align-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z" fill="#FF005C" stroke="#FF005C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> 19 </div></div></div></div><div class="container_without_space"><div class="catalog_gallery"><a class="catalog_gallery_big" href="/assets/images/desktop/object_big.png" data-fancybox="gallery"><img src="/assets/images/desktop/object_big.png"></a><div class="catalog_gallery_box"><a class="catalog_gallery_item" href="/assets/images/object_1.png" data-fancybox="gallery"><img src="/assets/images/object_1.png"></a><a class="catalog_gallery_item" href="/assets/images/object_2.png" data-fancybox="gallery"><img src="/assets/images/object_2.png"></a><a class="catalog_gallery_item" href="/assets/images/object_1.png" data-fancybox="gallery"><img src="/assets/images/object_1.png"></a><a class="catalog_gallery_item" href="/assets/images/object_3.png" data-fancybox="gallery"><img src="/assets/images/object_3.png"></a></div><div class="btn_white btn_view_all fz-16 fw-500"> Показать все фото </div></div><div class="catalog_swiper"><div class="swiper-wrapper"><div class="swiper-slide"><a href="/assets/images/object_1.png" data-fancybox="gallery_mob"><img src="/assets/images/object_1.png"></a></div><div class="swiper-slide"><a href="/assets/images/object_2.png" data-fancybox="gallery_mob"><img src="/assets/images/object_2.png"></a></div><div class="swiper-slide"><a href="/assets/images/object_3.png" data-fancybox="gallery_mob"><img src="/assets/images/object_3.png"></a></div></div><div class="swiper-pagination catalog_pagination fz-14 fw-600"></div></div></div><div class="container_without_space"><div class="catalog_object"><div class="catalog_object_title fz-20 fw-700"> Бангато (Пхукет, Таиланд) </div><div class="catalog_tags"><div class="catalog_tags_item">Вилла</div><div class="catalog_tags_delimiter">•</div><div class="catalog_tags_item">Бассейн</div><div class="catalog_tags_delimiter">•</div><div class="catalog_tags_item">Выход к пляжу</div><div class="catalog_tags_delimiter">•</div><div class="catalog_tags_item">Океан</div><div class="catalog_tags_delimiter">•</div><div class="catalog_tags_item">Всё включено</div><div class="catalog_tags_delimiter">•</div><div class="catalog_tags_item">Завтрак</div><div class="catalog_tags_delimiter">•</div><div class="catalog_tags_item">Обслуживание номеров</div></div></div><div class="catalog_about"><div class="catalog_about_account d-flex align-center"><div class="catalog_account_img"><img src="/assets/catalog_account.png"></div><div class="catalog_account_info"><div class="catalog_account_info_name fz-16 fw-700">Metrics</div><div class="catalog_account_info_subtitle fz-14 fw-400"> 7 лет в сфере </div></div></div><div class="catalog_about_descr fz-12 fw-400"> Расположение нашей виллы тихое, и вы можете наслаждаться прекрасным видом на горы с балкона главной спальни.Вы можете насладиться естественным прохладным бризом на берегу моря.Семейное барбекю у частного бассейнаМного места для приготовления пищи с достаточным количеством еды для целой семьи. Кухня также оборудована духовкой, где вы сможете приготовить вкусный ужин для своей семьи и друзей в любое время.Район имеет круглосуточную охрану, и вы можете найти их, независимо от ваших проблем. Это обеспечивает вам удобство и безопасность вашей поездки. </div></div><div class="catalog_same"><div class="catalog_same_title fz-20 fw-700">Объекты</div><div class="catalog_same_row"><div class="catalog_same_row_title fz-16 fw-400">Трехкомнатные</div><div class="catalog_same_row_wrapper d-flex align-center"><div class="catalog_same_row_item fz-12 fw-700">Тип А-1</div><div class="catalog_same_row_item fz-12 fw-700">Тип А-2</div><div class="catalog_same_row_item fz-12 fw-700">Тип А-3</div></div></div><div class="catalog_same_row"><div class="catalog_same_row_title fz-16 fw-400">Пентхаусы</div><div class="catalog_same_row_wrapper d-flex align-center"><div class="catalog_same_row_item fz-12 fw-700">Тип В-1</div><div class="catalog_same_row_item fz-12 fw-700">Тип В-2</div></div></div></div></div><div class="container_without_space"><div class="line"></div></div>`);
  _push(ssrRenderComponent(_component_AppObject, {
    title: "Трехкомнатные",
    swiper: "three_rooms"
  }, null, _parent));
  _push(`<div class="container_without_space"><div class="line"></div></div>`);
  _push(ssrRenderComponent(_component_AppObject, {
    title: "Пентхаусы",
    swiper: "penthouse"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Catalog.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Catalog = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$i]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Catalog
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {
  components: {
    Link
  },
  props: {
    id: Number,
    image: String,
    text: String,
    count: Number
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper-slide" }, _attrs))} data-v-764d6973>`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/catalog/" + $props.id,
    class: "popular_item"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="popular_img" data-v-764d6973${_scopeId}><img${ssrRenderAttr("src", $props.image)} data-v-764d6973${_scopeId}><div class="popular_count fz-12 fw-600" data-v-764d6973${_scopeId}>${ssrInterpolate($props.count)} объектов</div></div><div class="popular_item_title fz-16" data-v-764d6973${_scopeId}>${ssrInterpolate($props.text)}</div>`);
      } else {
        return [
          createVNode("div", { class: "popular_img" }, [
            createVNode("img", { src: $props.image }, null, 8, ["src"]),
            createVNode("div", { class: "popular_count fz-12 fw-600" }, toDisplayString($props.count) + " объектов", 1)
          ]),
          createVNode("div", { class: "popular_item_title fz-16" }, toDisplayString($props.text), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/components/item/AppPopularItem.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const AppPopularItem = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$h], ["__scopeId", "data-v-764d6973"]]);
const _sfc_main$h = {
  components: { AppPopularItem },
  setup() {
    const catalog = ref([
      {
        id: 9,
        image: "/assets/images/catalog_1.png",
        text: "Layan Verde",
        count: 37
      },
      {
        id: 8,
        image: "/assets/images/catalog_2.png",
        text: "Atrium Andaman City",
        count: 37
      },
      {
        id: 11,
        image: "/assets/images/catalog_3.png",
        text: "Ayana heights seaview residence",
        count: 37
      },
      {
        id: 21,
        image: "/assets/images/catalog_4.png",
        text: "Sunshine Beach Resort & Residences",
        count: 37
      },
      {
        id: 45,
        image: "/assets/images/catalog_5.png",
        text: "Layan Verde",
        count: 37
      },
      {
        id: 9,
        image: "/assets/images/catalog_6.png",
        text: "Layan Verde",
        count: 37
      }
    ]);
    onMounted(() => {
      new Swiper(".popular_objects", {
        modules: [Navigation],
        direction: "horizontal",
        slidesPerView: 6,
        spaceBetween: 12,
        navigation: {
          nextEl: ".popular_next",
          prevEl: ".popular_prev"
        },
        breakpoints: {
          1040: {
            slidesPerView: 6
          },
          815: {
            slidesPerView: 5
          },
          700: {
            slidesPerView: 4
          },
          580: {
            slidesPerView: 3
          },
          445: {
            slidesPerView: 2.6
          },
          360: {
            slidesPerView: 2.4
          },
          230: {
            slidesPerView: 2.2
          }
        }
      });
    });
    return { catalog };
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppPopularItem = resolveComponent("AppPopularItem");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "popular" }, _attrs))}><div class="container"><div class="popular_title fz-20 fw-700">Популярные проекты</div><div class="no_overflow"><div class="prev popular_prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M4.2 1L1 5M1 5L4.2 9M1 5H17" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="popular_wrapper popular_objects d-flex align-start mt-14"><div class="swiper-wrapper"><!--[-->`);
  ssrRenderList($setup.catalog, (item, key) => {
    _push(ssrRenderComponent(_component_AppPopularItem, {
      id: item.id,
      image: item.image,
      text: item.text,
      count: item.count,
      key
    }, null, _parent));
  });
  _push(`<!--]--></div></div><div class="next popular_next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div></div></section>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/components/AppPopular.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const AppPopular = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$g = {
  __name: "AppSeachBar",
  __ssrInlineRender: true,
  setup(__props) {
    const isInputActive = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-bdb5b523><div class="${ssrRenderClass([{ active: isInputActive.value }, "search-bar transition"])}" data-v-bdb5b523><div class="search-input" data-v-bdb5b523><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" data-v-bdb5b523><path d="M6.5 2.71714e-07C7.70042 -0.000346761 8.87748 0.331734 9.90071 0.95943C10.9239 1.58713 11.7534 2.48592 12.297 3.55616C12.8407 4.62641 13.0774 5.8263 12.9808 7.02283C12.8843 8.21936 12.4582 9.36578 11.75 10.335L15.705 14.295L14.295 15.705L10.335 11.75C9.22252 12.5647 7.87887 13.0026 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.68482 4.77609 2.71714e-07 6.5 2.71714e-07ZM6.5 2C5.90905 2 5.32389 2.1164 4.77792 2.34254C4.23196 2.56869 3.73588 2.90016 3.31802 3.31802C2.90016 3.73588 2.56869 4.23196 2.34254 4.77793C2.1164 5.32389 2 5.90905 2 6.5C2 7.09095 2.1164 7.67611 2.34254 8.22208C2.56869 8.76804 2.90016 9.26412 3.31802 9.68198C3.73588 10.0998 4.23196 10.4313 4.77792 10.6575C5.32389 10.8836 5.90905 11 6.5 11C7.69347 11 8.83807 10.5259 9.68198 9.68198C10.5259 8.83807 11 7.69347 11 6.5C11 5.30653 10.5259 4.16193 9.68198 3.31802C8.83807 2.47411 7.69347 2 6.5 2Z" fill="#222222" data-v-bdb5b523></path></svg><input type="text" class="search" data-v-bdb5b523>`);
      if (!isInputActive.value) {
        _push(`<div class="search-text" data-v-bdb5b523><div class="fz-14 fw-600" data-v-bdb5b523>Найти дом мечты</div><div class="sub-text fz-12" data-v-bdb5b523>От 100,000$ · Все районы Пхукета</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="filter-button" data-v-bdb5b523><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" data-v-bdb5b523><path d="M3 6C3.62065 5.99968 4.22613 6.19186 4.73298 6.55006C5.23984 6.90826 5.62312 7.41484 5.83 8H12V10H5.83C5.64669 10.5185 5.32439 10.9766 4.89833 11.3243C4.47226 11.672 3.95882 11.8959 3.41412 11.9715C2.86941 12.0471 2.3144 11.9716 1.80973 11.7531C1.30506 11.5346 0.870157 11.1816 0.552537 10.7327C0.234918 10.2838 0.046807 9.75616 0.00876117 9.20755C-0.0292846 8.65894 0.0841984 8.11042 0.336809 7.62194C0.58942 7.13347 0.971439 6.72382 1.44112 6.43778C1.9108 6.15173 2.45007 6.00029 3 6ZM3 8C2.73478 8 2.48043 8.10536 2.29289 8.29289C2.10536 8.48043 2 8.73478 2 9C2 9.26522 2.10536 9.51957 2.29289 9.70711C2.48043 9.89464 2.73478 10 3 10C3.26522 10 3.51957 9.89464 3.70711 9.70711C3.89464 9.51957 4 9.26522 4 9C4 8.73478 3.89464 8.48043 3.70711 8.29289C3.51957 8.10536 3.26522 8 3 8ZM9 4.12473e-07C9.54993 0.000288763 10.0892 0.151731 10.5589 0.437777C11.0286 0.723824 11.4106 1.13347 11.6632 1.62195C11.9158 2.11042 12.0293 2.65894 11.9912 3.20755C11.9532 3.75616 11.7651 4.28376 11.4475 4.73269C11.1298 5.18162 10.6949 5.53462 10.1903 5.75309C9.6856 5.97157 9.13059 6.04712 8.58588 5.9715C8.04118 5.89588 7.52774 5.67198 7.10167 5.32429C6.67561 4.9766 6.35331 4.51848 6.17 4H0V2H6.17C6.37688 1.41484 6.76016 0.908257 7.26702 0.550056C7.77387 0.191856 8.37935 -0.00032496 9 4.12473e-07ZM9 2C8.73478 2 8.48043 2.10536 8.29289 2.29289C8.10536 2.48043 8 2.73478 8 3C8 3.26522 8.10536 3.51957 8.29289 3.70711C8.48043 3.89464 8.73478 4 9 4C9.26522 4 9.51957 3.89464 9.70711 3.70711C9.89464 3.51957 10 3.26522 10 3C10 2.73478 9.89464 2.48043 9.70711 2.29289C9.51957 2.10536 9.26522 2 9 2Z" fill="#222222" data-v-bdb5b523></path></svg></div></div></div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/components/AppSeachBar.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const SearchBar = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-bdb5b523"]]);
const _sfc_main$f = {
  directives: {
    dragscroll
  },
  setup() {
    const isActive = ref(0);
    function toggleTab(key) {
      isActive.value = key;
    }
    return {
      isActive,
      toggleTab
    };
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _directive_dragscroll = resolveDirective("dragscroll");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-5e658a27><div${ssrRenderAttrs(mergeProps({ class: "tabs d-flex align-center mt-14" }, ssrGetDirectiveProps(_ctx, _directive_dragscroll)))} data-v-5e658a27><div class="${ssrRenderClass([{ active: $setup.isActive == 0 }, "tabs_item fz-12 fw-700"])}" data-v-5e658a27> Все </div><div class="${ssrRenderClass([{ active: $setup.isActive == 1 }, "tabs_item fz-12 fw-700"])}" data-v-5e658a27> Кондо </div><div class="${ssrRenderClass([{ active: $setup.isActive == 2 }, "tabs_item fz-12 fw-700"])}" data-v-5e658a27> Виллы </div><div class="${ssrRenderClass([{ active: $setup.isActive == 3 }, "tabs_item fz-12 fw-700"])}" data-v-5e658a27> Таунхаус </div><div class="${ssrRenderClass([{ active: $setup.isActive == 4 }, "tabs_item fz-12 fw-700"])}" data-v-5e658a27> Дома </div><div class="${ssrRenderClass([{ active: $setup.isActive == 5 }, "tabs_item fz-12 fw-700"])}" data-v-5e658a27> Коттеджи </div><div class="${ssrRenderClass([{ active: $setup.isActive == 6 }, "tabs_item fz-12 fw-700"])}" data-v-5e658a27> Виллы </div><div class="${ssrRenderClass([{ active: $setup.isActive == 7 }, "tabs_item fz-12 fw-700"])}" data-v-5e658a27> Гостиницы </div><div class="${ssrRenderClass([{ active: $setup.isActive == 8 }, "tabs_item fz-12 fw-700"])}" data-v-5e658a27> Участки </div><div class="${ssrRenderClass([{ active: $setup.isActive == 9 }, "tabs_item fz-12 fw-700"])}" data-v-5e658a27> Офис </div></div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/components/AppTypesObject.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const AppTypesObject = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f], ["__scopeId", "data-v-5e658a27"]]);
const _sfc_main$e = {
  components: { AppNewestItem },
  setup() {
    const catalog = ref([
      {
        id: 1,
        image: "/assets/images/object_1.png",
        text: "Layan Verde",
        count: 37
      },
      {
        id: 2,
        image: "/assets/images/object_2.png",
        text: "Atrium Andaman City",
        count: 37
      },
      {
        id: 3,
        image: "/assets/images/object_3.png",
        text: "Ayana heights seaview residence",
        count: 37
      },
      {
        id: 4,
        image: "/assets/images/object_1.png",
        text: "Sunshine Beach Resort & Residences",
        count: 37
      },
      {
        id: 5,
        image: "/assets/images/object_2.png",
        text: "Layan Verde",
        count: 37
      },
      {
        id: 6,
        image: "/assets/images/object_3.png",
        text: "Layan Verde",
        count: 37
      }
    ]);
    onMounted(() => {
      new Swiper(".newest_objects", {
        modules: [Navigation],
        direction: "horizontal",
        slidesPerView: 3,
        navigation: {
          nextEl: ".newest_next",
          prevEl: ".newest_prev"
        },
        spaceBetween: 12,
        breakpoints: {
          1040: {
            slidesPerView: 3
          },
          815: {
            slidesPerView: 2.4
          },
          700: {
            slidesPerView: 2.1
          },
          580: {
            slidesPerView: 1.9
          },
          445: {
            slidesPerView: 1.4
          },
          400: {
            slidesPerView: 1.2
          },
          230: {
            slidesPerView: 1.1
          }
        }
      });
    });
    return { catalog };
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppNewestItem = resolveComponent("AppNewestItem");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "popular" }, _attrs))}><div class="container"><div class="popular_title fz-20 fw-700">Свежие объекты</div><div class="no_overflow"><div class="newest_prev prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M4.2 1L1 5M1 5L4.2 9M1 5H17" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="popular_wrapper newest_objects d-flex align-start mt-14"><div class="swiper-wrapper"><!--[-->`);
  ssrRenderList($setup.catalog, (item, key) => {
    _push(ssrRenderComponent(_component_AppNewestItem, {
      id: item.id,
      image: item.image,
      text: item.text,
      count: item.count,
      key
    }, null, _parent));
  });
  _push(`<!--]--></div></div><div class="newest_next next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div></div></section>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/components/AppNewObject.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const AppNewObject = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$d = {
  components: { AppNewestItem },
  setup() {
    const catalog = ref([
      {
        id: 1,
        image: "/assets/images/object_1.png",
        text: "Layan Verde",
        count: 37
      },
      {
        id: 2,
        image: "/assets/images/object_2.png",
        text: "Atrium Andaman City",
        count: 37
      },
      {
        id: 3,
        image: "/assets/images/object_3.png",
        text: "Ayana heights seaview residence",
        count: 37
      },
      {
        id: 4,
        image: "/assets/images/object_1.png",
        text: "Sunshine Beach Resort & Residences",
        count: 37
      },
      {
        id: 5,
        image: "/assets/images/object_2.png",
        text: "Layan Verde",
        count: 37
      },
      {
        id: 6,
        image: "/assets/images/object_3.png",
        text: "Layan Verde",
        count: 37
      }
    ]);
    onMounted(() => {
      new Swiper(".cheaper_objects", {
        direction: "horizontal",
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 12,
        navigation: {
          nextEl: ".cheaper_next",
          prevEl: ".cheaper_prev"
        },
        breakpoints: {
          1040: {
            slidesPerView: 3
          },
          815: {
            slidesPerView: 2.4
          },
          700: {
            slidesPerView: 2.1
          },
          580: {
            slidesPerView: 1.9
          },
          445: {
            slidesPerView: 1.4
          },
          400: {
            slidesPerView: 1.2
          },
          230: {
            slidesPerView: 1.1
          }
        }
      });
    });
    return { catalog };
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppNewestItem = resolveComponent("AppNewestItem");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "popular" }, _attrs))}><div class="container"><div class="popular_title fz-20 fw-700">Самые дешевые виллы</div><div class="no_overflow"><div class="prev cheaper_prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M4.2 1L1 5M1 5L4.2 9M1 5H17" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="popular_wrapper cheaper_objects d-flex align-start mt-14"><div class="swiper-wrapper"><!--[-->`);
  ssrRenderList($setup.catalog, (item, key) => {
    _push(ssrRenderComponent(_component_AppNewestItem, {
      id: item.id,
      image: item.image,
      text: item.text,
      count: item.count,
      key
    }, null, _parent));
  });
  _push(`<!--]--></div></div><div class="next cheaper_next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div></div></section>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/components/AppCheaperObject.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const AppCheaperObject = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$c = {
  components: { AppNewestItem },
  setup() {
    const catalog = ref([
      {
        id: 1,
        image: "/assets/images/object_1.png",
        text: "Layan Verde",
        count: 37
      },
      {
        id: 2,
        image: "/assets/images/object_2.png",
        text: "Atrium Andaman City",
        count: 37
      },
      {
        id: 3,
        image: "/assets/images/object_3.png",
        text: "Ayana heights seaview residence",
        count: 37
      },
      {
        id: 4,
        image: "/assets/images/object_1.png",
        text: "Sunshine Beach Resort & Residences",
        count: 37
      },
      {
        id: 5,
        image: "/assets/images/object_2.png",
        text: "Layan Verde",
        count: 37
      },
      {
        id: 6,
        image: "/assets/images/object_3.png",
        text: "Layan Verde",
        count: 37
      }
    ]);
    onMounted(() => {
      new Swiper(".expensive_objects", {
        direction: "horizontal",
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 12,
        navigation: {
          nextEl: ".expensive_next",
          prevEl: ".expensive_prev"
        },
        breakpoints: {
          1040: {
            slidesPerView: 3
          },
          815: {
            slidesPerView: 2.4
          },
          700: {
            slidesPerView: 2.1
          },
          580: {
            slidesPerView: 1.9
          },
          445: {
            slidesPerView: 1.4
          },
          400: {
            slidesPerView: 1.2
          },
          230: {
            slidesPerView: 1.1
          }
        }
      });
    });
    return { catalog };
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppNewestItem = resolveComponent("AppNewestItem");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "popular" }, _attrs))}><div class="container"><div class="popular_title fz-20 fw-700">Самые дорогие виллы</div><div class="no_overflow"><div class="prev expensive_prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M4.2 1L1 5M1 5L4.2 9M1 5H17" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="popular_wrapper expensive_objects d-flex align-start mt-14"><div class="swiper-wrapper"><!--[-->`);
  ssrRenderList($setup.catalog, (item, key) => {
    _push(ssrRenderComponent(_component_AppNewestItem, {
      id: item.id,
      image: item.image,
      text: item.text,
      count: item.count,
      key
    }, null, _parent));
  });
  _push(`<!--]--></div></div><div class="next expensive_next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div></div></section>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/components/AppExpensiveObject.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const AppExpensiveObject = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$b = {
  components: { AppNewestItem },
  setup() {
    onMounted(() => {
      new Swiper(".step_swiper", {
        direction: "horizontal",
        slidesPerView: 3,
        spaceBetween: 8,
        breakpoints: {
          1040: {
            slidesPerView: 3
          },
          815: {
            slidesPerView: 2.4
          },
          700: {
            slidesPerView: 2.1
          },
          580: {
            slidesPerView: 1.9
          },
          445: {
            slidesPerView: 1.4
          },
          400: {
            slidesPerView: 1.2
          },
          230: {
            slidesPerView: 1.1
          }
        }
      });
    });
    return {};
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "steps" }, _attrs))}><div class="container"><div class="popular_title fz-20 fw-700 mb-0">Этапы нашей работы</div><div class="subtitle fz-16 fw-400">Полное сопровождение</div><div class="no_overflow"><div class="step_swiper"><div class="swiper-wrapper"><div class="swiper-slide"><div class="step_slide_wrapper"><div class="step_counter fz-20 fw-400"> 1 </div><div class="step_slide_title fz-20 fw-700"> Консультация </div><div class="step_slide_subtitle fz-15 fw-400"> Мы созваниваемся в zoom или можем написать телеграм, задаем Вам перечень вопросов в результате чего определяем потребности </div></div></div><div class="swiper-slide"><div class="step_slide_wrapper"><div class="step_counter fz-20 fw-400"> 2 </div><div class="step_slide_title fz-20 fw-700"> Консультация </div><div class="step_slide_subtitle fz-15 fw-400"> Мы созваниваемся в zoom или можем написать телеграм, задаем Вам перечень вопросов в результате чего определяем потребности </div></div></div><div class="swiper-slide"><div class="step_slide_wrapper"><div class="step_counter fz-20 fw-400"> 3 </div><div class="step_slide_title fz-20 fw-700"> Консультация </div><div class="step_slide_subtitle fz-15 fw-400"> Мы созваниваемся в zoom или можем написать телеграм, задаем Вам перечень вопросов в результате чего определяем потребности </div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/components/AppStepWork.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const AppStepWork = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$a = {
  components: { AppNewestItem },
  setup() {
    onMounted(() => {
      new Swiper(".invest_swiper", {
        direction: "horizontal",
        slidesPerView: 3,
        spaceBetween: 8,
        breakpoints: {
          1040: {
            slidesPerView: 3
          },
          815: {
            slidesPerView: 2.4
          },
          700: {
            slidesPerView: 2.1
          },
          580: {
            slidesPerView: 1.9
          },
          445: {
            slidesPerView: 1.4
          },
          400: {
            slidesPerView: 1.2
          },
          230: {
            slidesPerView: 1.1
          }
        }
      });
    });
    return {};
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container_without_space" }, _attrs))}><section class="invest"><div class="invest_wrapper"><div class="invest_title fz-28 fw-700 tac">Почему стоит инвестировать в недвижимость в Таиланде?</div><div class="invest_subtitle fz-16 fw-700 mt-8 tac"><strong>Недвижимость</strong> — самый безопасный актив</div><div class="no_overflow"><div class="invest_swiper"><div class="swiper-wrapper"><div class="swiper-slide"><div class="invest_slide_wrapper"><div class="invest_img"><img src="/assets/images/invest1.png"></div><div class="step_slide_title fz-20 fw-700"> Доход на сдачу в аренду от 10% </div><div class="step_slide_subtitle fz-15 fw-400"> Перепродажа <strong>от 30%</strong> годовых если заходить на пресейле </div></div></div><div class="swiper-slide"><div class="invest_slide_wrapper"><div class="invest_img"><img src="/assets/images/invest2.png"></div><div class="step_slide_title fz-20 fw-700"> Доход на сдачу в аренду от 10% </div><div class="step_slide_subtitle fz-15 fw-400"><strong>Сезон круглый год</strong> — это значит, что аренда в спросе всегда </div></div></div><div class="swiper-slide"><div class="invest_slide_wrapper"><div class="invest_img"><img src="/assets/images/invest3.png"></div><div class="step_slide_title fz-20 fw-700"> Доход на сдачу в аренду от 10% </div><div class="step_slide_subtitle fz-15 fw-400"> Мы созваниваемся в zoom или можем написать телеграм, задаем Вам перечень вопросов в результате чего определяем потребности </div></div></div></div></div></div></div></section></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/components/AppWhyInvest.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const AppWhyInvest = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$9 = {
  setup() {
    return {};
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "partners" }, _attrs))}><div class="container"><div class="partners_wrapper"><div class="partners_title tac fz-28 fw-700"> Наши партнеры </div><div class="partners_subtitle tac fz-16 fw-400"> Которые нам доверяют </div><div class="partners_box"><div class="partners_item"><img src="/assets/images/partners/partner1.png"></div><div class="partners_item"><img src="/assets/images/partners/partner2.png"></div><div class="partners_item"><img src="/assets/images/partners/partner3.png"></div><div class="partners_item"><img src="/assets/images/partners/partner4.png"></div><div class="partners_item"><img src="/assets/images/partners/partner5.png"></div><div class="partners_item"><img src="/assets/images/partners/partner6.png"></div><div class="partners_item"><img src="/assets/images/partners/partner7.png"></div><div class="partners_item"><img src="/assets/images/partners/partner8.png"></div><div class="partners_item"><img src="/assets/images/partners/partner9.png"></div></div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/components/AppOurPartners.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const AppOurPartners = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {
  setup() {
    const isActive = ref(0);
    function toggleTab(key) {
      isActive.value = key;
    }
    return {
      isActive,
      toggleTab
    };
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-22fdc667><div class="tabs d-flex align-center mt-14" data-v-22fdc667><div class="${ssrRenderClass([{ active: $setup.isActive == 0 }, "tabs_item transition fz-12 fw-700"])}" data-v-22fdc667> Покупка </div><div class="${ssrRenderClass([{ active: $setup.isActive == 1 }, "tabs_item transition fz-12 fw-700"])}" data-v-22fdc667> Аренда </div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/components/AppTypesSell.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const AppTypesSell = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-22fdc667"]]);
const _sfc_main$7 = {
  setup() {
    return {};
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container_without_space" }, _attrs))}><section class="consult"><div class="consult_title fz-28 fw-400"> Бесплатная юридическая консультация и <strong>полное сопровождение</strong></div><div class="consult_wrapper"><div class="consult_info"><div class="consult_info_main"><div class="consult_img"><img src="/assets/images/consult.png"></div><div class="consult_info_box"><div class="consult_name fz-20 fw-400"> Азанов Денис </div><div class="consult_position fz-15 fw-400"> Основатель и директор компании Weesdome </div></div></div><div class="consult_info_txt"><div class="consult_info_txt_title fz-20 fw-700 mb-8"> Агент по недвижимости </div><div class="consult_info_menu"><div class="consult_info_label fz-15 fw-700"> Ко мне за: </div><div class="consult_info_menu_list"><div class="consult_info_menu_item fz-15 fw-400">Продажей, арендой вилл и апартаментов</div><div class="consult_info_menu_item fz-15 fw-400">Выгодными инвестициями!</div></div></div></div></div><div class="consult_box"><div class="consult_box_menu"><div class="consult_box_item fz-20 fw-400"><div class="consult_box_label"><img src="/assets/images/check.svg"></div><div class="consult_box_title"><strong>15 лет</strong> опыта работы в сфере недвижимости </div></div><div class="consult_box_item fz-20 fw-400"><div class="consult_box_label"><img src="/assets/images/check.svg"></div><div class="consult_box_title"> Нашли дом мечты для <strong>более 10 000</strong> семей </div></div><div class="consult_box_item fz-20 fw-400"><div class="consult_box_label"><img src="/assets/images/check.svg"></div><div class="consult_box_title"> На связи с клиентами <strong>7 дней</strong> в неделю <strong>с 10:00 до 22:00</strong></div></div></div><div class="consult_btn fz-16 fw-600">Получить консультацию</div></div></div></section></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/components/AppConsult.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const AppConsult = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  components: { AppNewestItem },
  setup() {
    onMounted(() => {
      new Swiper(".news_swiper", {
        direction: "horizontal",
        slidesPerView: 3,
        spaceBetween: 8,
        breakpoints: {
          1040: {
            slidesPerView: 4
          },
          815: {
            slidesPerView: 3.4
          },
          700: {
            slidesPerView: 3.1
          },
          580: {
            slidesPerView: 2.9
          },
          445: {
            slidesPerView: 2.4
          },
          400: {
            slidesPerView: 2.3
          },
          230: {
            slidesPerView: 2.2
          }
        }
      });
    });
    return {};
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "popular" }, _attrs))}><div class="container"><div class="popular_title fz-20 fw-700 mb-0">Новости</div><div class="no_overflow"><div class="news_swiper"><div class="swiper-wrapper"><div class="swiper-slide"><div class="news_slide_wrapper"><div class="news_slide_img"><img src="/assets/images/news1.png"></div><div class="news_slide_container"><div class="news_slide_title fz-15 fw-400"> Таиланд пересматривает закон о налоге на недвижимость </div><div class="news_slide_box"><div class="news_slide_date fz-14 fw-400"> 23 июня 2024 г. </div><div class="news_slide_btn"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div></div></div></div><div class="swiper-slide"><div class="news_slide_wrapper"><div class="news_slide_img"><img src="/assets/images/news2.png"></div><div class="news_slide_container"><div class="news_slide_title fz-15 fw-400"> Таиланд анонсировал меры по привлечению иностранных талантов </div><div class="news_slide_box"><div class="news_slide_date fz-14 fw-400"> 21 июня 2024 г. </div><div class="news_slide_btn"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div></div></div></div><div class="swiper-slide"><div class="news_slide_wrapper"><div class="news_slide_img"><img src="/assets/images/news3.png"></div><div class="news_slide_container"><div class="news_slide_title fz-15 fw-400"> В Таиланде стали продавать меньше недвижимости. Это может помочь иностранцам </div><div class="news_slide_box"><div class="news_slide_date fz-14 fw-400"> 16 июня 2024 г. </div><div class="news_slide_btn"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/components/AppNews.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const AppNews = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  components: {
    SearchBar,
    AppTypesObject,
    AppPopular,
    AppWhyInvest,
    AppTypesSell,
    AppOurPartners,
    AppNewObject,
    AppStepWork,
    AppCheaperObject,
    AppExpensiveObject,
    AppConsult,
    AppNews
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppTypesSell = resolveComponent("AppTypesSell");
  const _component_SearchBar = resolveComponent("SearchBar");
  const _component_AppTypesObject = resolveComponent("AppTypesObject");
  const _component_AppPopular = resolveComponent("AppPopular");
  const _component_AppNewObject = resolveComponent("AppNewObject");
  const _component_AppCheaperObject = resolveComponent("AppCheaperObject");
  const _component_AppExpensiveObject = resolveComponent("AppExpensiveObject");
  const _component_AppOurServices = resolveComponent("AppOurServices");
  const _component_AppStepWork = resolveComponent("AppStepWork");
  const _component_AppWhyInvest = resolveComponent("AppWhyInvest");
  const _component_AppOurPartners = resolveComponent("AppOurPartners");
  const _component_AppConsult = resolveComponent("AppConsult");
  const _component_AppNews = resolveComponent("AppNews");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main_wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppTypesSell, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchBar, null, null, _parent));
  _push(ssrRenderComponent(_component_AppTypesObject, null, null, _parent));
  _push(ssrRenderComponent(_component_AppPopular, null, null, _parent));
  _push(`<div class="container_without_space"><div class="line"></div></div>`);
  _push(ssrRenderComponent(_component_AppNewObject, null, null, _parent));
  _push(`<div class="container_without_space"><div class="line"></div></div>`);
  _push(ssrRenderComponent(_component_AppCheaperObject, null, null, _parent));
  _push(`<div class="container_without_space"><div class="line"></div></div>`);
  _push(ssrRenderComponent(_component_AppExpensiveObject, null, null, _parent));
  _push(`<div class="container_without_space"><div class="line"></div></div>`);
  _push(ssrRenderComponent(_component_AppOurServices, null, null, _parent));
  _push(ssrRenderComponent(_component_AppStepWork, null, null, _parent));
  _push(ssrRenderComponent(_component_AppWhyInvest, null, null, _parent));
  _push(ssrRenderComponent(_component_AppOurPartners, null, null, _parent));
  _push(ssrRenderComponent(_component_AppConsult, null, null, _parent));
  _push(`<div class="container_without_space"><div class="line"></div></div>`);
  _push(ssrRenderComponent(_component_AppNews, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/News.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const News = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: News
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  components: {
    AppObject,
    Link,
    Head
  },
  props: {
    title: String
  },
  setup() {
    const range = ref({
      start: /* @__PURE__ */ new Date(),
      end: /* @__PURE__ */ new Date()
    });
    const disabledDates = ref([
      {
        start: null,
        end: new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() - 1))
      }
    ]);
    const attrs = ref([]);
    onMounted(() => {
      new Swiper(".catalog_swiper", {
        modules: [Pagination],
        direction: "horizontal",
        slidesPerView: 1,
        pagination: {
          el: ".catalog_pagination",
          type: "fraction",
          clickable: true
        }
      });
    });
    return {
      range,
      attrs,
      disabledDates
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_AppObject = resolveComponent("AppObject");
  const _component_VDatePicker = resolveComponent("VDatePicker");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
  _push(`<div class="main_wrapper_with_breadcrumbs"><div class="breadcrumbs d-flex align-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/",
    class: "breadcrumbs_item fz-14 fw-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Главная`);
      } else {
        return [
          createTextVNode("Главная")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="breadcrumbs_delimiter">/</div><div class="breadcrumbs_item fz-14 fw-600">Виллы</div><div class="breadcrumbs_delimiter">/</div><div class="breadcrumbs_item fz-14 fw-600">PROXIMA Phuket Villas</div></div><div class="main_wrapper"><div class="container"><div class="catalog_actions d-flex align-center justify-between"><div class="catalog_actions_box d-flex align-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/",
    class: "catalog_back"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none"${_scopeId}><g clip-path="url(#clip0_2029_519)"${_scopeId}><path d="M0.289062 10.6797C0.105469 10.5 0 10.2578 0 10C0 9.74219 0.105469 9.50001 0.289062 9.32032L7.16406 2.75782C7.53906 2.39844 8.13281 2.41407 8.48828 2.78907C8.84375 3.16407 8.83203 3.75782 8.45703 4.11329L3.27734 9.06251H16.5625C17.082 9.06251 17.5 9.48047 17.5 10C17.5 10.5195 17.082 10.9375 16.5625 10.9375H3.27734L8.46094 15.8828C8.83594 16.2422 8.84766 16.832 8.49219 17.207C8.13672 17.582 7.54297 17.5938 7.16797 17.2383L0.292969 10.6758L0.289062 10.6797Z" fill="black"${_scopeId}></path></g><defs${_scopeId}><clipPath id="clip0_2029_519"${_scopeId}><rect width="17.5" height="20" fill="white"${_scopeId}></rect></clipPath></defs></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "18",
            height: "20",
            viewBox: "0 0 18 20",
            fill: "none"
          }, [
            createVNode("g", { "clip-path": "url(#clip0_2029_519)" }, [
              createVNode("path", {
                d: "M0.289062 10.6797C0.105469 10.5 0 10.2578 0 10C0 9.74219 0.105469 9.50001 0.289062 9.32032L7.16406 2.75782C7.53906 2.39844 8.13281 2.41407 8.48828 2.78907C8.84375 3.16407 8.83203 3.75782 8.45703 4.11329L3.27734 9.06251H16.5625C17.082 9.06251 17.5 9.48047 17.5 10C17.5 10.5195 17.082 10.9375 16.5625 10.9375H3.27734L8.46094 15.8828C8.83594 16.2422 8.84766 16.832 8.49219 17.207C8.13672 17.582 7.54297 17.5938 7.16797 17.2383L0.292969 10.6758L0.289062 10.6797Z",
                fill: "black"
              })
            ]),
            createVNode("defs", null, [
              createVNode("clipPath", { id: "clip0_2029_519" }, [
                createVNode("rect", {
                  width: "17.5",
                  height: "20",
                  fill: "white"
                })
              ])
            ])
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="catalog_title fz-24 fw-700">Тип А-1/2</div></div><div class="catalog_actions_box d-flex align-center"><div class="catalog_share"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none"><path d="M6.59 12.51L13.42 16.49M13.41 5.51L6.59 9.49M19 4C19 5.65685 17.6569 7 16 7C14.3431 7 13 5.65685 13 4C13 2.34315 14.3431 1 16 1C17.6569 1 19 2.34315 19 4ZM7 11C7 12.6569 5.65685 14 4 14C2.34315 14 1 12.6569 1 11C1 9.34315 2.34315 8 4 8C5.65685 8 7 9.34315 7 11ZM19 18C19 19.6569 17.6569 21 16 21C14.3431 21 13 19.6569 13 18C13 16.3431 14.3431 15 16 15C17.6569 15 19 16.3431 19 18Z" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_heart d-flex align-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z" fill="#FF005C" stroke="#FF005C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> 19 </div></div></div></div><div class="container_without_space"><div class="catalog_swiper"><div class="swiper-wrapper"><div class="swiper-slide"><img src="/assets/images/object_1.png"></div><div class="swiper-slide"><img src="/assets/images/object_2.png"></div><div class="swiper-slide"><img src="/assets/images/object_3.png"></div></div><div class="swiper-pagination catalog_pagination fz-14 fw-600"></div></div></div><div class="container_without_space"><div class="catalog_object"><div class="catalog_object_title fz-20 fw-700 d-flex align-center justify-between"> Бангато (Пхукет, Таиланд) <div class="fz-16 fw-600 nowrap"> 10,000,000 <span class="tt fz-16 fw-400">THB</span></div></div></div><div class="catalog_about"><div class="catalog_about_account d-flex align-center"><div class="catalog_account_img"><img src="/assets/catalog_account.png"></div><div class="catalog_account_info"><div class="catalog_account_info_name fz-16 fw-700">Metrics</div><div class="catalog_account_info_subtitle fz-14 fw-400"> 7 лет в сфере </div></div></div><div class="catalog_about_descr fz-12 fw-400"> Расположение нашей виллы тихое, и вы можете наслаждаться прекрасным видом на горы с балкона главной спальни.Вы можете насладиться естественным прохладным бризом на берегу моря.Семейное барбекю у частного бассейнаМного места для приготовления пищи с достаточным количеством еды для целой семьи. Кухня также оборудована духовкой, где вы сможете приготовить вкусный ужин для своей семьи и друзей в любое время.Район имеет круглосуточную охрану, и вы можете найти их, независимо от ваших проблем. Это обеспечивает вам удобство и безопасность вашей поездки. </div></div><div class="catalog_preference"><div class="catalog_preference_item"><div class="catalog_preference_img" style="${ssrRenderStyle({ "margin-right": "8px" })}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.8 19.2L16 11L19.5 7.5C21 6 21.5 4 21 3C20 2.5 18 3 16.5 4.5L13 8L4.8 6.2C4.3 6.1 3.9 6.3 3.7 6.7L3.4 7.2C3.2 7.7 3.3 8.2 3.7 8.5L9 12L7 15H4L3 16L6 18L8 21L9 20V17L12 15L15.5 20.3C15.8 20.7 16.3 20.8 16.8 20.6L17.3 20.4C17.7 20.1 17.9 19.7 17.8 19.2Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_preference_content"><div class="catalog_preference_title fz-20 fw-500">Аэропорт</div><div class="catalog_preference_subtitle fz-14 fw-400"> Дорога от аэропорта занимает 20 минут </div></div></div><div class="catalog_preference_item"><div class="catalog_preference_img" style="${ssrRenderStyle({ "margin-right": "8px" })}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 3V9.3C4 10.29 4.8 11.1 5.77778 11.1H9.33333C9.80483 11.1 10.257 10.9104 10.5904 10.5728C10.9238 10.2352 11.1111 9.77739 11.1111 9.3V3M7.55556 3V21M20 14.7V3C18.8213 3 17.6908 3.47411 16.8573 4.31802C16.0238 5.16193 15.5556 6.30653 15.5556 7.5V12.9C15.5556 13.89 16.3556 14.7 17.3333 14.7H20ZM20 14.7V21" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_preference_content"><div class="catalog_preference_title fz-20 fw-500">Питание</div><div class="catalog_preference_subtitle fz-14 fw-400"> Бесплатный завтрак из обширного меню </div></div></div><div class="catalog_preference_item"><div class="catalog_preference_img" style="${ssrRenderStyle({ "margin-right": "8px" })}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 3.99995H16C16.5304 3.99995 17.0391 4.21067 17.4142 4.58574C17.7893 4.96081 18 5.46952 18 5.99995V20M2 20H5M5 20L11.758 21.689C11.9054 21.7257 12.0592 21.7284 12.2078 21.6968C12.3564 21.6653 12.4958 21.6003 12.6155 21.5068C12.7352 21.4133 12.8321 21.2938 12.8987 21.1573C12.9653 21.0207 13 20.8708 13 20.719V4.56195C12.9998 4.25813 12.9304 3.95735 12.797 3.68437C12.6637 3.41138 12.4699 3.17237 12.2303 2.98547C11.9908 2.79857 11.7118 2.66869 11.4146 2.60571C11.1174 2.54272 10.8098 2.54828 10.515 2.62195L6.515 3.62195C6.08232 3.73011 5.69821 3.97978 5.42371 4.33128C5.1492 4.68279 5.00007 5.11596 5 5.56195V20ZM13 20H22M10 12V12.01" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_preference_content"><div class="catalog_preference_title fz-20 fw-500">Прибытие</div><div class="catalog_preference_subtitle fz-14 fw-400"> Вы заселитесь самостоятельно, ключи в мини-сейфе </div></div></div><div class="catalog_preference_item"><div class="catalog_preference_img" style="${ssrRenderStyle({ "margin-right": "8px" })}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22 21H21C19.549 21 18.278 20.141 18 19C17.722 20.141 16.451 21 15 21C13.549 21 12.278 20.141 12 19C11.722 20.141 10.451 21 9 21C7.549 21 6.278 20.141 6 19C5.722 20.141 4.451 21 3 21H2M19 3L18.735 3.088C17.415 3.528 16.755 3.748 16.378 4.272C16.001 4.796 16 5.492 16 6.883V17M11 3L10.735 3.088C9.415 3.528 8.755 3.748 8.378 4.272C8.001 4.796 8 5.492 8 6.883V17M8 7H16M8 11H16M8 15H16" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_preference_content"><div class="catalog_preference_title fz-20 fw-500">Бассейн</div><div class="catalog_preference_subtitle fz-14 fw-400"> Круглосуточный доступ к личному бассейну </div></div></div><div class="catalog_preference_item"><div class="catalog_preference_img" style="${ssrRenderStyle({ "margin-right": "8px" })}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 9.99996M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0202 11.67 21.94C7.5 20.5 4 18 4 13V5.99996C4 5.73474 4.10536 5.48039 4.29289 5.29285C4.48043 5.10532 4.73478 4.99996 5 4.99996C7 4.99996 9.5 3.79996 11.24 2.27996C11.4519 2.09896 11.7214 1.99951 12 1.99951C12.2786 1.99951 12.5481 2.09896 12.76 2.27996C14.51 3.80996 17 4.99996 19 4.99996C19.2652 4.99996 19.5196 5.10532 19.7071 5.29285C19.8946 5.48039 20 5.73474 20 5.99996V13Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_preference_content"><div class="catalog_preference_title fz-20 fw-500"> Безопасность </div><div class="catalog_preference_subtitle fz-14 fw-400"> Закрытая территория, круглосуточная охрана </div></div></div><div class="catalog_preference_item"><div class="catalog_preference_img" style="${ssrRenderStyle({ "margin-right": "8px" })}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 20.9999H20.3077C19.5732 20.9999 18.8689 20.7072 18.3496 20.1862C17.8302 19.6652 17.5385 18.9586 17.5385 18.2218C17.5385 18.9586 17.2467 19.6652 16.7274 20.1862C16.208 20.7072 15.5037 20.9999 14.7692 20.9999C14.0348 20.9999 13.3304 20.7072 12.8111 20.1862C12.2918 19.6652 12 18.9586 12 18.2218C12 18.9586 11.7082 19.6652 11.1889 20.1862C10.6696 20.7072 9.96522 20.9999 9.23077 20.9999C8.49632 20.9999 7.79196 20.7072 7.27263 20.1862C6.7533 19.6652 6.46154 18.9586 6.46154 18.2218C6.46154 18.9586 6.16978 19.6652 5.65045 20.1862C5.13112 20.7072 4.42675 20.9999 3.69231 20.9999H3M16.1538 15.4437C15.4407 14.5739 14.5444 13.8734 13.5294 13.3925C12.5143 12.9115 11.4057 12.6621 10.2831 12.6621C9.16049 12.6621 8.05184 12.9115 7.03677 13.3925C6.02171 13.8734 5.12542 14.5739 4.41231 15.4437" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.3078 12.7353C11.3909 9.59603 12.3463 6.7346 14.4232 5.70671M10.2832 3.06753C11.1808 2.89023 12.1119 3.06511 12.8847 3.55614C13.6576 4.04716 14.2132 4.8169 14.437 5.70671" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.4905 6.2211C18.8533 5.53078 17.9867 5.09762 17.0536 5.00299C16.1204 4.90835 15.185 5.15875 14.4229 5.70715" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.3418 7.19327C9.88436 6.39138 10.6886 5.80429 11.616 5.53302C12.5435 5.26175 13.5362 5.32327 14.4233 5.707C15.3132 5.92532 16.0836 6.48205 16.5719 7.2596C17.0602 8.03716 17.2281 8.97466 17.0403 9.87412" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_preference_content"><div class="catalog_preference_title fz-20 fw-500">Пляж</div><div class="catalog_preference_subtitle fz-14 fw-400"> Собственный выход на пляж </div></div></div><div class="catalog_preference_item"><div class="catalog_preference_img" style="${ssrRenderStyle({ "margin-right": "8px" })}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 13C3.46957 13 2.96086 13.2107 2.58579 13.5858C2.21071 13.9609 2 14.4696 2 15V16C2 16.2652 2.10536 16.5196 2.29289 16.7071C2.48043 16.8946 2.73478 17 3 17H21C21.2652 17 21.5196 16.8946 21.7071 16.7071C21.8946 16.5196 22 16.2652 22 16V15C22 14.4696 21.7893 13.9609 21.4142 13.5858C21.0391 13.2107 20.5304 13 20 13M4 13H20M4 13C4 10.8783 4.84285 8.84344 6.34315 7.34315C7.84344 5.84285 9.87827 5 12 5M20 13C20 10.8783 19.1571 8.84344 17.6569 7.34315C16.1566 5.84285 14.1217 5 12 5M12 5V2M10 2H14" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_preference_content"><div class="catalog_preference_title fz-20 fw-500"> Обслуживание номеров </div><div class="catalog_preference_subtitle fz-14 fw-400"> Включает доставку еды и напитков в номер, а также услуги по уборке </div></div></div></div></div><div class="container_without_space"><div class="line"></div></div>`);
  _push(ssrRenderComponent(_component_AppObject, {
    title: "Планировка",
    swiper: "swiper_plan"
  }, null, _parent));
  _push(`<div class="container_without_space"><div class="line"></div></div>`);
  _push(ssrRenderComponent(_component_AppObject, {
    title: "Где вы будете спать",
    swiper: "swiper_sleep"
  }, null, _parent));
  _push(`<div class="container_without_space"><div class="line"></div><div class="catalog_comfort"><div class="catalog_comfort_title fz-20 fw-700">Удобства</div><div class="catalog_comfort_wrapper"><div class="catalog_comfort_item"><div class="catalog_comfort_img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4H5.77778C5.30628 4 4.8541 4.1873 4.5207 4.5207C4.1873 4.8541 4 5.30628 4 5.77778V18.2222C4 18.6937 4.1873 19.1459 4.5207 19.4793C4.8541 19.8127 5.30628 20 5.77778 20H18.2222C18.6937 20 19.1459 19.8127 19.4793 19.4793C19.8127 19.1459 20 18.6937 20 18.2222V12M13.7778 14.6667H9.33333M9.33333 14.6667V10.2222M9.33333 14.6667L20 4M15.5556 4H20M20 4V8.44444" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_comfort_title fz-15 fw-500">320 м²</div></div><div class="catalog_comfort_item"><div class="catalog_comfort_img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 19.9999H12.01M2 8.8199C4.75011 6.36013 8.31034 5.00024 12 5.00024C15.6897 5.00024 19.2499 6.36013 22 8.8199M5 12.8589C6.86929 11.0266 9.38247 10.0003 12 10.0003C14.6175 10.0003 17.1307 11.0266 19 12.8589M8.5 16.4289C9.43464 15.5128 10.6912 14.9996 12 14.9996C13.3088 14.9996 14.5654 15.5128 15.5 16.4289" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_comfort_title fz-15 fw-500">Wi-Fi</div></div><div class="catalog_comfort_item"><div class="catalog_comfort_img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 4V20M2 8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10V20M2 17H22M6 8V17" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_comfort_title fz-15 fw-500">3 спальни</div></div><div class="catalog_comfort_item"><div class="catalog_comfort_img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 21H17M4 3H20C21.1046 3 22 3.89543 22 5V15C22 16.1046 21.1046 17 20 17H4C2.89543 17 2 16.1046 2 15V5C2 3.89543 2.89543 3 4 3Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_comfort_title fz-15 fw-500">Телевизор</div></div><div class="catalog_comfort_item"><div class="catalog_comfort_img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 6L6.5 3.5C6.24356 3.21069 5.88531 3.03157 5.5 3C4.683 3 4 3.683 4 4.5V17C4 17.5304 4.21071 18.0391 4.58579 18.4142C4.96086 18.7893 5.46957 19 6 19H18C18.5304 19 19.0391 18.7893 19.4142 18.4142C19.7893 18.0391 20 17.5304 20 17V12M10 5L8 7M2 12H22M7 19V21M17 19V21" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_comfort_title fz-15 fw-500">3 ванны</div></div><div class="catalog_comfort_item"><div class="catalog_comfort_img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 6H6M17 6H17.01M12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8M12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8M12 18C12.663 18 13.2989 17.7366 13.7678 17.2678C14.2366 16.7989 14.5 16.163 14.5 15.5C14.5 14.837 14.2366 14.2011 13.7678 13.7322C13.2989 13.2634 12.663 13 12 13C11.337 13 10.7011 12.7366 10.2322 12.2678C9.76339 11.7989 9.5 11.163 9.5 10.5C9.5 9.83696 9.76339 9.20107 10.2322 8.73223C10.7011 8.26339 11.337 8 12 8M5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_comfort_title fz-15 fw-500"> Стиральная машина </div></div><div class="catalog_comfort_item"><div class="catalog_comfort_img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 3V9.3C4 10.29 4.8 11.1 5.77778 11.1H9.33333C9.80483 11.1 10.257 10.9104 10.5904 10.5728C10.9238 10.2352 11.1111 9.77739 11.1111 9.3V3M7.55556 3V21M20 14.7V3C18.8213 3 17.6908 3.47411 16.8573 4.31802C16.0238 5.16193 15.5556 6.30653 15.5556 7.5V12.9C15.5556 13.89 16.3556 14.7 17.3333 14.7H20ZM20 14.7V21" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_comfort_title fz-15 fw-500">Кухня</div></div><div class="catalog_comfort_item"><div class="catalog_comfort_img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22 21H21C19.549 21 18.278 20.141 18 19C17.722 20.141 16.451 21 15 21C13.549 21 12.278 20.141 12 19C11.722 20.141 10.451 21 9 21C7.549 21 6.278 20.141 6 19C5.722 20.141 4.451 21 3 21H2M19 3L18.735 3.088C17.415 3.528 16.755 3.748 16.378 4.272C16.001 4.796 16 5.492 16 6.883V17M11 3L10.735 3.088C9.415 3.528 8.755 3.748 8.378 4.272C8.001 4.796 8 5.492 8 6.883V17M8 7H16M8 11H16M8 15H16" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_comfort_title fz-15 fw-500">Бассейн</div></div><div class="catalog_comfort_item"><div class="catalog_comfort_img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 17V7H13C13.7956 7 14.5587 7.31607 15.1213 7.87868C15.6839 8.44129 16 9.20435 16 10C16 10.7956 15.6839 11.5587 15.1213 12.1213C14.5587 12.6839 13.7956 13 13 13H9M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="catalog_comfort_title fz-15 fw-500">Парковка</div></div></div><div class="catalog_comfort_btn fz-16 fw-500"> Показать все удобства </div></div><div class="container_without_space"><div class="line"></div></div><div class="object_calendar">`);
  _push(ssrRenderComponent(_component_VDatePicker, {
    modelValue: $setup.range,
    "onUpdate:modelValue": ($event) => $setup.range = $event,
    modelModifiers: { range: true },
    mode: "date",
    locale: "ru-RU",
    attributes: $setup.attrs,
    "disabled-dates": $setup.disabledDates,
    columns: 2,
    style: { "width": "100%" }
  }, null, _parent));
  _push(`</div></div></div></div><!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Object.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Object$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Object$1
}, Symbol.toStringTag, { value: "Module" }));
library.add(fas);
const _sfc_main$2 = {
  components: {
    Link
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}><div class="container"><div class="header_wrapper">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/",
    class: "header_logo"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/assets/logo.svg" alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: "/assets/logo.svg",
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="header_actions d-flex align-center"><div class="header_actions_heart header_action_box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none"><path d="M12 19.0066C17.25 15.4591 22.5 11.5066 22.5 6.25662C22.502 5.56663 22.3675 4.88305 22.1044 4.2452C21.8413 3.60734 21.4546 3.0278 20.9667 2.5399C20.4788 2.052 19.8993 1.66536 19.2614 1.40222C18.6236 1.13909 17.94 1.00464 17.25 1.00662C15.9 1.00662 14.565 1.51662 13.5375 2.54412L12 4.08162L10.4625 2.54412C9.976 2.05477 9.39754 1.66642 8.76041 1.40142C8.12328 1.13642 7.44005 1 6.75 1C6.05996 1 5.37673 1.13642 4.7396 1.40142C4.10247 1.66642 3.52401 2.05477 3.0375 2.54412C2.54934 3.03118 2.16222 3.60988 1.89837 4.24698C1.63452 4.88409 1.49914 5.56704 1.5 6.25662C1.5 11.5066 6.75 15.4591 12 19.0066Z" stroke="white" stroke-width="1.5"></path></svg></div><div class="header_actions_personal header_action_box"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none"><rect y="1" width="16" height="2" rx="1" fill="white"></rect><rect y="7" width="16" height="2" rx="1" fill="white"></rect><rect y="13" width="10" height="2" rx="1" fill="white"></rect></svg></div></div></div></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/layout_components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppHeader = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    Link
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="container"><div class="footer_wrapper">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/",
    class: "footer_logo"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/assets/images/footer_logo.svg" alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: "/assets/images/footer_logo.svg",
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="footer_subtitle fz-16 fw-300"> Live Your Dream </div><div class="footer_contact fz-16 fw-400 tac"> 44/34 Moo 1, Thep Krassatri Rd., Si Sunthon Thalang Distrikt, Phuket 83110 </div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/layout_components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    AppHeader,
    AppFooter
  },
  setup() {
    return {};
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppHeader = resolveComponent("AppHeader");
  const _component_AppFooter = resolveComponent("AppFooter");
  _push(`<section${ssrRenderAttrs(mergeProps({ className: "content" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<main className="main">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2) Object.prototype.hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(this, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: n }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2) t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2) void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, f = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2) for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
    var f2 = a2[s2], c2 = i2[f2];
    "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r2.push(c2));
  }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (u(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3) void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, n2, i2) {
  if (0 === t4.length) return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r2) return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
    return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
  });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1) r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2) return e2;
  if ("object" != typeof r2) {
    if (u(e2)) e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(r2);
  var o2 = e2;
  return u(e2) && !u(r2) && (o2 = s(e2, n2)), u(e2) && u(r2) ? (r2.forEach(function(r3, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r3 && "object" == typeof r3 ? e2[o3] = t2(u2, r3, n2) : e2.push(r3);
    } else e2[o3] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, o3) {
    var u2 = r2[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, b = Date.prototype.toISOString, g = o.default, m = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f.encode, encodeValuesOnly: false, format: g, formatter: o.formatters[g], indices: false, serializeDate: function(t4) {
  return b.call(t4);
}, skipNulls: false, strictNullHandling: false }, v = function t3(e2, r2, n2, o2, i2, u2, a2, s2, c2, l2, y2, b2, g2, v2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2) return u2 && !g2 ? u2(r2, m.encoder, v2, "key", y2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f.isBuffer(w2)) {
    if (u2) {
      var $2 = g2 ? r2 : u2(r2, m.encoder, v2, "key", y2);
      if ("comma" === n2 && g2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2) E2 += (0 === S2 ? "" : ",") + b2(u2(O2[S2], m.encoder, v2, "value", y2));
        return [b2($2) + "=" + E2];
      }
      return [b2($2) + "=" + b2(u2(w2, m.encoder, v2, "value", y2))];
    }
    return [b2(r2) + "=" + b2(String(w2))];
  }
  var R2, x2 = [];
  if (void 0 === w2) return x2;
  if ("comma" === n2 && p(w2)) R2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2)) R2 = a2;
  else {
    var N2 = Object.keys(w2);
    R2 = s2 ? N2.sort(s2) : N2;
  }
  for (var T2 = 0; T2 < R2.length; ++T2) {
    var k2 = R2[T2], C = "object" == typeof k2 && void 0 !== k2.value ? k2.value : w2[k2];
    if (!i2 || null !== C) {
      var _ = p(w2) ? "function" == typeof n2 ? n2(r2, k2) : r2 : r2 + (c2 ? "." + k2 : "[" + k2 + "]");
      d(x2, t3(C, _, n2, o2, i2, u2, a2, s2, c2, l2, y2, b2, g2, v2));
    }
  }
  return x2;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, S = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && j.call(Object.prototype, a2) && !r2.allowPrototypes) return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes) return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : E(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, R = function(t4, e2) {
  var r2 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4) return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < o3.length; ++r3) 0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3) if (r3 !== i3) {
      var a3, s3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f.maybeMap(E(c2.slice(p2 + 1), e3), function(t6) {
        return e3.decoder(t6, $.decoder, u3, "value");
      })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f.combine(n3[a3], s3) : s3;
    }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = S(a2, n2[a2], r2, "string" == typeof t4);
    o2 = f.merge(o2, s2, r2);
  }
  return f.compact(o2);
};
class x {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    if (!this.definition.methods.includes("GET")) return false;
    const e2 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i2 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i2})?` : `${e3}${i2}`;
    }).replace(/^\w+:\/\//, ""), [r2, n2] = t4.replace(/^\w+:\/\//, "").split("?"), o2 = new RegExp(`^${e2}/?$`).exec(decodeURI(r2));
    if (o2) {
      for (const t5 in o2.groups) o2.groups[t5] = "string" == typeof o2.groups[t5] ? decodeURIComponent(o2.groups[t5]) : o2.groups[t5];
      return { params: o2.groups, query: R(n2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r2, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r2])) throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (i2 = t4[r2]) ? i2 : "")) throw new Error(`Ziggy error: '${r2}' parameter '${t4[r2]}' does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class N extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, n2 = t4, i2 = function(t5) {
        if (!t5) return m;
        if (null != t5.encoder && "function" != typeof t5.encoder) throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || m.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format)) throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var n3 = o.formatters[r3], i3 = m.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : m.addQueryPrefix, allowDots: void 0 === t5.allowDots ? m.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : m.charsetSentinel, delimiter: void 0 === t5.delimiter ? m.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : m.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : m.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : m.encodeValuesOnly, filter: i3, format: r3, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : m.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : m.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : m.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2) return "";
      var a2 = l[e3 && e3.arrayFormat in l ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(n2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var f2 = r2[s2];
        i2.skipNulls && null === n2[f2] || d(u2, v(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.m();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new x(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  m() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2) return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2) return a2;
    const s2 = new x(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r2).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4)) return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r3]) => Array.isArray(r3) && Array.isArray(e3[t5]) ? r3.every((r4) => e3[t5].includes(r4)) : "object" == typeof r3 && "object" == typeof e3[t5] && null !== r3 && null !== e3[t5] ? c2(r3, e3[t5]) : e3[t5] == r3);
    return c2(r2, f2);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t4) {
    return Object.keys(this.t.routes).includes(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.v(r2), this.j(e2, r2));
  }
  v(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  j(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2)) return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function T(t4, e2, r2, n2) {
  const o2 = new N(t4, e2, r2, n2);
  return t4 ? o2.toString() : o2;
}
const k = { install(t4, e2) {
  const r2 = (t5, r3, n2, o2 = e2) => T(t5, r3, n2, o2);
  parseInt(t4.version) > 2 ? (t4.config.globalProperties.route = r2, t4.provide("route", r2)) : t4.mixin({ methods: { route: r2 } });
} };
if (typeof window !== "undefined") {
  const { InertiaProgress } = require("@inertiajs/progress");
  InertiaProgress.init({
    delay: 250,
    color: "#7843E9",
    includeCSS: true,
    showSpinner: false
  });
}
const pinia = createPinia();
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Catalog.vue": __vite_glob_0_0, "./Pages/Index.vue": __vite_glob_0_1, "./Pages/News.vue": __vite_glob_0_2, "./Pages/Object.vue": __vite_glob_0_3 });
      let page2 = pages[`./Pages/${name}.vue`];
      page2.default.layout = page2.default.layout || Layout;
      return page2;
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h$1(App, props)
      }).use(plugin).use(pinia).use(vClickOutside).component("font-awesome-icon", FontAwesomeIcon).use(k, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      });
    }
  })
);
