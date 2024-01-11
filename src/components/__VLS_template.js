import { NSelect, NDivider, NGrid, NGi, NLayout, NLayoutFooter, NLayoutHeader, NLayoutContent, NCard, NButton, NIcon, NTabPane, NTabs, NForm, NFormItem, NInput, NFlex, NPopconfirm } from 'naive-ui';
import { AddCircleOutline } from '@vicons/ionicons5';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, tId, course_will_add, course_options_not_teaches, AddTeachesCourse, getCourseInformation, course_will_delete, course_options_teaches, DeleteTeachesCourse, course_select, formValue } from "./Teacher.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'main-page'?: boolean; } &
{ 'page-header'?: boolean; } &
{ 'page-footer'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'NLayout', typeof __VLS_localComponents, "NLayout", "nLayout", "n-layout"> &
__VLS_WithComponent<'NLayoutHeader', typeof __VLS_localComponents, "NLayoutHeader", "nLayoutHeader", "n-layout-header"> &
__VLS_WithComponent<'NLayoutContent', typeof __VLS_localComponents, "NLayoutContent", "NLayoutContent", "NLayoutContent"> &
__VLS_WithComponent<'NTabs', typeof __VLS_localComponents, "NTabs", "nTabs", "n-tabs"> &
__VLS_WithComponent<'NTabPane', typeof __VLS_localComponents, "NTabPane", "nTabPane", "n-tab-pane"> &
__VLS_WithComponent<'NFlex', typeof __VLS_localComponents, "NFlex", "nFlex", "n-flex"> &
__VLS_WithComponent<'NSelect', typeof __VLS_localComponents, "NSelect", "nSelect", "n-select"> &
__VLS_WithComponent<'NPopconfirm', typeof __VLS_localComponents, "NPopconfirm", "nPopconfirm", "n-popconfirm"> &
__VLS_WithComponent<'NButton', typeof __VLS_localComponents, "NButton", "nButton", "n-button"> &
__VLS_WithComponent<'NIcon', typeof __VLS_localComponents, "NIcon", "nIcon", "n-icon"> &
__VLS_WithComponent<'AddCircleOutline', typeof __VLS_localComponents, "AddCircleOutline", "AddCircleOutline", "AddCircleOutline"> &
__VLS_WithComponent<'NCard', typeof __VLS_localComponents, "NCard", "nCard", "n-card"> &
__VLS_WithComponent<'NDivider', typeof __VLS_localComponents, "NDivider", "nDivider", "n-divider"> &
__VLS_WithComponent<'trash', typeof __VLS_localComponents, "Trash", "trash", "trash"> &
__VLS_WithComponent<'NGrid', typeof __VLS_localComponents, "NGrid", "nGrid", "n-grid"> &
__VLS_WithComponent<'NGi', typeof __VLS_localComponents, "NGi", "nGi", "n-gi"> &
__VLS_WithComponent<'NForm', typeof __VLS_localComponents, "NForm", "nForm", "n-form"> &
__VLS_WithComponent<'NFormItem', typeof __VLS_localComponents, "NFormItem", "nFormItem", "n-form-item"> &
__VLS_WithComponent<'NInput', typeof __VLS_localComponents, "NInput", "nInput", "n-input"> &
__VLS_WithComponent<'NLayoutFooter', typeof __VLS_localComponents, "NLayoutFooter", "nLayoutFooter", "n-layout-footer">;
__VLS_components.NLayout; __VLS_components.NLayout; __VLS_components.nLayout; __VLS_components.nLayout; __VLS_components["n-layout"]; __VLS_components["n-layout"];
// @ts-ignore
[NLayout, NLayout,];
__VLS_components.NLayoutHeader; __VLS_components.NLayoutHeader; __VLS_components.nLayoutHeader; __VLS_components.nLayoutHeader; __VLS_components["n-layout-header"]; __VLS_components["n-layout-header"];
// @ts-ignore
[NLayoutHeader, NLayoutHeader,];
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_components.NLayoutContent; __VLS_components.NLayoutContent;
// @ts-ignore
[NLayoutContent, NLayoutContent,];
__VLS_components.NTabs; __VLS_components.NTabs; __VLS_components.NTabs; __VLS_components.NTabs; __VLS_components.nTabs; __VLS_components.nTabs; __VLS_components.nTabs; __VLS_components.nTabs; __VLS_components["n-tabs"]; __VLS_components["n-tabs"]; __VLS_components["n-tabs"]; __VLS_components["n-tabs"];
// @ts-ignore
[NTabs, NTabs, NTabs, NTabs,];
__VLS_components.NTabPane; __VLS_components.NTabPane; __VLS_components.NTabPane; __VLS_components.NTabPane; __VLS_components.NTabPane; __VLS_components.NTabPane; __VLS_components.NTabPane; __VLS_components.NTabPane; __VLS_components.nTabPane; __VLS_components.nTabPane; __VLS_components.nTabPane; __VLS_components.nTabPane; __VLS_components.nTabPane; __VLS_components.nTabPane; __VLS_components.nTabPane; __VLS_components.nTabPane; __VLS_components["n-tab-pane"]; __VLS_components["n-tab-pane"]; __VLS_components["n-tab-pane"]; __VLS_components["n-tab-pane"]; __VLS_components["n-tab-pane"]; __VLS_components["n-tab-pane"]; __VLS_components["n-tab-pane"]; __VLS_components["n-tab-pane"];
// @ts-ignore
[NTabPane, NTabPane, NTabPane, NTabPane, NTabPane, NTabPane, NTabPane, NTabPane,];
__VLS_components.NFlex; __VLS_components.NFlex; __VLS_components.NFlex; __VLS_components.NFlex; __VLS_components.NFlex; __VLS_components.NFlex; __VLS_components.nFlex; __VLS_components.nFlex; __VLS_components.nFlex; __VLS_components.nFlex; __VLS_components.nFlex; __VLS_components.nFlex; __VLS_components["n-flex"]; __VLS_components["n-flex"]; __VLS_components["n-flex"]; __VLS_components["n-flex"]; __VLS_components["n-flex"]; __VLS_components["n-flex"];
// @ts-ignore
[NFlex, NFlex, NFlex, NFlex, NFlex, NFlex,];
__VLS_components.NSelect; __VLS_components.NSelect; __VLS_components.NSelect; __VLS_components.NSelect; __VLS_components.nSelect; __VLS_components.nSelect; __VLS_components.nSelect; __VLS_components.nSelect; __VLS_components["n-select"]; __VLS_components["n-select"]; __VLS_components["n-select"]; __VLS_components["n-select"];
// @ts-ignore
[NSelect, NSelect, NSelect, NSelect,];
__VLS_components.NPopconfirm; __VLS_components.NPopconfirm; __VLS_components.NPopconfirm; __VLS_components.NPopconfirm; __VLS_components.NPopconfirm; __VLS_components.NPopconfirm; __VLS_components.nPopconfirm; __VLS_components.nPopconfirm; __VLS_components.nPopconfirm; __VLS_components.nPopconfirm; __VLS_components.nPopconfirm; __VLS_components.nPopconfirm; __VLS_components["n-popconfirm"]; __VLS_components["n-popconfirm"]; __VLS_components["n-popconfirm"]; __VLS_components["n-popconfirm"]; __VLS_components["n-popconfirm"]; __VLS_components["n-popconfirm"];
// @ts-ignore
[NPopconfirm, NPopconfirm, NPopconfirm, NPopconfirm, NPopconfirm, NPopconfirm,];
__VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template;
__VLS_components.NButton; __VLS_components.NButton; __VLS_components.NButton; __VLS_components.NButton; __VLS_components.NButton; __VLS_components.NButton; __VLS_components.NButton; __VLS_components.NButton; __VLS_components.nButton; __VLS_components.nButton; __VLS_components.nButton; __VLS_components.nButton; __VLS_components.nButton; __VLS_components.nButton; __VLS_components.nButton; __VLS_components.nButton; __VLS_components["n-button"]; __VLS_components["n-button"]; __VLS_components["n-button"]; __VLS_components["n-button"]; __VLS_components["n-button"]; __VLS_components["n-button"]; __VLS_components["n-button"]; __VLS_components["n-button"];
// @ts-ignore
[NButton, NButton, NButton, NButton, NButton, NButton, NButton, NButton,];
__VLS_components.NIcon; __VLS_components.NIcon; __VLS_components.NIcon; __VLS_components.NIcon; __VLS_components.NIcon; __VLS_components.NIcon; __VLS_components.nIcon; __VLS_components.nIcon; __VLS_components.nIcon; __VLS_components.nIcon; __VLS_components.nIcon; __VLS_components.nIcon; __VLS_components["n-icon"]; __VLS_components["n-icon"]; __VLS_components["n-icon"]; __VLS_components["n-icon"]; __VLS_components["n-icon"]; __VLS_components["n-icon"];
// @ts-ignore
[NIcon, NIcon, NIcon, NIcon, NIcon, NIcon,];
__VLS_components.AddCircleOutline;
// @ts-ignore
[AddCircleOutline,];
__VLS_components.NCard; __VLS_components.NCard; __VLS_components.NCard; __VLS_components.NCard; __VLS_components.NCard; __VLS_components.NCard; __VLS_components.nCard; __VLS_components.nCard; __VLS_components.nCard; __VLS_components.nCard; __VLS_components.nCard; __VLS_components.nCard; __VLS_components["n-card"]; __VLS_components["n-card"]; __VLS_components["n-card"]; __VLS_components["n-card"]; __VLS_components["n-card"]; __VLS_components["n-card"];
// @ts-ignore
[NCard, NCard, NCard, NCard, NCard, NCard,];
__VLS_intrinsicElements.br; __VLS_intrinsicElements.br; __VLS_intrinsicElements.br;
__VLS_components.NDivider; __VLS_components.nDivider; __VLS_components["n-divider"];
// @ts-ignore
[NDivider,];
__VLS_components.Trash; __VLS_components.Trash; __VLS_components.trash; __VLS_components.trash;
// @ts-ignore
[trash, trash,];
__VLS_components.NGrid; __VLS_components.NGrid; __VLS_components.nGrid; __VLS_components.nGrid; __VLS_components["n-grid"]; __VLS_components["n-grid"];
// @ts-ignore
[NGrid, NGrid,];
__VLS_components.NGi; __VLS_components.NGi; __VLS_components.NGi; __VLS_components.NGi; __VLS_components.nGi; __VLS_components.nGi; __VLS_components.nGi; __VLS_components.nGi; __VLS_components["n-gi"]; __VLS_components["n-gi"]; __VLS_components["n-gi"]; __VLS_components["n-gi"];
// @ts-ignore
[NGi, NGi, NGi, NGi,];
__VLS_components.NForm; __VLS_components.NForm; __VLS_components.nForm; __VLS_components.nForm; __VLS_components["n-form"]; __VLS_components["n-form"];
// @ts-ignore
[NForm, NForm,];
__VLS_components.NFormItem; __VLS_components.NFormItem; __VLS_components.NFormItem; __VLS_components.NFormItem; __VLS_components.NFormItem; __VLS_components.NFormItem; __VLS_components.NFormItem; __VLS_components.NFormItem; __VLS_components.nFormItem; __VLS_components.nFormItem; __VLS_components.nFormItem; __VLS_components.nFormItem; __VLS_components.nFormItem; __VLS_components.nFormItem; __VLS_components.nFormItem; __VLS_components.nFormItem; __VLS_components["n-form-item"]; __VLS_components["n-form-item"]; __VLS_components["n-form-item"]; __VLS_components["n-form-item"]; __VLS_components["n-form-item"]; __VLS_components["n-form-item"]; __VLS_components["n-form-item"]; __VLS_components["n-form-item"];
// @ts-ignore
[NFormItem, NFormItem, NFormItem, NFormItem, NFormItem, NFormItem, NFormItem, NFormItem,];
__VLS_components.NInput; __VLS_components.NInput; __VLS_components.NInput; __VLS_components.nInput; __VLS_components.nInput; __VLS_components.nInput; __VLS_components["n-input"]; __VLS_components["n-input"]; __VLS_components["n-input"];
// @ts-ignore
[NInput, NInput, NInput,];
__VLS_components.NLayoutFooter; __VLS_components.NLayoutFooter; __VLS_components.nLayoutFooter; __VLS_components.nLayoutFooter; __VLS_components["n-layout-footer"]; __VLS_components["n-layout-footer"];
// @ts-ignore
[NLayoutFooter, NLayoutFooter,];
{
const __VLS_0 = ({} as 'NLayout' extends keyof typeof __VLS_ctx ? { 'NLayout': typeof __VLS_ctx.NLayout; } : 'nLayout' extends keyof typeof __VLS_ctx ? { 'NLayout': typeof __VLS_ctx.nLayout; } : 'n-layout' extends keyof typeof __VLS_ctx ? { 'NLayout': (typeof __VLS_ctx)["n-layout"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NLayout;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, }));
({} as { NLayout: typeof __VLS_0; }).NLayout;
({} as { NLayout: typeof __VLS_0; }).NLayout;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'NLayoutHeader' extends keyof typeof __VLS_ctx ? { 'NLayoutHeader': typeof __VLS_ctx.NLayoutHeader; } : 'nLayoutHeader' extends keyof typeof __VLS_ctx ? { 'NLayoutHeader': typeof __VLS_ctx.nLayoutHeader; } : 'n-layout-header' extends keyof typeof __VLS_ctx ? { 'NLayoutHeader': (typeof __VLS_ctx)["n-layout-header"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NLayoutHeader;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, class: ("page-header"), }));
({} as { NLayoutHeader: typeof __VLS_5; }).NLayoutHeader;
({} as { NLayoutHeader: typeof __VLS_5; }).NLayoutHeader;
const __VLS_7 = __VLS_6({ ...{}, class: ("page-header"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("page-header"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["span"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
(__VLS_ctx.tId);
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
{
const __VLS_15 = ({} as 'NLayoutContent' extends keyof typeof __VLS_ctx ? { 'NLayoutContent': typeof __VLS_ctx.NLayoutContent; } : typeof __VLS_resolvedLocalAndGlobalComponents).NLayoutContent;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, class: ("main-page"), }));
({} as { NLayoutContent: typeof __VLS_15; }).NLayoutContent;
({} as { NLayoutContent: typeof __VLS_15; }).NLayoutContent;
const __VLS_17 = __VLS_16({ ...{}, class: ("main-page"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("main-page"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = ({} as 'NTabs' extends keyof typeof __VLS_ctx ? { 'NTabs': typeof __VLS_ctx.NTabs; } : 'nTabs' extends keyof typeof __VLS_ctx ? { 'NTabs': typeof __VLS_ctx.nTabs; } : 'n-tabs' extends keyof typeof __VLS_ctx ? { 'NTabs': (typeof __VLS_ctx)["n-tabs"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NTabs;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, class: ("card-tabs"), defaultValue: ("Student"), size: ("large"), animated: (true), justifyContent: ("space-evenly"), type: ("line"), }));
({} as { NTabs: typeof __VLS_20; }).NTabs;
({} as { NTabs: typeof __VLS_20; }).NTabs;
const __VLS_22 = __VLS_21({ ...{}, class: ("card-tabs"), defaultValue: ("Student"), size: ("large"), animated: (true), justifyContent: ("space-evenly"), type: ("line"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("card-tabs"), defaultValue: ("Student"), size: ("large"), animated: (true), justifyContent: ("space-evenly"), type: ("line"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = ({} as 'NTabPane' extends keyof typeof __VLS_ctx ? { 'NTabPane': typeof __VLS_ctx.NTabPane; } : 'nTabPane' extends keyof typeof __VLS_ctx ? { 'NTabPane': typeof __VLS_ctx.nTabPane; } : 'n-tab-pane' extends keyof typeof __VLS_ctx ? { 'NTabPane': (typeof __VLS_ctx)["n-tab-pane"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NTabPane;
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, name: ("Student"), label: ("選課"), }));
({} as { NTabPane: typeof __VLS_25; }).NTabPane;
({} as { NTabPane: typeof __VLS_25; }).NTabPane;
const __VLS_27 = __VLS_26({ ...{}, name: ("Student"), label: ("選課"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, name: ("Student"), label: ("選課"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = ({} as 'NFlex' extends keyof typeof __VLS_ctx ? { 'NFlex': typeof __VLS_ctx.NFlex; } : 'nFlex' extends keyof typeof __VLS_ctx ? { 'NFlex': typeof __VLS_ctx.nFlex; } : 'n-flex' extends keyof typeof __VLS_ctx ? { 'NFlex': (typeof __VLS_ctx)["n-flex"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NFlex;
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, }));
({} as { NFlex: typeof __VLS_30; }).NFlex;
({} as { NFlex: typeof __VLS_30; }).NFlex;
const __VLS_32 = __VLS_31({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
const __VLS_35 = ({} as 'NSelect' extends keyof typeof __VLS_ctx ? { 'NSelect': typeof __VLS_ctx.NSelect; } : 'nSelect' extends keyof typeof __VLS_ctx ? { 'NSelect': typeof __VLS_ctx.nSelect; } : 'n-select' extends keyof typeof __VLS_ctx ? { 'NSelect': (typeof __VLS_ctx)["n-select"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NSelect;
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, value: ((__VLS_ctx.course_will_add)), placeholder: ("選擇課程"), options: ((__VLS_ctx.course_options_not_teaches)), style: ({}), filterable: (true), }));
({} as { NSelect: typeof __VLS_35; }).NSelect;
const __VLS_37 = __VLS_36({ ...{}, value: ((__VLS_ctx.course_will_add)), placeholder: ("選擇課程"), options: ((__VLS_ctx.course_options_not_teaches)), style: ({}), filterable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, value: ((__VLS_ctx.course_will_add)), placeholder: ("選擇課程"), options: ((__VLS_ctx.course_options_not_teaches)), style: ({}), filterable: (true), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
}
{
const __VLS_40 = ({} as 'NPopconfirm' extends keyof typeof __VLS_ctx ? { 'NPopconfirm': typeof __VLS_ctx.NPopconfirm; } : 'nPopconfirm' extends keyof typeof __VLS_ctx ? { 'NPopconfirm': typeof __VLS_ctx.nPopconfirm; } : 'n-popconfirm' extends keyof typeof __VLS_ctx ? { 'NPopconfirm': (typeof __VLS_ctx)["n-popconfirm"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NPopconfirm;
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ onPositiveClick: {} as any, }, }));
({} as { NPopconfirm: typeof __VLS_40; }).NPopconfirm;
({} as { NPopconfirm: typeof __VLS_40; }).NPopconfirm;
const __VLS_42 = __VLS_41({ ...{ onPositiveClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{ onPositiveClick: {} as any, }, });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
let __VLS_45 = { 'positive-click': __VLS_pickEvent(__VLS_44['positive-click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_42>).onPositiveClick) };
__VLS_45 = { "positive-click": (__VLS_ctx.AddTeachesCourse) };
{
const __VLS_46 = __VLS_intrinsicElements["template"];
const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
const __VLS_48 = __VLS_47({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_43.slots!).trigger;
{
const __VLS_49 = ({} as 'NButton' extends keyof typeof __VLS_ctx ? { 'NButton': typeof __VLS_ctx.NButton; } : 'nButton' extends keyof typeof __VLS_ctx ? { 'NButton': typeof __VLS_ctx.nButton; } : 'n-button' extends keyof typeof __VLS_ctx ? { 'NButton': (typeof __VLS_ctx)["n-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NButton;
const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ ...{}, color: ("#22D9E4"), }));
({} as { NButton: typeof __VLS_49; }).NButton;
({} as { NButton: typeof __VLS_49; }).NButton;
const __VLS_51 = __VLS_50({ ...{}, color: ("#22D9E4"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_49, typeof __VLS_51> & Record<string, unknown>) => void)({ ...{}, color: ("#22D9E4"), });
const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51)!;
let __VLS_53!: __VLS_NormalizeEmits<typeof __VLS_52.emit>;
{
const __VLS_54 = __VLS_intrinsicElements["template"];
const __VLS_55 = __VLS_elementAsFunctionalComponent(__VLS_54);
const __VLS_56 = __VLS_55({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_55));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_54, typeof __VLS_56> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_52.slots!).icon;
{
const __VLS_57 = ({} as 'NIcon' extends keyof typeof __VLS_ctx ? { 'NIcon': typeof __VLS_ctx.NIcon; } : 'nIcon' extends keyof typeof __VLS_ctx ? { 'NIcon': typeof __VLS_ctx.nIcon; } : 'n-icon' extends keyof typeof __VLS_ctx ? { 'NIcon': (typeof __VLS_ctx)["n-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NIcon;
const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ ...{}, }));
({} as { NIcon: typeof __VLS_57; }).NIcon;
({} as { NIcon: typeof __VLS_57; }).NIcon;
const __VLS_59 = __VLS_58({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_58));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_57, typeof __VLS_59> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59)!;
let __VLS_61!: __VLS_NormalizeEmits<typeof __VLS_60.emit>;
{
const __VLS_62 = ({} as 'AddCircleOutline' extends keyof typeof __VLS_ctx ? { 'AddCircleOutline': typeof __VLS_ctx.AddCircleOutline; } : typeof __VLS_resolvedLocalAndGlobalComponents).AddCircleOutline;
const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ ...{}, }));
({} as { AddCircleOutline: typeof __VLS_62; }).AddCircleOutline;
const __VLS_64 = __VLS_63({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_63));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_62, typeof __VLS_64> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64)!;
let __VLS_66!: __VLS_NormalizeEmits<typeof __VLS_65.emit>;
}
(__VLS_60.slots!).default;
}
// @ts-ignore
[tId, course_will_add, course_options_not_teaches, course_will_add, course_options_not_teaches, course_will_add, course_options_not_teaches, AddTeachesCourse,];
}
}
}
}
}
(__VLS_ctx.course_will_add);
}
(__VLS_33.slots!).default;
}
{
const __VLS_67 = ({} as 'NCard' extends keyof typeof __VLS_ctx ? { 'NCard': typeof __VLS_ctx.NCard; } : 'nCard' extends keyof typeof __VLS_ctx ? { 'NCard': typeof __VLS_ctx.nCard; } : 'n-card' extends keyof typeof __VLS_ctx ? { 'NCard': (typeof __VLS_ctx)["n-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NCard;
const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ ...{}, style: ({}), bordered: (true), }));
({} as { NCard: typeof __VLS_67; }).NCard;
({} as { NCard: typeof __VLS_67; }).NCard;
const __VLS_69 = __VLS_68({ ...{}, style: ({}), bordered: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_67, typeof __VLS_69> & Record<string, unknown>) => void)({ ...{}, style: ({}), bordered: (true), });
const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69)!;
let __VLS_71!: __VLS_NormalizeEmits<typeof __VLS_70.emit>;
{
const __VLS_72 = __VLS_intrinsicElements["span"];
const __VLS_73 = __VLS_elementAsFunctionalComponent(__VLS_72);
const __VLS_74 = __VLS_73({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_73));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_72, typeof __VLS_74> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74)!;
let __VLS_76!: __VLS_NormalizeEmits<typeof __VLS_75.emit>;
(__VLS_ctx.getCourseInformation(__VLS_ctx.course_will_add).name);
(__VLS_75.slots!).default;
}
{
const __VLS_77 = __VLS_intrinsicElements["br"];
const __VLS_78 = __VLS_elementAsFunctionalComponent(__VLS_77);
const __VLS_79 = __VLS_78({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_78));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_77, typeof __VLS_79> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79)!;
let __VLS_81!: __VLS_NormalizeEmits<typeof __VLS_80.emit>;
}
{
const __VLS_82 = __VLS_intrinsicElements["span"];
const __VLS_83 = __VLS_elementAsFunctionalComponent(__VLS_82);
const __VLS_84 = __VLS_83({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_83));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_82, typeof __VLS_84> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84)!;
let __VLS_86!: __VLS_NormalizeEmits<typeof __VLS_85.emit>;
(__VLS_ctx.getCourseInformation(__VLS_ctx.course_will_add).cCredit);
(__VLS_85.slots!).default;
}
(__VLS_70.slots!).default;
}
{
const __VLS_87 = ({} as 'NDivider' extends keyof typeof __VLS_ctx ? { 'NDivider': typeof __VLS_ctx.NDivider; } : 'nDivider' extends keyof typeof __VLS_ctx ? { 'NDivider': typeof __VLS_ctx.nDivider; } : 'n-divider' extends keyof typeof __VLS_ctx ? { 'NDivider': (typeof __VLS_ctx)["n-divider"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NDivider;
const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({ ...{}, }));
({} as { NDivider: typeof __VLS_87; }).NDivider;
const __VLS_89 = __VLS_88({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_88));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_87, typeof __VLS_89> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89)!;
let __VLS_91!: __VLS_NormalizeEmits<typeof __VLS_90.emit>;
}
{
const __VLS_92 = ({} as 'NFlex' extends keyof typeof __VLS_ctx ? { 'NFlex': typeof __VLS_ctx.NFlex; } : 'nFlex' extends keyof typeof __VLS_ctx ? { 'NFlex': typeof __VLS_ctx.nFlex; } : 'n-flex' extends keyof typeof __VLS_ctx ? { 'NFlex': (typeof __VLS_ctx)["n-flex"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NFlex;
const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ ...{}, }));
({} as { NFlex: typeof __VLS_92; }).NFlex;
({} as { NFlex: typeof __VLS_92; }).NFlex;
const __VLS_94 = __VLS_93({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_93));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_92, typeof __VLS_94> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94)!;
let __VLS_96!: __VLS_NormalizeEmits<typeof __VLS_95.emit>;
{
const __VLS_97 = ({} as 'NSelect' extends keyof typeof __VLS_ctx ? { 'NSelect': typeof __VLS_ctx.NSelect; } : 'nSelect' extends keyof typeof __VLS_ctx ? { 'NSelect': typeof __VLS_ctx.nSelect; } : 'n-select' extends keyof typeof __VLS_ctx ? { 'NSelect': (typeof __VLS_ctx)["n-select"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NSelect;
const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ ...{}, value: ((__VLS_ctx.course_will_delete)), placeholder: ("選擇課程"), options: ((__VLS_ctx.course_options_teaches)), style: ({}), filterable: (true), }));
({} as { NSelect: typeof __VLS_97; }).NSelect;
const __VLS_99 = __VLS_98({ ...{}, value: ((__VLS_ctx.course_will_delete)), placeholder: ("選擇課程"), options: ((__VLS_ctx.course_options_teaches)), style: ({}), filterable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_97, typeof __VLS_99> & Record<string, unknown>) => void)({ ...{}, value: ((__VLS_ctx.course_will_delete)), placeholder: ("選擇課程"), options: ((__VLS_ctx.course_options_teaches)), style: ({}), filterable: (true), });
const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99)!;
let __VLS_101!: __VLS_NormalizeEmits<typeof __VLS_100.emit>;
}
{
const __VLS_102 = ({} as 'NPopconfirm' extends keyof typeof __VLS_ctx ? { 'NPopconfirm': typeof __VLS_ctx.NPopconfirm; } : 'nPopconfirm' extends keyof typeof __VLS_ctx ? { 'NPopconfirm': typeof __VLS_ctx.nPopconfirm; } : 'n-popconfirm' extends keyof typeof __VLS_ctx ? { 'NPopconfirm': (typeof __VLS_ctx)["n-popconfirm"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NPopconfirm;
const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ ...{ onPositiveClick: {} as any, }, }));
({} as { NPopconfirm: typeof __VLS_102; }).NPopconfirm;
({} as { NPopconfirm: typeof __VLS_102; }).NPopconfirm;
const __VLS_104 = __VLS_103({ ...{ onPositiveClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_103));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_102, typeof __VLS_104> & Record<string, unknown>) => void)({ ...{ onPositiveClick: {} as any, }, });
const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104)!;
let __VLS_106!: __VLS_NormalizeEmits<typeof __VLS_105.emit>;
let __VLS_107 = { 'positive-click': __VLS_pickEvent(__VLS_106['positive-click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_103, typeof __VLS_104>).onPositiveClick) };
__VLS_107 = { "positive-click": (__VLS_ctx.DeleteTeachesCourse) };
{
const __VLS_108 = __VLS_intrinsicElements["template"];
const __VLS_109 = __VLS_elementAsFunctionalComponent(__VLS_108);
const __VLS_110 = __VLS_109({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_109));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_108, typeof __VLS_110> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_105.slots!).trigger;
{
const __VLS_111 = ({} as 'NButton' extends keyof typeof __VLS_ctx ? { 'NButton': typeof __VLS_ctx.NButton; } : 'nButton' extends keyof typeof __VLS_ctx ? { 'NButton': typeof __VLS_ctx.nButton; } : 'n-button' extends keyof typeof __VLS_ctx ? { 'NButton': (typeof __VLS_ctx)["n-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NButton;
const __VLS_112 = __VLS_asFunctionalComponent(__VLS_111, new __VLS_111({ ...{}, color: ("#ff69b4"), }));
({} as { NButton: typeof __VLS_111; }).NButton;
({} as { NButton: typeof __VLS_111; }).NButton;
const __VLS_113 = __VLS_112({ ...{}, color: ("#ff69b4"), }, ...__VLS_functionalComponentArgsRest(__VLS_112));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_111, typeof __VLS_113> & Record<string, unknown>) => void)({ ...{}, color: ("#ff69b4"), });
const __VLS_114 = __VLS_pickFunctionalComponentCtx(__VLS_111, __VLS_113)!;
let __VLS_115!: __VLS_NormalizeEmits<typeof __VLS_114.emit>;
{
const __VLS_116 = __VLS_intrinsicElements["template"];
const __VLS_117 = __VLS_elementAsFunctionalComponent(__VLS_116);
const __VLS_118 = __VLS_117({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_117));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_116, typeof __VLS_118> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_114.slots!).icon;
{
const __VLS_119 = ({} as 'NIcon' extends keyof typeof __VLS_ctx ? { 'NIcon': typeof __VLS_ctx.NIcon; } : 'nIcon' extends keyof typeof __VLS_ctx ? { 'NIcon': typeof __VLS_ctx.nIcon; } : 'n-icon' extends keyof typeof __VLS_ctx ? { 'NIcon': (typeof __VLS_ctx)["n-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NIcon;
const __VLS_120 = __VLS_asFunctionalComponent(__VLS_119, new __VLS_119({ ...{}, }));
({} as { NIcon: typeof __VLS_119; }).NIcon;
({} as { NIcon: typeof __VLS_119; }).NIcon;
const __VLS_121 = __VLS_120({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_120));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_119, typeof __VLS_121> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_122 = __VLS_pickFunctionalComponentCtx(__VLS_119, __VLS_121)!;
let __VLS_123!: __VLS_NormalizeEmits<typeof __VLS_122.emit>;
{
const __VLS_124 = ({} as 'Trash' extends keyof typeof __VLS_ctx ? { 'trash': typeof __VLS_ctx.Trash; } : 'trash' extends keyof typeof __VLS_ctx ? { 'trash': typeof __VLS_ctx.trash; } : typeof __VLS_resolvedLocalAndGlobalComponents).trash;
const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({ ...{}, }));
({} as { trash: typeof __VLS_124; }).trash;
const __VLS_126 = __VLS_125({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_125));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_124, typeof __VLS_126> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_127 = __VLS_pickFunctionalComponentCtx(__VLS_124, __VLS_126)!;
let __VLS_128!: __VLS_NormalizeEmits<typeof __VLS_127.emit>;
}
(__VLS_122.slots!).default;
}
// @ts-ignore
[course_will_add, getCourseInformation, course_will_add, getCourseInformation, course_will_add, course_will_delete, course_options_teaches, course_will_delete, course_options_teaches, course_will_delete, course_options_teaches, DeleteTeachesCourse,];
}
}
}
}
}
(__VLS_ctx.course_will_delete);
}
(__VLS_95.slots!).default;
}
{
const __VLS_129 = ({} as 'NCard' extends keyof typeof __VLS_ctx ? { 'NCard': typeof __VLS_ctx.NCard; } : 'nCard' extends keyof typeof __VLS_ctx ? { 'NCard': typeof __VLS_ctx.nCard; } : 'n-card' extends keyof typeof __VLS_ctx ? { 'NCard': (typeof __VLS_ctx)["n-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NCard;
const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129({ ...{}, style: ({}), bordered: (true), }));
({} as { NCard: typeof __VLS_129; }).NCard;
({} as { NCard: typeof __VLS_129; }).NCard;
const __VLS_131 = __VLS_130({ ...{}, style: ({}), bordered: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_130));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_129, typeof __VLS_131> & Record<string, unknown>) => void)({ ...{}, style: ({}), bordered: (true), });
const __VLS_132 = __VLS_pickFunctionalComponentCtx(__VLS_129, __VLS_131)!;
let __VLS_133!: __VLS_NormalizeEmits<typeof __VLS_132.emit>;
{
const __VLS_134 = __VLS_intrinsicElements["span"];
const __VLS_135 = __VLS_elementAsFunctionalComponent(__VLS_134);
const __VLS_136 = __VLS_135({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_135));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_134, typeof __VLS_136> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136)!;
let __VLS_138!: __VLS_NormalizeEmits<typeof __VLS_137.emit>;
(__VLS_ctx.getCourseInformation(__VLS_ctx.course_will_delete).name);
(__VLS_137.slots!).default;
}
{
const __VLS_139 = __VLS_intrinsicElements["br"];
const __VLS_140 = __VLS_elementAsFunctionalComponent(__VLS_139);
const __VLS_141 = __VLS_140({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_140));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_139, typeof __VLS_141> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_142 = __VLS_pickFunctionalComponentCtx(__VLS_139, __VLS_141)!;
let __VLS_143!: __VLS_NormalizeEmits<typeof __VLS_142.emit>;
}
{
const __VLS_144 = __VLS_intrinsicElements["span"];
const __VLS_145 = __VLS_elementAsFunctionalComponent(__VLS_144);
const __VLS_146 = __VLS_145({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_145));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_144, typeof __VLS_146> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_147 = __VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146)!;
let __VLS_148!: __VLS_NormalizeEmits<typeof __VLS_147.emit>;
(__VLS_ctx.getCourseInformation(__VLS_ctx.course_will_delete).cCredit);
(__VLS_147.slots!).default;
}
(__VLS_132.slots!).default;
}
(__VLS_28.slots!).default;
}
{
const __VLS_149 = ({} as 'NTabPane' extends keyof typeof __VLS_ctx ? { 'NTabPane': typeof __VLS_ctx.NTabPane; } : 'nTabPane' extends keyof typeof __VLS_ctx ? { 'NTabPane': typeof __VLS_ctx.nTabPane; } : 'n-tab-pane' extends keyof typeof __VLS_ctx ? { 'NTabPane': (typeof __VLS_ctx)["n-tab-pane"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NTabPane;
const __VLS_150 = __VLS_asFunctionalComponent(__VLS_149, new __VLS_149({ ...{}, name: ("Judge"), label: ("評分"), }));
({} as { NTabPane: typeof __VLS_149; }).NTabPane;
({} as { NTabPane: typeof __VLS_149; }).NTabPane;
const __VLS_151 = __VLS_150({ ...{}, name: ("Judge"), label: ("評分"), }, ...__VLS_functionalComponentArgsRest(__VLS_150));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_149, typeof __VLS_151> & Record<string, unknown>) => void)({ ...{}, name: ("Judge"), label: ("評分"), });
const __VLS_152 = __VLS_pickFunctionalComponentCtx(__VLS_149, __VLS_151)!;
let __VLS_153!: __VLS_NormalizeEmits<typeof __VLS_152.emit>;
{
const __VLS_154 = ({} as 'NGrid' extends keyof typeof __VLS_ctx ? { 'NGrid': typeof __VLS_ctx.NGrid; } : 'nGrid' extends keyof typeof __VLS_ctx ? { 'NGrid': typeof __VLS_ctx.nGrid; } : 'n-grid' extends keyof typeof __VLS_ctx ? { 'NGrid': (typeof __VLS_ctx)["n-grid"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NGrid;
const __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, new __VLS_154({ ...{}, xGap: ("12"), cols: ((2)), }));
({} as { NGrid: typeof __VLS_154; }).NGrid;
({} as { NGrid: typeof __VLS_154; }).NGrid;
const __VLS_156 = __VLS_155({ ...{}, xGap: ("12"), cols: ((2)), }, ...__VLS_functionalComponentArgsRest(__VLS_155));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_154, typeof __VLS_156> & Record<string, unknown>) => void)({ ...{}, xGap: ("12"), cols: ((2)), });
const __VLS_157 = __VLS_pickFunctionalComponentCtx(__VLS_154, __VLS_156)!;
let __VLS_158!: __VLS_NormalizeEmits<typeof __VLS_157.emit>;
{
const __VLS_159 = ({} as 'NGi' extends keyof typeof __VLS_ctx ? { 'NGi': typeof __VLS_ctx.NGi; } : 'nGi' extends keyof typeof __VLS_ctx ? { 'NGi': typeof __VLS_ctx.nGi; } : 'n-gi' extends keyof typeof __VLS_ctx ? { 'NGi': (typeof __VLS_ctx)["n-gi"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NGi;
const __VLS_160 = __VLS_asFunctionalComponent(__VLS_159, new __VLS_159({ ...{}, }));
({} as { NGi: typeof __VLS_159; }).NGi;
({} as { NGi: typeof __VLS_159; }).NGi;
const __VLS_161 = __VLS_160({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_160));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_159, typeof __VLS_161> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_162 = __VLS_pickFunctionalComponentCtx(__VLS_159, __VLS_161)!;
let __VLS_163!: __VLS_NormalizeEmits<typeof __VLS_162.emit>;
{
const __VLS_164 = ({} as 'NSelect' extends keyof typeof __VLS_ctx ? { 'NSelect': typeof __VLS_ctx.NSelect; } : 'nSelect' extends keyof typeof __VLS_ctx ? { 'NSelect': typeof __VLS_ctx.nSelect; } : 'n-select' extends keyof typeof __VLS_ctx ? { 'NSelect': (typeof __VLS_ctx)["n-select"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NSelect;
const __VLS_165 = __VLS_asFunctionalComponent(__VLS_164, new __VLS_164({ ...{}, value: ((__VLS_ctx.course_select)), placeholder: ("選擇課程"), options: ((__VLS_ctx.course_options_teaches)), style: ({}), filterable: (true), }));
({} as { NSelect: typeof __VLS_164; }).NSelect;
const __VLS_166 = __VLS_165({ ...{}, value: ((__VLS_ctx.course_select)), placeholder: ("選擇課程"), options: ((__VLS_ctx.course_options_teaches)), style: ({}), filterable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_165));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_164, typeof __VLS_166> & Record<string, unknown>) => void)({ ...{}, value: ((__VLS_ctx.course_select)), placeholder: ("選擇課程"), options: ((__VLS_ctx.course_options_teaches)), style: ({}), filterable: (true), });
const __VLS_167 = __VLS_pickFunctionalComponentCtx(__VLS_164, __VLS_166)!;
let __VLS_168!: __VLS_NormalizeEmits<typeof __VLS_167.emit>;
}
{
const __VLS_169 = ({} as 'NCard' extends keyof typeof __VLS_ctx ? { 'NCard': typeof __VLS_ctx.NCard; } : 'nCard' extends keyof typeof __VLS_ctx ? { 'NCard': typeof __VLS_ctx.nCard; } : 'n-card' extends keyof typeof __VLS_ctx ? { 'NCard': (typeof __VLS_ctx)["n-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NCard;
const __VLS_170 = __VLS_asFunctionalComponent(__VLS_169, new __VLS_169({ ...{}, style: ({}), bordered: (true), }));
({} as { NCard: typeof __VLS_169; }).NCard;
({} as { NCard: typeof __VLS_169; }).NCard;
const __VLS_171 = __VLS_170({ ...{}, style: ({}), bordered: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_170));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_169, typeof __VLS_171> & Record<string, unknown>) => void)({ ...{}, style: ({}), bordered: (true), });
const __VLS_172 = __VLS_pickFunctionalComponentCtx(__VLS_169, __VLS_171)!;
let __VLS_173!: __VLS_NormalizeEmits<typeof __VLS_172.emit>;
{
const __VLS_174 = __VLS_intrinsicElements["span"];
const __VLS_175 = __VLS_elementAsFunctionalComponent(__VLS_174);
const __VLS_176 = __VLS_175({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_175));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_174, typeof __VLS_176> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_177 = __VLS_pickFunctionalComponentCtx(__VLS_174, __VLS_176)!;
let __VLS_178!: __VLS_NormalizeEmits<typeof __VLS_177.emit>;
(__VLS_ctx.getCourseInformation(__VLS_ctx.course_select).name);
(__VLS_177.slots!).default;
}
{
const __VLS_179 = __VLS_intrinsicElements["br"];
const __VLS_180 = __VLS_elementAsFunctionalComponent(__VLS_179);
const __VLS_181 = __VLS_180({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_180));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_179, typeof __VLS_181> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_182 = __VLS_pickFunctionalComponentCtx(__VLS_179, __VLS_181)!;
let __VLS_183!: __VLS_NormalizeEmits<typeof __VLS_182.emit>;
}
{
const __VLS_184 = __VLS_intrinsicElements["span"];
const __VLS_185 = __VLS_elementAsFunctionalComponent(__VLS_184);
const __VLS_186 = __VLS_185({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_185));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_184, typeof __VLS_186> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_187 = __VLS_pickFunctionalComponentCtx(__VLS_184, __VLS_186)!;
let __VLS_188!: __VLS_NormalizeEmits<typeof __VLS_187.emit>;
(__VLS_ctx.getCourseInformation(__VLS_ctx.course_select).cCredit);
(__VLS_187.slots!).default;
}
(__VLS_172.slots!).default;
}
(__VLS_162.slots!).default;
}
{
const __VLS_189 = ({} as 'NGi' extends keyof typeof __VLS_ctx ? { 'NGi': typeof __VLS_ctx.NGi; } : 'nGi' extends keyof typeof __VLS_ctx ? { 'NGi': typeof __VLS_ctx.nGi; } : 'n-gi' extends keyof typeof __VLS_ctx ? { 'NGi': (typeof __VLS_ctx)["n-gi"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NGi;
const __VLS_190 = __VLS_asFunctionalComponent(__VLS_189, new __VLS_189({ ...{}, style: ({}), bordered: (true), }));
({} as { NGi: typeof __VLS_189; }).NGi;
({} as { NGi: typeof __VLS_189; }).NGi;
const __VLS_191 = __VLS_190({ ...{}, style: ({}), bordered: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_190));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_189, typeof __VLS_191> & Record<string, unknown>) => void)({ ...{}, style: ({}), bordered: (true), });
const __VLS_192 = __VLS_pickFunctionalComponentCtx(__VLS_189, __VLS_191)!;
let __VLS_193!: __VLS_NormalizeEmits<typeof __VLS_192.emit>;
{
const __VLS_194 = ({} as 'NFlex' extends keyof typeof __VLS_ctx ? { 'NFlex': typeof __VLS_ctx.NFlex; } : 'nFlex' extends keyof typeof __VLS_ctx ? { 'NFlex': typeof __VLS_ctx.nFlex; } : 'n-flex' extends keyof typeof __VLS_ctx ? { 'NFlex': (typeof __VLS_ctx)["n-flex"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NFlex;
const __VLS_195 = __VLS_asFunctionalComponent(__VLS_194, new __VLS_194({ ...{}, }));
({} as { NFlex: typeof __VLS_194; }).NFlex;
({} as { NFlex: typeof __VLS_194; }).NFlex;
const __VLS_196 = __VLS_195({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_195));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_194, typeof __VLS_196> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_197 = __VLS_pickFunctionalComponentCtx(__VLS_194, __VLS_196)!;
let __VLS_198!: __VLS_NormalizeEmits<typeof __VLS_197.emit>;
{
const __VLS_199 = ({} as 'NSelect' extends keyof typeof __VLS_ctx ? { 'NSelect': typeof __VLS_ctx.NSelect; } : 'nSelect' extends keyof typeof __VLS_ctx ? { 'NSelect': typeof __VLS_ctx.nSelect; } : 'n-select' extends keyof typeof __VLS_ctx ? { 'NSelect': (typeof __VLS_ctx)["n-select"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NSelect;
const __VLS_200 = __VLS_asFunctionalComponent(__VLS_199, new __VLS_199({ ...{}, value: ((__VLS_ctx.course_select)), placeholder: ("選擇計分項目"), options: ((__VLS_ctx.course_options_teaches)), style: ({}), filterable: (true), }));
({} as { NSelect: typeof __VLS_199; }).NSelect;
const __VLS_201 = __VLS_200({ ...{}, value: ((__VLS_ctx.course_select)), placeholder: ("選擇計分項目"), options: ((__VLS_ctx.course_options_teaches)), style: ({}), filterable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_200));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_199, typeof __VLS_201> & Record<string, unknown>) => void)({ ...{}, value: ((__VLS_ctx.course_select)), placeholder: ("選擇計分項目"), options: ((__VLS_ctx.course_options_teaches)), style: ({}), filterable: (true), });
const __VLS_202 = __VLS_pickFunctionalComponentCtx(__VLS_199, __VLS_201)!;
let __VLS_203!: __VLS_NormalizeEmits<typeof __VLS_202.emit>;
}
{
const __VLS_204 = ({} as 'NPopconfirm' extends keyof typeof __VLS_ctx ? { 'NPopconfirm': typeof __VLS_ctx.NPopconfirm; } : 'nPopconfirm' extends keyof typeof __VLS_ctx ? { 'NPopconfirm': typeof __VLS_ctx.nPopconfirm; } : 'n-popconfirm' extends keyof typeof __VLS_ctx ? { 'NPopconfirm': (typeof __VLS_ctx)["n-popconfirm"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NPopconfirm;
const __VLS_205 = __VLS_asFunctionalComponent(__VLS_204, new __VLS_204({ ...{ onPositiveClick: {} as any, }, }));
({} as { NPopconfirm: typeof __VLS_204; }).NPopconfirm;
({} as { NPopconfirm: typeof __VLS_204; }).NPopconfirm;
const __VLS_206 = __VLS_205({ ...{ onPositiveClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_205));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_204, typeof __VLS_206> & Record<string, unknown>) => void)({ ...{ onPositiveClick: {} as any, }, });
const __VLS_207 = __VLS_pickFunctionalComponentCtx(__VLS_204, __VLS_206)!;
let __VLS_208!: __VLS_NormalizeEmits<typeof __VLS_207.emit>;
let __VLS_209 = { 'positive-click': __VLS_pickEvent(__VLS_208['positive-click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_205, typeof __VLS_206>).onPositiveClick) };
__VLS_209 = { "positive-click": (__VLS_ctx.DeleteTeachesCourse) };
{
const __VLS_210 = __VLS_intrinsicElements["template"];
const __VLS_211 = __VLS_elementAsFunctionalComponent(__VLS_210);
const __VLS_212 = __VLS_211({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_211));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_210, typeof __VLS_212> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_207.slots!).trigger;
{
const __VLS_213 = ({} as 'NButton' extends keyof typeof __VLS_ctx ? { 'NButton': typeof __VLS_ctx.NButton; } : 'nButton' extends keyof typeof __VLS_ctx ? { 'NButton': typeof __VLS_ctx.nButton; } : 'n-button' extends keyof typeof __VLS_ctx ? { 'NButton': (typeof __VLS_ctx)["n-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NButton;
const __VLS_214 = __VLS_asFunctionalComponent(__VLS_213, new __VLS_213({ ...{}, color: ("#ff69b4"), }));
({} as { NButton: typeof __VLS_213; }).NButton;
({} as { NButton: typeof __VLS_213; }).NButton;
const __VLS_215 = __VLS_214({ ...{}, color: ("#ff69b4"), }, ...__VLS_functionalComponentArgsRest(__VLS_214));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_213, typeof __VLS_215> & Record<string, unknown>) => void)({ ...{}, color: ("#ff69b4"), });
const __VLS_216 = __VLS_pickFunctionalComponentCtx(__VLS_213, __VLS_215)!;
let __VLS_217!: __VLS_NormalizeEmits<typeof __VLS_216.emit>;
{
const __VLS_218 = __VLS_intrinsicElements["template"];
const __VLS_219 = __VLS_elementAsFunctionalComponent(__VLS_218);
const __VLS_220 = __VLS_219({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_219));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_218, typeof __VLS_220> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_216.slots!).icon;
{
const __VLS_221 = ({} as 'NIcon' extends keyof typeof __VLS_ctx ? { 'NIcon': typeof __VLS_ctx.NIcon; } : 'nIcon' extends keyof typeof __VLS_ctx ? { 'NIcon': typeof __VLS_ctx.nIcon; } : 'n-icon' extends keyof typeof __VLS_ctx ? { 'NIcon': (typeof __VLS_ctx)["n-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NIcon;
const __VLS_222 = __VLS_asFunctionalComponent(__VLS_221, new __VLS_221({ ...{}, }));
({} as { NIcon: typeof __VLS_221; }).NIcon;
({} as { NIcon: typeof __VLS_221; }).NIcon;
const __VLS_223 = __VLS_222({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_222));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_221, typeof __VLS_223> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_224 = __VLS_pickFunctionalComponentCtx(__VLS_221, __VLS_223)!;
let __VLS_225!: __VLS_NormalizeEmits<typeof __VLS_224.emit>;
{
const __VLS_226 = ({} as 'Trash' extends keyof typeof __VLS_ctx ? { 'trash': typeof __VLS_ctx.Trash; } : 'trash' extends keyof typeof __VLS_ctx ? { 'trash': typeof __VLS_ctx.trash; } : typeof __VLS_resolvedLocalAndGlobalComponents).trash;
const __VLS_227 = __VLS_asFunctionalComponent(__VLS_226, new __VLS_226({ ...{}, }));
({} as { trash: typeof __VLS_226; }).trash;
const __VLS_228 = __VLS_227({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_227));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_226, typeof __VLS_228> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_229 = __VLS_pickFunctionalComponentCtx(__VLS_226, __VLS_228)!;
let __VLS_230!: __VLS_NormalizeEmits<typeof __VLS_229.emit>;
}
(__VLS_224.slots!).default;
}
// @ts-ignore
[course_will_delete, getCourseInformation, course_will_delete, getCourseInformation, course_will_delete, course_select, course_options_teaches, course_select, course_options_teaches, course_select, course_options_teaches, getCourseInformation, course_select, getCourseInformation, course_select, course_select, course_options_teaches, course_select, course_options_teaches, course_select, course_options_teaches, DeleteTeachesCourse,];
}
}
}
}
}
(__VLS_ctx.course_will_delete);
}
(__VLS_197.slots!).default;
}
{
const __VLS_231 = ({} as 'NForm' extends keyof typeof __VLS_ctx ? { 'NForm': typeof __VLS_ctx.NForm; } : 'nForm' extends keyof typeof __VLS_ctx ? { 'NForm': typeof __VLS_ctx.nForm; } : 'n-form' extends keyof typeof __VLS_ctx ? { 'NForm': (typeof __VLS_ctx)["n-form"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NForm;
const __VLS_232 = __VLS_asFunctionalComponent(__VLS_231, new __VLS_231({ ...{}, ref: ("formRef"), inline: (true), labelWidth: ((80)), model: ((__VLS_ctx.formValue)), }));
({} as { NForm: typeof __VLS_231; }).NForm;
({} as { NForm: typeof __VLS_231; }).NForm;
const __VLS_233 = __VLS_232({ ...{}, ref: ("formRef"), inline: (true), labelWidth: ((80)), model: ((__VLS_ctx.formValue)), }, ...__VLS_functionalComponentArgsRest(__VLS_232));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_231, typeof __VLS_233> & Record<string, unknown>) => void)({ ...{}, ref: ("formRef"), inline: (true), labelWidth: ((80)), model: ((__VLS_ctx.formValue)), });
const __VLS_234 = __VLS_pickFunctionalComponentCtx(__VLS_231, __VLS_233)!;
let __VLS_235!: __VLS_NormalizeEmits<typeof __VLS_234.emit>;
// @ts-ignore
(__VLS_ctx.formRef);
{
const __VLS_236 = ({} as 'NFormItem' extends keyof typeof __VLS_ctx ? { 'NFormItem': typeof __VLS_ctx.NFormItem; } : 'nFormItem' extends keyof typeof __VLS_ctx ? { 'NFormItem': typeof __VLS_ctx.nFormItem; } : 'n-form-item' extends keyof typeof __VLS_ctx ? { 'NFormItem': (typeof __VLS_ctx)["n-form-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NFormItem;
const __VLS_237 = __VLS_asFunctionalComponent(__VLS_236, new __VLS_236({ ...{}, label: ("課程編號"), }));
({} as { NFormItem: typeof __VLS_236; }).NFormItem;
({} as { NFormItem: typeof __VLS_236; }).NFormItem;
const __VLS_238 = __VLS_237({ ...{}, label: ("課程編號"), }, ...__VLS_functionalComponentArgsRest(__VLS_237));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_236, typeof __VLS_238> & Record<string, unknown>) => void)({ ...{}, label: ("課程編號"), });
const __VLS_239 = __VLS_pickFunctionalComponentCtx(__VLS_236, __VLS_238)!;
let __VLS_240!: __VLS_NormalizeEmits<typeof __VLS_239.emit>;
{
const __VLS_241 = ({} as 'NInput' extends keyof typeof __VLS_ctx ? { 'NInput': typeof __VLS_ctx.NInput; } : 'nInput' extends keyof typeof __VLS_ctx ? { 'NInput': typeof __VLS_ctx.nInput; } : 'n-input' extends keyof typeof __VLS_ctx ? { 'NInput': (typeof __VLS_ctx)["n-input"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NInput;
const __VLS_242 = __VLS_asFunctionalComponent(__VLS_241, new __VLS_241({ ...{}, value: ((__VLS_ctx.formValue.course.cNo)), placeholder: ("輸入編號"), }));
({} as { NInput: typeof __VLS_241; }).NInput;
const __VLS_243 = __VLS_242({ ...{}, value: ((__VLS_ctx.formValue.course.cNo)), placeholder: ("輸入編號"), }, ...__VLS_functionalComponentArgsRest(__VLS_242));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_241, typeof __VLS_243> & Record<string, unknown>) => void)({ ...{}, value: ((__VLS_ctx.formValue.course.cNo)), placeholder: ("輸入編號"), });
const __VLS_244 = __VLS_pickFunctionalComponentCtx(__VLS_241, __VLS_243)!;
let __VLS_245!: __VLS_NormalizeEmits<typeof __VLS_244.emit>;
}
(__VLS_239.slots!).default;
}
{
const __VLS_246 = ({} as 'NFormItem' extends keyof typeof __VLS_ctx ? { 'NFormItem': typeof __VLS_ctx.NFormItem; } : 'nFormItem' extends keyof typeof __VLS_ctx ? { 'NFormItem': typeof __VLS_ctx.nFormItem; } : 'n-form-item' extends keyof typeof __VLS_ctx ? { 'NFormItem': (typeof __VLS_ctx)["n-form-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NFormItem;
const __VLS_247 = __VLS_asFunctionalComponent(__VLS_246, new __VLS_246({ ...{}, label: ("項目名稱"), }));
({} as { NFormItem: typeof __VLS_246; }).NFormItem;
({} as { NFormItem: typeof __VLS_246; }).NFormItem;
const __VLS_248 = __VLS_247({ ...{}, label: ("項目名稱"), }, ...__VLS_functionalComponentArgsRest(__VLS_247));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_246, typeof __VLS_248> & Record<string, unknown>) => void)({ ...{}, label: ("項目名稱"), });
const __VLS_249 = __VLS_pickFunctionalComponentCtx(__VLS_246, __VLS_248)!;
let __VLS_250!: __VLS_NormalizeEmits<typeof __VLS_249.emit>;
{
const __VLS_251 = ({} as 'NInput' extends keyof typeof __VLS_ctx ? { 'NInput': typeof __VLS_ctx.NInput; } : 'nInput' extends keyof typeof __VLS_ctx ? { 'NInput': typeof __VLS_ctx.nInput; } : 'n-input' extends keyof typeof __VLS_ctx ? { 'NInput': (typeof __VLS_ctx)["n-input"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NInput;
const __VLS_252 = __VLS_asFunctionalComponent(__VLS_251, new __VLS_251({ ...{}, value: ((__VLS_ctx.formValue.course.cName)), placeholder: ("輸入名稱"), }));
({} as { NInput: typeof __VLS_251; }).NInput;
const __VLS_253 = __VLS_252({ ...{}, value: ((__VLS_ctx.formValue.course.cName)), placeholder: ("輸入名稱"), }, ...__VLS_functionalComponentArgsRest(__VLS_252));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_251, typeof __VLS_253> & Record<string, unknown>) => void)({ ...{}, value: ((__VLS_ctx.formValue.course.cName)), placeholder: ("輸入名稱"), });
const __VLS_254 = __VLS_pickFunctionalComponentCtx(__VLS_251, __VLS_253)!;
let __VLS_255!: __VLS_NormalizeEmits<typeof __VLS_254.emit>;
}
(__VLS_249.slots!).default;
}
{
const __VLS_256 = ({} as 'NFormItem' extends keyof typeof __VLS_ctx ? { 'NFormItem': typeof __VLS_ctx.NFormItem; } : 'nFormItem' extends keyof typeof __VLS_ctx ? { 'NFormItem': typeof __VLS_ctx.nFormItem; } : 'n-form-item' extends keyof typeof __VLS_ctx ? { 'NFormItem': (typeof __VLS_ctx)["n-form-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NFormItem;
const __VLS_257 = __VLS_asFunctionalComponent(__VLS_256, new __VLS_256({ ...{}, label: ("占比"), }));
({} as { NFormItem: typeof __VLS_256; }).NFormItem;
({} as { NFormItem: typeof __VLS_256; }).NFormItem;
const __VLS_258 = __VLS_257({ ...{}, label: ("占比"), }, ...__VLS_functionalComponentArgsRest(__VLS_257));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_256, typeof __VLS_258> & Record<string, unknown>) => void)({ ...{}, label: ("占比"), });
const __VLS_259 = __VLS_pickFunctionalComponentCtx(__VLS_256, __VLS_258)!;
let __VLS_260!: __VLS_NormalizeEmits<typeof __VLS_259.emit>;
{
const __VLS_261 = ({} as 'NInput' extends keyof typeof __VLS_ctx ? { 'NInput': typeof __VLS_ctx.NInput; } : 'nInput' extends keyof typeof __VLS_ctx ? { 'NInput': typeof __VLS_ctx.nInput; } : 'n-input' extends keyof typeof __VLS_ctx ? { 'NInput': (typeof __VLS_ctx)["n-input"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NInput;
const __VLS_262 = __VLS_asFunctionalComponent(__VLS_261, new __VLS_261({ ...{}, value: ((__VLS_ctx.formValue.course.cCredit)), placeholder: ("輸入學分"), }));
({} as { NInput: typeof __VLS_261; }).NInput;
const __VLS_263 = __VLS_262({ ...{}, value: ((__VLS_ctx.formValue.course.cCredit)), placeholder: ("輸入學分"), }, ...__VLS_functionalComponentArgsRest(__VLS_262));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_261, typeof __VLS_263> & Record<string, unknown>) => void)({ ...{}, value: ((__VLS_ctx.formValue.course.cCredit)), placeholder: ("輸入學分"), });
const __VLS_264 = __VLS_pickFunctionalComponentCtx(__VLS_261, __VLS_263)!;
let __VLS_265!: __VLS_NormalizeEmits<typeof __VLS_264.emit>;
}
(__VLS_259.slots!).default;
}
{
const __VLS_266 = ({} as 'NFormItem' extends keyof typeof __VLS_ctx ? { 'NFormItem': typeof __VLS_ctx.NFormItem; } : 'nFormItem' extends keyof typeof __VLS_ctx ? { 'NFormItem': typeof __VLS_ctx.nFormItem; } : 'n-form-item' extends keyof typeof __VLS_ctx ? { 'NFormItem': (typeof __VLS_ctx)["n-form-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NFormItem;
const __VLS_267 = __VLS_asFunctionalComponent(__VLS_266, new __VLS_266({ ...{}, }));
({} as { NFormItem: typeof __VLS_266; }).NFormItem;
({} as { NFormItem: typeof __VLS_266; }).NFormItem;
const __VLS_268 = __VLS_267({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_267));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_266, typeof __VLS_268> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_269 = __VLS_pickFunctionalComponentCtx(__VLS_266, __VLS_268)!;
let __VLS_270!: __VLS_NormalizeEmits<typeof __VLS_269.emit>;
{
const __VLS_271 = ({} as 'NButton' extends keyof typeof __VLS_ctx ? { 'NButton': typeof __VLS_ctx.NButton; } : 'nButton' extends keyof typeof __VLS_ctx ? { 'NButton': typeof __VLS_ctx.nButton; } : 'n-button' extends keyof typeof __VLS_ctx ? { 'NButton': (typeof __VLS_ctx)["n-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NButton;
const __VLS_272 = __VLS_asFunctionalComponent(__VLS_271, new __VLS_271({ ...{ onClick: {} as any, }, attrType: ("button"), }));
({} as { NButton: typeof __VLS_271; }).NButton;
({} as { NButton: typeof __VLS_271; }).NButton;
const __VLS_273 = __VLS_272({ ...{ onClick: {} as any, }, attrType: ("button"), }, ...__VLS_functionalComponentArgsRest(__VLS_272));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_271, typeof __VLS_273> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, attrType: ("button"), });
const __VLS_274 = __VLS_pickFunctionalComponentCtx(__VLS_271, __VLS_273)!;
let __VLS_275!: __VLS_NormalizeEmits<typeof __VLS_274.emit>;
let __VLS_276 = { 'click': __VLS_pickEvent(__VLS_275['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_272, typeof __VLS_273>).onClick) };
__VLS_276 = { click: (__VLS_ctx.handleAddCourse) };
(__VLS_274.slots!).default;
}
(__VLS_269.slots!).default;
}
(__VLS_234.slots!).default;
}
(__VLS_192.slots!).default;
}
(__VLS_157.slots!).default;
}
{
const __VLS_277 = ({} as 'NTabs' extends keyof typeof __VLS_ctx ? { 'NTabs': typeof __VLS_ctx.NTabs; } : 'nTabs' extends keyof typeof __VLS_ctx ? { 'NTabs': typeof __VLS_ctx.nTabs; } : 'n-tabs' extends keyof typeof __VLS_ctx ? { 'NTabs': (typeof __VLS_ctx)["n-tabs"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NTabs;
const __VLS_278 = __VLS_asFunctionalComponent(__VLS_277, new __VLS_277({ ...{}, class: ("card-tabs"), defaultValue: ("Finalscore"), size: ("large"), animated: (true), justifyContent: ("space-evenly"), type: ("line"), }));
({} as { NTabs: typeof __VLS_277; }).NTabs;
({} as { NTabs: typeof __VLS_277; }).NTabs;
const __VLS_279 = __VLS_278({ ...{}, class: ("card-tabs"), defaultValue: ("Finalscore"), size: ("large"), animated: (true), justifyContent: ("space-evenly"), type: ("line"), }, ...__VLS_functionalComponentArgsRest(__VLS_278));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_277, typeof __VLS_279> & Record<string, unknown>) => void)({ ...{}, class: ("card-tabs"), defaultValue: ("Finalscore"), size: ("large"), animated: (true), justifyContent: ("space-evenly"), type: ("line"), });
const __VLS_280 = __VLS_pickFunctionalComponentCtx(__VLS_277, __VLS_279)!;
let __VLS_281!: __VLS_NormalizeEmits<typeof __VLS_280.emit>;
{
const __VLS_282 = ({} as 'NTabPane' extends keyof typeof __VLS_ctx ? { 'NTabPane': typeof __VLS_ctx.NTabPane; } : 'nTabPane' extends keyof typeof __VLS_ctx ? { 'NTabPane': typeof __VLS_ctx.nTabPane; } : 'n-tab-pane' extends keyof typeof __VLS_ctx ? { 'NTabPane': (typeof __VLS_ctx)["n-tab-pane"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NTabPane;
const __VLS_283 = __VLS_asFunctionalComponent(__VLS_282, new __VLS_282({ ...{}, name: ("Finalscore"), label: ("學期成績"), }));
({} as { NTabPane: typeof __VLS_282; }).NTabPane;
({} as { NTabPane: typeof __VLS_282; }).NTabPane;
const __VLS_284 = __VLS_283({ ...{}, name: ("Finalscore"), label: ("學期成績"), }, ...__VLS_functionalComponentArgsRest(__VLS_283));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_282, typeof __VLS_284> & Record<string, unknown>) => void)({ ...{}, name: ("Finalscore"), label: ("學期成績"), });
const __VLS_285 = __VLS_pickFunctionalComponentCtx(__VLS_282, __VLS_284)!;
let __VLS_286!: __VLS_NormalizeEmits<typeof __VLS_285.emit>;
}
{
const __VLS_287 = ({} as 'NTabPane' extends keyof typeof __VLS_ctx ? { 'NTabPane': typeof __VLS_ctx.NTabPane; } : 'nTabPane' extends keyof typeof __VLS_ctx ? { 'NTabPane': typeof __VLS_ctx.nTabPane; } : 'n-tab-pane' extends keyof typeof __VLS_ctx ? { 'NTabPane': (typeof __VLS_ctx)["n-tab-pane"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NTabPane;
const __VLS_288 = __VLS_asFunctionalComponent(__VLS_287, new __VLS_287({ ...{}, name: ("Items"), label: ("計分項目"), }));
({} as { NTabPane: typeof __VLS_287; }).NTabPane;
({} as { NTabPane: typeof __VLS_287; }).NTabPane;
const __VLS_289 = __VLS_288({ ...{}, name: ("Items"), label: ("計分項目"), }, ...__VLS_functionalComponentArgsRest(__VLS_288));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_287, typeof __VLS_289> & Record<string, unknown>) => void)({ ...{}, name: ("Items"), label: ("計分項目"), });
const __VLS_290 = __VLS_pickFunctionalComponentCtx(__VLS_287, __VLS_289)!;
let __VLS_291!: __VLS_NormalizeEmits<typeof __VLS_290.emit>;
}
(__VLS_280.slots!).default;
}
(__VLS_152.slots!).default;
}
(__VLS_23.slots!).default;
}
(__VLS_18.slots!).default;
}
{
const __VLS_292 = ({} as 'NLayoutFooter' extends keyof typeof __VLS_ctx ? { 'NLayoutFooter': typeof __VLS_ctx.NLayoutFooter; } : 'nLayoutFooter' extends keyof typeof __VLS_ctx ? { 'NLayoutFooter': typeof __VLS_ctx.nLayoutFooter; } : 'n-layout-footer' extends keyof typeof __VLS_ctx ? { 'NLayoutFooter': (typeof __VLS_ctx)["n-layout-footer"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NLayoutFooter;
const __VLS_293 = __VLS_asFunctionalComponent(__VLS_292, new __VLS_292({ ...{}, class: ("page-footer"), }));
({} as { NLayoutFooter: typeof __VLS_292; }).NLayoutFooter;
({} as { NLayoutFooter: typeof __VLS_292; }).NLayoutFooter;
const __VLS_294 = __VLS_293({ ...{}, class: ("page-footer"), }, ...__VLS_functionalComponentArgsRest(__VLS_293));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_292, typeof __VLS_294> & Record<string, unknown>) => void)({ ...{}, class: ("page-footer"), });
const __VLS_295 = __VLS_pickFunctionalComponentCtx(__VLS_292, __VLS_294)!;
let __VLS_296!: __VLS_NormalizeEmits<typeof __VLS_295.emit>;
(__VLS_295.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["page-header"];
__VLS_styleScopedClasses["main-page"];
__VLS_styleScopedClasses["card-tabs"];
__VLS_styleScopedClasses["card-tabs"];
__VLS_styleScopedClasses["page-footer"];
}
var __VLS_slots!: {};
// @ts-ignore
[course_will_delete, formValue, formValue, formValue, formRef, formValue, formValue, formValue, formValue, formValue, formValue, formValue, formValue, formValue, handleAddCourse,];
return __VLS_slots;
}
