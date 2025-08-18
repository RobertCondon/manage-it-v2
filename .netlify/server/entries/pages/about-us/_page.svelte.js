import { c as create_ssr_component, b as compute_rest_props, g as getContext, d as spread, e as add_attribute, f as escape, h as escape_attribute_value, i as escape_object, v as validate_component } from "../../../chunks/ssr.js";
import { twMerge } from "tailwind-merge";
const BriefcaseOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "briefcase outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"></path></svg>`} `;
});
const LightbulbOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "lightbulb outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"></path></svg>`} `;
});
const StarOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "star outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"></path></svg>`} `;
});
const UsersGroupOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "users group outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg>`} `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 min-h-screen"> <section class="relative w-full py-16 md:py-24 lg:py-32 px-[10vw] overflow-hidden" data-svelte-h="svelte-wfqnrc"> <div class="absolute inset-0 overflow-hidden"><div class="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-3xl"></div> <div class="absolute top-1/2 -left-20 w-60 h-60 bg-gradient-to-br from-teal-200/20 to-green-300/10 rounded-full blur-3xl"></div></div> <div class="container px-4 md:px-6 relative z-10"><div class="grid gap-8 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px] items-center"><div class="flex flex-col justify-center space-y-6"> <div class="inline-flex items-center w-fit px-3 py-1 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-medium"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        Your Trusted IT Partner</div> <div class="space-y-4"><h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">About <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">ManageIT</span></h1> <p class="max-w-[600px] text-gray-700 text-lg md:text-xl leading-relaxed">Welcome to ManageIT, where we make technology simple and stress-free. In today&#39;s fast-paced digital world, businesses are more reliant on IT than ever before.</p> <p class="max-w-[600px] text-gray-600 md:text-lg leading-relaxed">We understand the frustration that often accompanies technology issues, which is why our focus is on clear communication and personalized service. Our tight-knit, locally-based team prides itself on understanding your unique needs and providing innovative, creative solutions tailored just for you.</p></div>  <div class="flex flex-wrap gap-8 pt-4"><div class="text-center"><div class="text-3xl font-bold text-green-700">20+</div> <div class="text-sm text-gray-600">Years Experience</div></div> <div class="text-center"><div class="text-3xl font-bold text-emerald-700">24/7</div> <div class="text-sm text-gray-600">Support Available</div></div> <div class="text-center"><div class="text-3xl font-bold text-teal-700">100+</div> <div class="text-sm text-gray-600">Happy Clients</div></div></div></div> <div class="relative"><div class="absolute inset-0 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-3xl blur-2xl transform rotate-6"></div> <img src="/about-us/main.svg" width="550" height="310" alt="About Us" class="relative mx-auto aspect-video overflow-hidden rounded-3xl object-cover object-center sm:w-full lg:order-last shadow-2xl border border-green-100/50"></div></div></div></section>  <section class="relative w-full py-16 md:py-24 lg:py-32 px-[10vw] bg-white"><div class="container px-4 md:px-6"> <div class="text-center space-y-4 mb-16" data-svelte-h="svelte-1nxzztd"><div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-medium"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Our Foundation</div> <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Built on <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Excellence</span></h2> <p class="max-w-3xl mx-auto text-gray-600 text-lg">Since 2004, we&#39;ve been dedicated to transforming how businesses interact with technology, 
                    making it simple, reliable, and stress-free.</p></div> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4"> <div class="group relative bg-gradient-to-br from-white to-green-50/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100/50"><div class="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 rounded-3xl transition-all duration-300"></div> <div class="relative"><div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">${validate_component(BriefcaseOutline, "BriefcaseOutline").$$render($$result, { class: "w-8 h-8 text-white" }, {}, {})}</div> <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors" data-svelte-h="svelte-u7cmdo">Who We Are</h3> <p class="text-gray-600 leading-relaxed" data-svelte-h="svelte-pmn5lv">ManageIT was established on April 2, 2004, by Tony Condon, a seasoned IT professional
                            with extensive experience in large corporate service providers in New Zealand and the
                            UK. Our mantra is simple: Turning complex problems into simple solutions.</p></div></div>  <div class="group relative bg-gradient-to-br from-white to-teal-50/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-100/50"><div class="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-green-500/0 group-hover:from-teal-500/5 group-hover:to-green-500/5 rounded-3xl transition-all duration-300"></div> <div class="relative"><div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">${validate_component(LightbulbOutline, "LightbulbOutline").$$render($$result, { class: "w-8 h-8 text-white" }, {}, {})}</div> <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors" data-svelte-h="svelte-hhmxc4">What We Do</h3> <p class="text-gray-600 leading-relaxed" data-svelte-h="svelte-1ri0qqf">As a Managed Service Provider (MSP), we offer proactive services and solutions to optimize 
                            your business&#39;s IT infrastructure, actively monitoring your systems 24/7 to keep problems 
                            at bay, all for a fixed fee.</p></div></div>  <div class="group relative bg-gradient-to-br from-white to-emerald-50/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100/50"><div class="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 rounded-3xl transition-all duration-300"></div> <div class="relative"><div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">${validate_component(UsersGroupOutline, "UsersGroupOutline").$$render($$result, { class: "w-8 h-8 text-white" }, {}, {})}</div> <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors" data-svelte-h="svelte-yfjybr">Our Approach</h3> <p class="text-gray-600 leading-relaxed" data-svelte-h="svelte-145njj9">Our approach is people-driven, ensuring long-term business relationships built on trust
                            and mutual understanding. We offer options that you can easily understand and choose from, 
                            keeping you in control.</p></div></div>  <div class="group relative bg-gradient-to-br from-white to-green-50/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100/50"><div class="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 rounded-3xl transition-all duration-300"></div> <div class="relative"><div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">${validate_component(StarOutline, "StarOutline").$$render($$result, { class: "w-8 h-8 text-white" }, {}, {})}</div> <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors" data-svelte-h="svelte-z6x8nm">Experience the Difference</h3> <p class="text-gray-600 leading-relaxed" data-svelte-h="svelte-dldpvv">Our commitment to clear communication, personalized service, and technical excellence ensures
                            that you receive the best support tailored to your needs. Let us handle your IT challenges, 
                            so you can concentrate on growing your business.</p></div></div></div></div></section>  <section class="relative w-full py-16 md:py-24 lg:py-32 px-[10vw] bg-gradient-to-br from-green-50 to-emerald-50" data-svelte-h="svelte-1cj8vs8"><div class="container px-4 md:px-6"><div class="grid gap-12 lg:grid-cols-2 items-center"><div class="space-y-8"><div class="space-y-4"><div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-medium"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path></svg>
                            Our Mission</div> <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Turning Complex <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Problems</span><br>
                            Into Simple <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Solutions</span></h2></div> <div class="space-y-6"><div class="flex items-start space-x-4"><div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1"><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div> <div><h4 class="text-lg font-semibold text-gray-900 mb-2">Clear Communication</h4> <p class="text-gray-600">We believe in transparent, jargon-free communication that keeps you informed every step of the way.</p></div></div> <div class="flex items-start space-x-4"><div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mt-1"><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div> <div><h4 class="text-lg font-semibold text-gray-900 mb-2">Personalized Service</h4> <p class="text-gray-600">Every business is unique, and our solutions are tailored to fit your specific needs and goals.</p></div></div> <div class="flex items-start space-x-4"><div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-green-600 rounded-full flex items-center justify-center mt-1"><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div> <div><h4 class="text-lg font-semibold text-gray-900 mb-2">Local Expertise</h4> <p class="text-gray-600">Our tight-knit, locally-based team understands the New Zealand business landscape and your challenges.</p></div></div></div></div> <div class="relative"><div class="absolute inset-0 bg-gradient-to-br from-green-200/30 to-emerald-300/30 rounded-3xl blur-2xl transform -rotate-6"></div> <div class="relative bg-white rounded-3xl p-8 shadow-2xl border border-green-100/50"><div class="text-center space-y-6"><div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl"><svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <div><h3 class="text-2xl font-bold text-gray-900 mb-2">Tony Condon</h3> <p class="text-green-600 font-medium mb-4">Founder &amp; IT Director</p> <p class="text-gray-600 leading-relaxed">&quot;My vision was simple: bring enterprise-level IT services to small and medium businesses at a fair price. 
                                    Technology should empower your business, not complicate it.&quot;</p></div></div></div></div></div></div></section></div>`;
});
export {
  Page as default
};
