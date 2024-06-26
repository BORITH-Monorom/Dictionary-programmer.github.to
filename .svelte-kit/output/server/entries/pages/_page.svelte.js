import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
const SEOHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-166880u_START --><meta charset="utf-8"><link rel="icon" href="%sveltekit.assets%/favicon.png"><meta name="viewport" content="width=device-width">${$$result.title = `<title>ពាក្យបច្ចេកទេសបកប្រែជាភាសាខ្មែរ</title>`, ""}<link rel="stylesheet" href="/styles/style.css"><meta name="description" content="បណ្តុំពាក្យបច្ចេកទេសក្នុងការសរសេរកូដបកប្រែជាភាសាខ្មែរ។"><meta name="keywords" content="programming words, technical words, programming terms, technical terms, programming words in khmer, technical words in khmer, programming words translated in khmer, khmer technical words database"><meta property="og:type" content="website"><meta property="og:title" content="ពាក្យបច្ចេកទេសបកប្រែជាភាសាខ្មែរ"><meta property="og:description" content="បណ្តុំពាក្យបច្ចេកទេសក្នុងការសរសេរកូដបកប្រែជាភាសាខ្មែរ។"><meta property="og:image" content="https://khmer-programming-words.vercel.app/banner-01.jpg"><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title" content="ពាក្យបច្ចេកទេសបកប្រែជាភាសាខ្មែរ"><meta property="twitter:description" content="បណ្តុំពាក្យបច្ចេកទេសក្នុងការសរសេរកូដបកប្រែជាភាសាខ្មែរ។"><meta property="twitter:image" content="https://khmer-programming-words.vercel.app/banner-01.jpg"><link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"><link rel="manifest" href="/favicons/site.webmanifest"><meta name="google-site-verification" content="OBoSAW-QYJ50n3VVQfEFla7Cb4XaRwpbHzQaLhTWd7o"><!-- HEAD_svelte-166880u_END -->`, ""}`;
});
const SectionTop_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".section_top.svelte-1cxu4xg.svelte-1cxu4xg{max-width:min(64em, 100%);display:flex;justify-content:flex-end;align-items:center;margin:0 auto;padding:1rem}.section_top.svelte-1cxu4xg a.svelte-1cxu4xg{font-size:1.25rem}",
  map: null
};
const SectionTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="section_top svelte-1cxu4xg" data-svelte-h="svelte-7ep9ma"><a href="https://github.com/masayaShinoda/khmer-programming-words/#readme" class="svelte-1cxu4xg">បន្ថែមពាក្យថ្មី</a> </section>`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".section_hero.svelte-1oled6u.svelte-1oled6u{display:flex;flex-direction:column;align-items:center;width:100%;max-width:min(64em, 95%);margin:2.5rem auto}.section_hero.svelte-1oled6u>div.svelte-1oled6u:first-of-type{margin-bottom:1.5rem}@media screen and (max-width: 48em){.section_hero.svelte-1oled6u img.svelte-1oled6u{max-height:25vw;max-width:25vw;object-fit:contain}}.section_hero.svelte-1oled6u h1.svelte-1oled6u,.section_hero.svelte-1oled6u span.svelte-1oled6u,.section_hero.svelte-1oled6u p.svelte-1oled6u{text-align:center;line-height:1.4;line-break:auto}.section_hero.svelte-1oled6u h1.svelte-1oled6u{font-size:calc(var(--type_scale_6) * 0.875)}@media screen and (max-width: 32em){.section_hero.svelte-1oled6u h1.svelte-1oled6u{font-size:var(--type_scale_5)}}@media(prefers-color-scheme: dark){}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="section_hero svelte-1oled6u" data-svelte-h="svelte-1oqv5uk"><div class="svelte-1oled6u"><img src="/SVG/decorative-hero-section.svg" width="128" height="128" alt="decorative icon" class="svelte-1oled6u"></div> <div class="svelte-1oled6u"><h1 class="svelte-1oled6u">ពាក្យបច្ចេកទេសបកប្រែជាភាសាខ្មែរ</h1> <p lang="en" class="svelte-1oled6u">An <span style="font-weight: 600;" class="svelte-1oled6u">opinionated</span> collection of technical words commonly used
			in programming, translated into Khmer.</p></div> </section>`;
});
const AlphabetNav_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".section_alpha_nav.svelte-4ypvkl.svelte-4ypvkl{width:min(64em, 100%);max-width:min(64em, 100%);display:flex;justify-content:center;margin:0 auto;padding:1rem 0;background-color:rgba(0, 0, 0, 0);-webkit-backdrop-filter:blur(0.325rem);backdrop-filter:blur(0.325rem);border-top:2px solid;border-bottom:2px solid;border-color:var(--clr_grey_shade_e);user-select:none;position:-webkit-sticky;position:sticky;top:0}@media(prefers-color-scheme: dark){.section_alpha_nav.svelte-4ypvkl.svelte-4ypvkl{border-top-color:var(--clr_dark_shade_a);border-bottom-color:var(--clr_dark_shade_a)}}.section_alpha_nav.svelte-4ypvkl a.svelte-4ypvkl{text-decoration:none;font-size:1.25rem}.section_alpha_nav.svelte-4ypvkl a.svelte-4ypvkl:not(:last-of-type):not(:only-child){margin-right:0.5rem}@media screen and (max-width: 40em){.section_alpha_nav.svelte-4ypvkl.svelte-4ypvkl{width:2rem;flex-direction:column;position:sticky;left:calc(100% - 2rem);top:0;margin:0;margin-right:calc(-1 * 2rem);height:100dvh;border:none;background:none;backdrop-filter:none;-webkit-backdrop-filter:none;float:left}.section_alpha_nav.svelte-4ypvkl nav.svelte-4ypvkl{display:inline-flex;flex-direction:column;align-items:center;justify-content:center}.section_alpha_nav.svelte-4ypvkl a.svelte-4ypvkl{margin-bottom:.875rem;font-size:var(--type_scale_3)}.section_alpha_nav.svelte-4ypvkl a.svelte-4ypvkl:not(:last-of-type):not(:only-child){margin:0 0 1rem 0}}",
  map: null
};
const AlphabetNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { alphabet_array } = $$props;
  if ($$props.alphabet_array === void 0 && $$bindings.alphabet_array && alphabet_array !== void 0)
    $$bindings.alphabet_array(alphabet_array);
  $$result.css.add(css$2);
  return `<section class="section_alpha_nav svelte-4ypvkl"><nav id="alpha_nav" class="svelte-4ypvkl">${each(alphabet_array, (item) => {
    return `${item.length === 1 ? `<a${add_attribute("href", `#${item}`, 0)} class="svelte-4ypvkl">${escape(item)} </a>` : ``}`;
  })}</nav>  </section>`;
});
const Dictionary_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".section_main.svelte-gz7o0n.svelte-gz7o0n{width:100%;max-width:min(48em, 95%);margin:3.5rem auto;margin-bottom:7.5rem;hyphens:auto}@media screen and (max-width: 40em){.section_main.svelte-gz7o0n.svelte-gz7o0n{max-width:100%;margin:0 auto}}.section_main.svelte-gz7o0n dt.svelte-gz7o0n{line-height:1.24;font-size:1.25rem;font-weight:600;margin:2rem 0 1rem 0}.section_main.svelte-gz7o0n dd.svelte-gz7o0n{line-height:1.5;margin-bottom:1rem;font-size:1.125rem;color:var(--clr_grey_shade_a)}@media(prefers-color-scheme: dark){.section_main.svelte-gz7o0n dd.svelte-gz7o0n{color:var(--clr_grey_shade_d)}}.heading_alphabet.svelte-gz7o0n.svelte-gz7o0n{font-size:var(--type_scale_5);font-weight:600;margin:0;color:var(--clr_grey_shade_c)}.heading_alphabet.svelte-gz7o0n.svelte-gz7o0n:not(:first-of-type){margin-top:var(--type_scale_6)}@media(prefers-color-scheme: dark){.heading_alphabet.svelte-gz7o0n.svelte-gz7o0n{color:var(--clr_grey_shade_b)}}.heading_alphabet.svelte-gz7o0n+dt.svelte-gz7o0n{margin-top:1rem}@media screen and (max-width: 40em){.heading_alphabet.svelte-gz7o0n.svelte-gz7o0n,.section_main.svelte-gz7o0n dt.svelte-gz7o0n,.section_main.svelte-gz7o0n dd.svelte-gz7o0n{padding:0 2rem 0 1rem}@supports (-moz-appearance: none){.heading_alphabet.svelte-gz7o0n.svelte-gz7o0n,.section_main.svelte-gz7o0n dt.svelte-gz7o0n,.section_main.svelte-gz7o0n dd.svelte-gz7o0n{word-break:break-all}}}",
  map: null
};
const Dictionary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { types } = $$props;
  let { dictionary: dictionary2 } = $$props;
  let { dictionary_keys } = $$props;
  let { anchor_keys } = $$props;
  if ($$props.types === void 0 && $$bindings.types && types !== void 0)
    $$bindings.types(types);
  if ($$props.dictionary === void 0 && $$bindings.dictionary && dictionary2 !== void 0)
    $$bindings.dictionary(dictionary2);
  if ($$props.dictionary_keys === void 0 && $$bindings.dictionary_keys && dictionary_keys !== void 0)
    $$bindings.dictionary_keys(dictionary_keys);
  if ($$props.anchor_keys === void 0 && $$bindings.anchor_keys && anchor_keys !== void 0)
    $$bindings.anchor_keys(anchor_keys);
  $$result.css.add(css$1);
  return `<section class="section_main svelte-gz7o0n"><dl id="definition_list">${each(dictionary_keys, (item) => {
    return ` ${anchor_keys.includes(item) ? `<h5 class="heading_alphabet svelte-gz7o0n">${escape(item[0].toUpperCase())}</h5> <dt${add_attribute("id", item[0].toUpperCase(), 0)} class="svelte-gz7o0n">${escape(item)}</dt>` : `<dt class="svelte-gz7o0n">${escape(item)}</dt>`} ${each(dictionary2[item], (definition) => {
      return `<dd class="svelte-gz7o0n"><!-- HTML_TAG_START -->${definition}<!-- HTML_TAG_END --></dd>`;
    })}`;
  })}</dl> </section>`;
});
const dictionary = {
  "Algorithm - ក្បួនដោះស្រាយ": [
    "ក្បួនដែលកុំព្យូទ័រប្រតិបត្តិតាមដើម្បីដោះស្រាយបញ្ហាឬបំពេញកិច្ចការណាមួយ។​"
  ],
  "Array - អារេ": [
    "បណ្តុំទិន្នន័យដែលមានទម្រង់ជាជួរមានដើមហើយចុង។ វត្ថុទាំងអស់នៅក្នុងអារេមានលំដាប់ថ្នាក់ដែលយើងអាចហៅវាបាន។ ឧទាហរណ៍៖ ដើម្បីហៅវត្ថុទីមួយនៅក្នុងអារេយើងសរសេរ​ <code>array[0]</code>។"
  ],
  "Argument - អាគុយម៉ង់": [
    "ទិន្នន័យឬតម្លៃដែលបញ្ជូលក្នុងអនុគមន៍ដើម្បីធ្វើការគណនា។ ឧទាហរណ៍៖ អនុគមន៍ <code>function add(x, y) {return x + y}</code> ត្រូវការអាគុយម៉ង់ x និង y ដើម្បីគណនារកចម្លើយ។"
  ],
  "Binary - គោលពីរ": [
    "ប្រព័ន្ធរាប់លេខដែលប្រើលេខ 0 និងលេខ 1 ប្រើប្រាស់ដោយកុំព្យូទ័រសម្រាប់មុខងារគ្រប់យ៉ាង។"
  ],
  "Boolean - ប៊ូលីន": [
    "ភាពពិតឬមិនពិត។"
  ],
  "Branch - សាខា": [
    "សំដៅទៅលើការបែកចេញជាសាខាផ្សេងគ្នាក្នុងប្រព័ន្ធគ្រប់គ្រងកំណែកូដ​ (ដូចជាប្រព័ន្ធ git ជាដើម)។",
    "ជម្រើសផ្លូវដែលកូដអាចប្រតិបត្តិតទៀតបាន។"
  ],
  "Break - បញ្ជប់": [
    "ជាទូទៅពាក្យនេះប្រើដើម្បីបញ្ជប់ប្រតិបត្តិ loop។"
  ],
  "Character - តួអក្សរ": [
    "តួអក្សរមួយតួ។ ឧទាហរណ៍៖ A, b, C, d, 0, ក, ខ។"
  ],
  "Code - កូដ": [
    "ភាសាកូដសម្រាប់យកទៅសរសេរបង្កើតកម្មវិធីកុំព្យូទ័រ។ ឧទាហរណ៍៖ C, Java, PHP។ ល។"
  ],
  "Comment - កំណត់ចំណាំ": [
    "កំណត់ចំណាំក្នុងកូដដែលកុំព្យូទ័រនឹងមិនប្រតិបត្តិ។"
  ],
  "Compiler - ប្រព័ន្ធបំលែង": [
    "ប្រព័ន្ធកម្មវិធីសម្រាប់បំលែងកូដពីទម្រង់ដែលមនុស្សអាចអាននិងកែប្រែបានទៅជាទម្រង់កូដដែលកុំព្យូទ័រអាចប្រើប្រាស់បាន។",
    "ប្រព័ន្ធកម្មវិធីដែលមានតួនាទីបំលែងប្រភពកូដ (source code) ទៅជាកូដម៉ាស៊ីន (machine code) សម្រាប់កុំព្យូទ័រប្រតិបត្តិតាម។"
  ],
  "Compiled code - កូដបំលែង": [
    "កូដដែលត្រូវបានបំលែងពីទម្រង់ដើមដែលមនុស្សអាចអាននិងកែប្រែបានទៅជាកូដសម្រាប់កុំព្យូទ័រដំណើរការ។"
  ],
  "Conditional - តាមលក្ខខណ្ឌ": [
    "ការដាក់លក្ខខណ្ឌ។",
    "កូដដែលប្រតិបត្តិនៅពេលកម្មវិធីត្រូវលក្ខខណ្ឌដែលបានកំណត់។"
  ],
  "CPU (central processing unit) - អង្គភាពដំណើរការកណ្តាល": [
    "ជាផ្នែកកុំព្យូទ័រដែលមានមុខងារជាខួរក្បាល"
  ],
  "Decode - ឌីកូដ": [
    "ដោះស្រាយកូដឬពាក្យសម្ងាត់ដែលបានឆ្លងកាត់ការអ៊ិនកូដ (encode)។",
    "ការបម្លែងទម្រង់អក្សរសម្ងាត់ឲ្យទៅជាទម្រង់ដើមវិញ។"
  ],
  "Declaration - ការប្រកាស": [
    "ការប្រកាសគឺជាកូដដែលប្រាប់កុំព្យូទ័រឲ្យតាងអថេរ បង្កើតអនុគមន៍ ឬអង្គភាពផ្សេងៗ។ ឧទាហរណ៍៖ ការប្រកាសអថេរនៅក្នុងភាសា Python អាចមានទម្រង់ <code>x = 1</code> នៅក្នុងភាសា JavaScript អាចមានទម្រង់ <code>let x = 1</code>។​ ល។"
  ],
  "Domain - ឈ្មោះរឺអាស័យដ្ឋានវឹបសាយ": [
    "អាស័យដ្ឋានរបស់គេហៈទំព័រ។ ឧទាហរណ៍៖ google.com"
  ],
  "E-banking - ធនាគារអេឡិចត្រូនិច": [
    "​ការទូទាត់ប្រតិបត្តិការធានាគារផ្សេងៗលើប្រព័ន្ទអ៊ីនធឺណែត។ ឧទាហរណ៍៖ ពេលអ្នកបង់ប្រាក់តាមប្រព័ន្ធបាគង។"
  ],
  "Encode - អ៊ិនកូដ": [
    "​បម្លែងទម្រង់អក្សរទៅជាទម្រង់សម្ងាត់ដែលត្រូវការពាក្យសម្ងាត់ឬរូបមន្តណាមួយដើម្បីឌីកូដ (decode) ​ឬបម្លែងមកទម្រង់ដើមវិញ។"
  ],
  "Environment - បរិស្ថាន": [
    "បរិស្ថានដែលកូដស្ថិននៅក្នុង។ ឧទាហរណ៍៖ បរិស្ថានសម្រាប់តេស្ត បរិស្ថានផ្លូវការ។"
  ],
  "Extraction - ការបន្លាយ": [
    "ការបន្លាយហ្វាល់ឬឯកសារឲ្យវាមានទំហំនិងទម្រង់ដូចដើម។ ឧទាហរណ៍៖ ពេលអ្នក extract ហ្វាល់ប្រភេទ zip។"
  ],
  "Float - លេខទស្សភាគ": [
    "លេខមានក្បៀសអាចជាលេខមានតម្លៃតូចជាងសូន្យ ធំជាងសូន្យ ឬស្មើសូន្យ។ ឧទាហរណ៍៖ -2.10, -103.3, 0, 1.02, 2.3, 35.6, 46.003។​ ល។"
  ],
  "Function - អនុគមន៍": [
    "កូដមានមុខងារជាក់លាក់ដែលមានអ្នកសរសេរកូដអាចហៅមកប្រើនៅកន្លែងផ្សេងៗក្នុងកម្មវិធី។"
  ],
  "Garbage collection - ការប្រមូលសំរាម": [
    "ដំណើរការស្វ័យប្រវត្តិលុបចោលទិន្នន័យក្នុង memory ដែលកម្មវិធីកុំព្យូទ័រលែងត្រូវការ​។"
  ],
  "Initialization - ការកំណត់ដំបូង": [
    "ក្នុងការសរសេរកូដ initialization គឺជាការកំណត់តម្លៃដើមឲ្យអថេរណាមួយ។ ឧទាហរណ៍៖ នៅក្នុងភាសា JavaScript យើងអាចកំណត់តម្លៃឲ្យអថេរ <code>x</code> ដោយសរសេរថា <code>let x = 1</code>។​​ បើយើងហៅអថេរនេះមកប្រើដោយមិនបានកំណត់តម្លៃដំបូង កម្មវិធីមិនអាចដំណើរការបាននោះទេ។"
  ],
  "Integer - លេខគត់": [
    "លេខគត់មិនមានក្បៀសអាចជាលេខមានតម្លៃតូចជាងសូន្យ ធំជាងសូន្យ ឬស្មើសូន្យ។ ឧទាហរណ៍៖ -2, -1, 0, 1, 2, 3, 4។ ល។"
  ],
  "IP address - អាស័យដ្ឋានអាយភី": [
    "លេខសំគាល់ពិសេសសម្រាប់ឧបករណ៍អេឡិចត្រូនិកទាំងឡាយដែលអាចភ្ជាប់អ៊ីនធឺណិតបាន។ ឧទាហរណ៍៖ 192.168.0.1។"
  ],
  "Loop - រង្វិលជុំ": [
    "កូដដែលដំណើរការវិលជុំម្តងហើយម្តងទៀតរហូតកម្មវិធីត្រូវលក្ខខណ្ឌណាមួយដែលបានកំណត់។"
  ],
  "Machine code - កូដម៉ាស៊ីន": [
    "កូដដែលមានទម្រង់ប្រព័ន្ធគោលពីរ (0 និង 1) ដែលខួរក្បាលរបស់កុំព្យូទ័រ (CPU) អាចប្រើប្រាស់បានដើម្បីបំពេញមុខងារផ្សេងៗ។"
  ],
  "Network - បណ្ដាញ": [
    "ប្រព័ន្ធភ្ជាប់ឧបករណ៍ផ្សេងៗដែលមានទំនាក់ទំនងជាមួយគ្នា។ ឧទាហរណ៍៖ បណ្តាញអ៊ីនធឺណិត។"
  ],
  "Operating system - ប្រព័ន្ធប្រតិបត្តិការ": [
    "ប្រព័ន្ធប្រតិបត្តិការ សរសេរកាត់ថា OS ជាប្រព័ន្ធកុំព្យូទ័រដែលសម្រួលទៅដល់ការប្រើប្រាស់កុំព្យូទ័រដើម្បីបំពេញមុខងារផ្សេងៗ។ ឧទាហរណ៍៖​ Windows, MacOS, Android។ ល។"
  ],
  "Package - កញ្ចប់កូដ": [
    "កញ្ចប់កូដដែលមានមុខងារពិសេសសម្រាប់បំពេញតួនាទីផ្សេងៗ។ ឧទាហរណ៍៖ កញ្ចប់ <code>requests</code> នៅក្នុងភាសា Python សម្រួលទៅដល់ការផ្ញើសំណើទៅកាន់​ URL ផ្សេងៗ។"
  ],
  "Peripheral - គ្រឿងឧបករណ៍កុំព្យូទ័រ": [
    "ឧបករណ៍ដែលភ្ជាប់ជាមួយនឹងកុំព្យូទ័រដើម្បីសម្រួលទៅដល់ការប្រើប្រាស់វា ឬសម្រាប់បន្ថែមមុខងារផ្សេងៗ។ ឧទាហរណ៍៖ mouse, keyboard, monitor។ ល។"
  ],
  "Return - លទ្ធផល": [
    "លទ្ធផលដែលទទួលបានពីអនុគមន៍។​ ឧទាហរណ៍៖ <code>return x + y</code>។"
  ],
  "Source code - ប្រភពកូដ": [
    "ប្រភពរបស់កូដដែលកុំព្យូទ័រត្រូវការដើម្បីដំឡើងកម្មវិធីឬធ្វើឲ្យកម្មវិធីដំណើរការ។",
    "កូដដែលមនុស្សអាចអានបាននិងកែប្រែបានឬកូដដែលមិនទាន់បានធ្វើការបំលែងទៅជាទម្រង់កូដដែលកុំព្យូទ័រត្រូវការដើម្បីដំណើរការ។"
  ],
  "Syntax - វាក្យសម្ពន្ធ": [
    "ជាក្បួនសម្រាប់សរសេរកូដដើម្បីឲ្យមានដំណើរការត្រឹមត្រូវ ប្រៀបបានទៅនឹងវេយ្យាករណ៍ក្នុងភាសាខ្មែរ។ ឧទាហរណ៍៖​ នៅក្នុងភាសា C យើងសរសេរ <code>printf('hello')</code> ប៉ុន្តែក្នុងភាសា Python យើងសរសេរ <code>print 'hello'</code>"
  ],
  "Type - ប្រភេទ": [
    "នៅក្នុងការសរសេរកូដ ទិន្នន័យទាំងអស់មានប្រភេទ​។ ឧទាហរណ៍៖ ប្រភេទអក្សរ​ (string), ប្រភេទលេខ​ (integer)។ ល។"
  ],
  "User experience - បទពិសោធន៍អ្នកប្រើប្រាស់": [
    "សរសេរកាត់ថា​ UX វាជាបទពិសោធន៍របស់អ្នកប្រើប្រាស់កម្មវិធីកុំព្យូទ័រផ្សេងៗ។ ឧទាហរណ៍៖ នៅពេលអ្នកប្រើប្រាស់ចង់ធ្វើសកម្មភាពអ្វីមួយ គាត់ត្រូវឆ្លងកាត់ជំហានអ្វីខ្លះ។"
  ],
  "User interface - ប្រព័ន្ធអន្តរកម្មអ្នកប្រើប្រាស់": [
    "សរសេរកាត់ថា​ UI វាជារូបរាងនិងទម្រង់របស់កម្មវិធីកុំព្យូទ័រដែលអ្នកប្រើប្រាស់ធ្វើអន្តរកម្មផ្សេងៗដូចជាការចុចនិងសរសេរ។​ ឧទាហរណ៍៖ ប៊ូតុងនៅលើគេហទំព័រ។"
  ],
  "Variable - អថេរ": [
    "ពាក្យឬតួអក្សរសម្រាប់សម្គាល់ឲ្យផ្នែកមួយនៃ memory ដែលយើងអាចហៅវាមកពិនិត្យមើលទិន្នន័យឬកែប្រែវាបាន។ ឧទាហរណ៍៖ <code>x = 1</code>។"
  ],
  "Web browser - កម្មវិធីរុករកបណ្តាញអ៊ីនធឺណិត": [
    "កម្មវិធីសម្រាប់បើកគេហៈទំព័រនិងឯកសារផ្សេងៗដែលមាននៅលើបណ្តាញអ៊ីនធឺណិត។ ឧទាហរណ៍៖ Chrome, Firefox, Opera។ ល។"
  ],
  // "Executable file - ហ្វាល់អាចប្រតិបត្តិបាន": [
  //   "ហ្វាល់ដែលអ្នកប្រើប្រាស់កំុំព្យូទ័រអាចបើកបានដំណើរការលើកុំព្យូទ័របាន។ ឧទាហរណ៍៖ 'notepad.exe'"
  // ],
  // "Parameter - អថេរ": [
  //   "សម្រាប់អត្ថន័យអាយធីជាអថេរពិសេសមួយដូច Variable ដែរតែគេប្រើវាក្នុងអនុគមន៍(Function)។"
  // ],
  // "Console - ខនសូល": [
  //   "ជាកន្លែងសម្រាប់ អ្នកអាយធីបញ្ជារលើកុំព្យូទ័រជំនួសអោយការប្រើ Mouse ដើម្បីចុច សម្រាប់អ្នកអាជីពអាយធីគេប្រើច្រើន"
  // ],
  // "Pre-processor - ដំណើររត្រៀម": [
  //   "ក្នុងភាសាអាយធី សម្ដៅដល់ប្រព័ន្ធកម្មវិធីដែលធ្វើការគណនាមុននឹងយកទៅសង្វាក់បន្ទាប់ៗ"
  // ],
  // "CPU - ស៊ីភីយូ": [
  //   "ខួរក្បាលរបស់កុំព្យូទ័រ សូមគត់សំគាល់ផងដែរថាក្នុងមួយ CPU Core ក្នុងពេលតែមួយអាចធ្វើការបានពីររឺហៅថា២ threads ដូចច្នេះបើកុំព្យូទ័រមួយមាន 8 cores(មានខួរក្បាល៨) បានសេចក្ដីថាធ្វើការក្នុងពេលតែមួយមានកម្លាំងគណនា ១៦ threads ឯនោះ។"
  // ],
  // "RAM - រ៉េម": [
  //   "ជាអង្គចងចាំបណ្ដោះអាសន្ន សូមបញ្ជាក់ថាក្នុងប្រព័ន្ធកុំព្យូទ័រការចងចាំមាន២យ៉ាងធំៗគឺមួយកត់ទុកក្នុង hard disk មួយទៀតគឺរ៉េម(RAM) នេះឯងវាមានល្បឿនលឿនតែបញ្ហាត្រង់ពេលដាច់ភ្លើងរឺកុំព្យូទ័ររលត់និងបាត់ការចងចាំ"
  // ],
  // "CPU (Instruction) - កូដសម្រាប់ CPU": [
  //   "សម្ដៅដល់កូដទាំងឡាយដែល CPU អានយល់ ក្នុងភាសាអាយធីកូដដែលអ្នកអភិវឌ្ឃប្រព័ន្ធកម្មវិធីសរសេររួចត្រូវបំលែងរហូតដល់ CPU Instruction នេះឯងទើបកុំព្យូទ័រដឹងថាត្រូវធ្វើការអ្វីរឺគណនាអ្វីដែលមនុស្សចង់បាន។"
  // ],
  // "Input - បញ្ចូល": [
  //   "សម្ដៅដល់ការបញ្ចូលទិន្នន័យអោយទៅកុំព្យូទ័រ"
  // ],
  // "Output - បញ្ចេញ": [
  //   "សម្ដៅដល់ការបញ្ចេញទិន្នន័យមកពីកុំព្យូទ័រ"
  // ],
  // "Switch Case - លក្ខខណ្ឌច្រើនករណី": [
  //   "ប្រើក្នុងការសរសេរកូដ Switch Case ជាប្រភេទ `អថេរ` អាចមានតម្លៃច្រើនករណីស្រដៀងពិន្ទុសិស្សម្នាក់បើសិនក្រោម ៥០ធ្លាក់ បើត្រឹម៥០ជាប់ លើស៥០ធម្យម ...។"
  // ],
  // "Multidimensional Array - `អារ៉េ`មានធាតុជា`អារ៉េ`": [
  //   "ដំបូងសូមបកស្រាយពាក្យថា`អារ៉េ` សម្ដៅដល់ទិន្នន័យច្រើនធាតុព្រោះគេផ្ដុំធាតុដាក់តំរៀបគ្នាជាជួរ រីឯពាក្យ `Multidimension` ប្រែថាច្រើន សរុបសេចក្ដី `អារ៉េ`មានធាតុជា `អារ៉េ`។"
  // ],
  "Function Call": [],
  "Function Definition": [],
  "Standard library": [],
  "SDK": [],
  "Return Type": [],
  "Void": [],
  "Algorithm": [],
  "programming": [],
  "serialize": [],
  "deserialize": [],
  "CICD": [],
  "Deploy": [],
  "Mail Server": [],
  "Protocol": [],
  "Cached": [],
  "DNS": [],
  "Cpanel": [],
  "Prototype": [],
  "Buffer": [],
  "Network Socket": [],
  "SQL": [],
  "Command": [],
  "Terminal": [],
  "Route": [],
  "Horizontal Scale": [],
  "Vertical Scaling": [],
  "NOSQL Database": [],
  "Relational Database": [],
  "Database": [],
  "PDF": [],
  "Read File": [],
  "Write File": [],
  "Upload": [],
  "Download": [],
  "UDP Connection": [],
  "TCP Connection": [],
  "Connection Pool": [],
  "Persistence Connection": [],
  "Session": [],
  "JSON": [],
  "JWT Token": [],
  "MessagePack": [],
  "Microservice": [],
  "Monolithic": [],
  "WIFI": [],
  "Access Point (AP)": [],
  "Authorization": [],
  "Authentication": [],
  "Accounting": [],
  "AAA - (Authentication-Authorization-Accounting": [],
  "LDAP": [],
  "WAMP": [],
  "Apache Foundation": [],
  "UUID": [],
  "JavaScript": [],
  "HTML": [],
  "PHP": [],
  "Scala": [],
  "Rust": [],
  "Lua": [],
  "Python": [],
  "ASP": [],
  "Nodejs": [],
  "CSS": [],
  "XML": [],
  "Web Service": [],
  "Web Server": [],
  "HTTP Server": [],
  "Proxy": [],
  "Virtual Host": [],
  "SSL": [],
  "Git": [],
  "Github": [],
  "Gitlab": [],
  "SVN": [],
  "Version Control": [],
  "Byte": [],
  "Bit": [],
  "Lazy Load": [],
  "Package Data": [],
  "Firewall": [],
  "DDoS": [],
  "DevOps Engineer": [],
  "Test Pipeline": [],
  "Automation Tool": [],
  "Docker": [],
  "Cloud": [],
  "High Work Load": [],
  "Performance": [],
  "Access": [],
  "Internet Service Provider(ISP)": [],
  "LEFT JOIN": [],
  "RIGHT JOIN": [],
  "OUTER JOIN": [],
  "INNER JOIN": [],
  "Bandwidth": [],
  "Epoch Time": [],
  "Unix time": [],
  "Documentation": [],
  "User Manual": [],
  "DROP Database": [],
  "Delete Table": [],
  "Truncate Table": [],
  "Search Engine Optimization(SEO)": [],
  "Search Engine": [],
  "Message Broker": [],
  "Message Queue": [],
  "Static Type": [],
  "Functional Programming Language": [],
  "Strong Type": [],
  "B-tree": [],
  "Database Indexing": [],
  "HTTP Status Code": [],
  "Lazy Loader": [],
  "Repository": [],
  "Kernel": [],
  "Code Editor": [],
  "Unit Test": [],
  "Black Box Tester": [],
  "Gray Box Tester": [],
  "White Box Tester": [],
  "Database Replication": [],
  "Load Balance": [],
  "Virtual Private Network(VPN)": [],
  "GraphQL": [],
  "Apache Hadoop": [],
  "File System": [],
  "BSON": [],
  "Stateless": [],
  "Statefull": []
};
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section_footer.svelte-lrvl29{width:100%;margin:2.5rem auto 3.5rem auto;padding:1.5rem 0;display:inline-flex;justify-content:center;align-items:center}",
  map: null
};
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dictionary_keys = Array.from(Object.keys(dictionary)).sort();
  dictionary_keys = dictionary_keys.filter((item) => dictionary[item].length > 0);
  const first_char_array = dictionary_keys.map((item) => {
    return item[0];
  });
  const anchor_keys = dictionary_keys.map((key, index) => {
    if (index !== 0) {
      if (key[0].toUpperCase() !== dictionary_keys[index - 1][0].toUpperCase()) {
        return key;
      } else
        return "";
    } else if (index === 0) {
      return key;
    }
  }).filter((item) => item !== "");
  const types = {
    dictionary_type: typeof dictionary,
    dictionary_keys_type: typeof dictionary_keys,
    anchor_keys_type: typeof anchor_keys
  };
  $$result.css.add(css);
  return `${validate_component(SEOHead, "SEOHead").$$render($$result, {}, {}, {})} ${validate_component(SectionTop, "SectionTop").$$render($$result, {}, {}, {})} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(AlphabetNav, "AlphabetNav").$$render(
    $$result,
    {
      alphabet_array: removeDuplicates(first_char_array)
    },
    {},
    {}
  )} ${validate_component(Dictionary, "Dictionary").$$render(
    $$result,
    {
      types,
      dictionary,
      dictionary_keys,
      anchor_keys
    },
    {},
    {}
  )} <footer class="section_footer svelte-lrvl29" data-svelte-h="svelte-12pcrs7"><a href="https://masayashida.com">masayashida.com</a> </footer>`;
});
export {
  Page as default
};
