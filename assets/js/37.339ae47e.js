(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{394:function(e,t,r){"use strict";r.r(t);var n=r(1),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Write our own .vimrc!")]),e._v(" "),r("p",[e._v("Following the "),r("a",{attrs:{href:"vim_commands"}},[e._v("last blog")]),e._v(" about how to use Vim w/o any customization or plugin, this blog talks about how to customize Vim for better personal usage by writing a "),r("code",[e._v(".vimrc")]),e._v(".")]),e._v(" "),r("p",[e._v("In Unix systems, we could create a hidden file (starting with "),r("code",[e._v(".")]),e._v(") "),r("code",[e._v("vim ~/.vimrc")]),e._v(" for Vim or "),r("code",[e._v("vim ~/.config/nvim/init.vim")]),e._v(". In Windows, we set value of environmental variable "),r("code",[e._v("$MYVIMRC")]),e._v(" and "),r("code",[e._v("vim $MYVIMRC")]),e._v(".")]),e._v(" "),r("p",[e._v("In "),r("code",[e._v(".vimrc")]),e._v(", we don't need "),r("code",[e._v(":")]),e._v(".")]),e._v(" "),r("p",[e._v("There are basically 4 parts in a "),r("code",[e._v(".vimrc")]),e._v(":")]),e._v(" "),r("ol",[r("li",[r("code",[e._v("Settings")]),e._v(" such as line numbers and colorscheme. To see what can be set, search by "),r("code",[e._v(":h option-list")])]),e._v(" "),r("li",[r("code",[e._v("Mappings")]),e._v(" such as "),r("code",[e._v("jj")]),e._v(" for "),r("code",[e._v("<Esc>")])]),e._v(" "),r("li",[r("code",[e._v("Plugins")]),e._v("' installations and settings")]),e._v(" "),r("li",[r("code",[e._v("Vimscript")]),e._v(" defines functions to streamline common tasks such as setting a title in a Python file")])]),e._v(" "),r("h2",{attrs:{id:"mappings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mappings"}},[e._v("#")]),e._v(" Mappings")]),e._v(" "),r("p",[e._v("To map some key, say, "),r("code",[e._v("dd")]),e._v(" to "),r("code",[e._v("\\")]),e._v(", we could do "),r("code",[e._v("map \\ dd")]),e._v(". We could then "),r("code",[e._v("\\")]),e._v(" to delete the current line.")]),e._v(" "),r("p",[e._v("To map in "),r("strong",[e._v("only one mode")]),e._v(", we could do:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("nm[ap]")]),e._v(": map in "),r("em",[e._v("normal")]),e._v(" mode")]),e._v(" "),r("li",[r("code",[e._v("im[ap]")]),e._v(": map in "),r("em",[e._v("insert")]),e._v(" mode")]),e._v(" "),r("li",[r("code",[e._v("vm[ap]")]),e._v(": map in "),r("em",[e._v("visual")]),e._v(" mode")]),e._v(" "),r("li",[r("code",[e._v("cm[ap]")]),e._v(": map in "),r("em",[e._v("command")]),e._v(" mode")])]),e._v(" "),r("p",[e._v("The following enables "),r("code",[e._v("<C-d>")]),e._v(" to delete a line under both "),r("em",[e._v("normal")]),e._v(" and "),r("em",[e._v("insert")]),e._v(" modes:")]),e._v(" "),r("div",{staticClass:"language-vim line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-vim"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("nmap \\ dd\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("imap \\ "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Esc"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("ddi\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("To unmap "),r("code",[e._v("dd")]),e._v(" from "),r("code",[e._v("\\")]),e._v(", do "),r("code",[e._v("unmap \\")]),e._v(".")]),e._v(" "),r("p",[e._v("If we define:")]),e._v(" "),r("div",{staticClass:"language-vim line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-vim"}},[r("code",[e._v("map \\ dd\nmap "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" \\\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("Because Vim mapping is "),r("strong",[e._v("recursive")]),e._v(" by default, we could then "),r("code",[e._v("-")]),e._v(" to delete the current line.")]),e._v(" "),r("p",[e._v("Because some plugins define new mappings, there are cases when recursive mappings bring in accidental conflicts. Thus, we should "),r("strong",[e._v("always use non-recursive")]),e._v(" over recursive mappings.")]),e._v(" "),r("p",[e._v("To create a "),r("strong",[e._v("no")]),e._v("n-"),r("strong",[e._v("re")]),e._v("cursive mapping under "),r("strong",[e._v("n")]),r("em",[e._v("ormal")]),e._v(" mode, do "),r("code",[e._v("nnoremap <space> zz")]),e._v(", after which pressing "),r("code",[e._v("Space")]),e._v(" centers current line on the screen.")]),e._v(" "),r("p",[e._v("To summarize, these are "),r("strong",[e._v("non-recursive")]),e._v(" mappings:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("no[remap]")]),e._v(": map in all modes")]),e._v(" "),r("li",[r("code",[e._v("nn[oremap]")]),e._v(": map in "),r("em",[e._v("normal")]),e._v(" mode")]),e._v(" "),r("li",[r("code",[e._v("ino[remap]")]),e._v(": map in "),r("em",[e._v("insert")]),e._v(" mode")]),e._v(" "),r("li",[r("code",[e._v("vn[oremap]")]),e._v(": map in "),r("em",[e._v("visual")]),e._v(" mode")]),e._v(" "),r("li",[r("code",[e._v("cno[remap]")]),e._v(": map in "),r("em",[e._v("command")]),e._v(" mode")])]),e._v(" "),r("h3",{attrs:{id:"leader-key-see-explanation-from-learn-vimscript-the-hard-way"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#leader-key-see-explanation-from-learn-vimscript-the-hard-way"}},[e._v("#")]),e._v(" Leader Key (See "),r("a",{attrs:{href:"https://learnvimscriptthehardway.stevelosh.com/chapters/06.html#leader",target:"_blank",rel:"noopener noreferrer"}},[e._v("explanation"),r("OutboundLink")],1),e._v(" from "),r("a",{attrs:{href:"https://learnvimscriptthehardway.stevelosh.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn Vimscript the Hard Way"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("p",[e._v("After we define a "),r("code",[e._v("<leader>")]),e._v(" key, we could define mappings combining the leader key:")]),e._v(" "),r("div",{staticClass:"language-vim line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-vim"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" mapleader"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("','")]),e._v("\ninoremap "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("leader"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("w")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Esc"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("w")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("cr")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("The leader key is "),r("code",[e._v(",")]),e._v(" and we could now "),r("code",[e._v(",w")]),e._v(" to save.")]),e._v(" "),r("p",[e._v("p.s.: "),r("code",[e._v("<cr>")]),e._v(" is carriage return ("),r("code",[e._v("<Enter>")]),e._v(" or "),r("code",[e._v("<Return>")]),e._v(").")]),e._v(" "),r("h2",{attrs:{id:"plugins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[e._v("#")]),e._v(" Plugins")]),e._v(" "),r("p",[e._v("We can use a plugin manager to manage plugins which would make Vim more customizable and powerful.")]),e._v(" "),r("h3",{attrs:{id:"plugin-manager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#plugin-manager"}},[e._v("#")]),e._v(" Plugin Manager")]),e._v(" "),r("p",[e._v("There are many plugin managers for Vim/NeoVim, I switched from singled-threaded "),r("a",{attrs:{href:"https://github.com/VundleVim/Vundle.vim",target:"_blank",rel:"noopener noreferrer"}},[r("em",[e._v("Vundle")]),r("OutboundLink")],1),e._v(" to multi-threaded "),r("a",{attrs:{href:"https://github.com/junegunn/vim-plug",target:"_blank",rel:"noopener noreferrer"}},[r("em",[e._v("vim-plug")]),r("OutboundLink")],1),e._v(" since installing and updating plugins in parallel save much time.")]),e._v(" "),r("h3",{attrs:{id:"plugin-installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#plugin-installation"}},[e._v("#")]),e._v(" Plugin installation")]),e._v(" "),r("p",[e._v("To add a plugin using "),r("a",{attrs:{href:"https://github.com/junegunn/vim-plug",target:"_blank",rel:"noopener noreferrer"}},[e._v("vim-plug"),r("OutboundLink")],1),e._v(", just put the Github repo after "),r("code",[e._v("Plug")]),e._v(", between call begin and end:")]),e._v(" "),r("div",{staticClass:"language-vim line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-vim"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("call")]),e._v(" plug#"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("begin")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'~/.vim/plugged'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nPlug "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'mhinz/vim-startify'")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("call")]),e._v(" plug#"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("end")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("h3",{attrs:{id:"how-to-search-for-plugins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-search-for-plugins"}},[e._v("#")]),e._v(" How to search for plugins")]),e._v(" "),r("ol",[r("li",[e._v("You know what you need, then search on Google")]),e._v(" "),r("li",[e._v("You don't know what you need, but randomly browse on "),r("a",{attrs:{href:"https://vimawesome.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("vimawesome"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"useful-plugins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#useful-plugins"}},[e._v("#")]),e._v(" Useful Plugins")]),e._v(" "),r("p",[e._v("Below are some useful plugins, which you can learn how to use through these "),r("a",{attrs:{href:"https://www.imooc.com/learn/1129",target:"_blank",rel:"noopener noreferrer"}},[e._v("videos in Chinese"),r("OutboundLink")],1),e._v(", searching on Google, or reading corresponding documentation:")]),e._v(" "),r("ul",[r("li",[e._v("start "),r("code",[e._v("nvim")]),e._v(" with a fancy screen: "),r("a",{attrs:{href:"https://github.com/mhinz/vim-startify",target:"_blank",rel:"noopener noreferrer"}},[e._v("vim-startify"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("customize your "),r("code",[e._v("colorscheme")]),e._v(" to your favorite: "),r("code",[e._v("colo[rscheme] {your favorite}")]),e._v(". Personally I liked: "),r("a",{attrs:{href:"https://github.com/morhetz/gruvbox",target:"_blank",rel:"noopener noreferrer"}},[e._v("gruvbox"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/w0ng/vim-hybrid",target:"_blank",rel:"noopener noreferrer"}},[e._v("hybrid"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/altercation/vim-colors-solarized",target:"_blank",rel:"noopener noreferrer"}},[e._v("solarized"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/tomasr/molokai",target:"_blank",rel:"noopener noreferrer"}},[e._v("molokai"),r("OutboundLink")],1),e._v(", etc.")]),e._v(" "),r("li",[e._v("beautify status and tab lines: "),r("a",{attrs:{href:"https://github.com/vim-airline/vim-airline",target:"_blank",rel:"noopener noreferrer"}},[e._v("vim-airline"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("display indentation levels with thin vertical lines: "),r("a",{attrs:{href:"https://github.com/yggdroot/indentline",target:"_blank",rel:"noopener noreferrer"}},[e._v("indentline"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("file explorer as tree: "),r("a",{attrs:{href:"https://github.com/scrooloose/nerdtree",target:"_blank",rel:"noopener noreferrer"}},[e._v("nerdtree"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("fuzzy file finder: 1. "),r("a",{attrs:{href:"https://github.com/junegunn/fzf",target:"_blank",rel:"noopener noreferrer"}},[e._v("fzf"),r("OutboundLink")],1),e._v(" is a really good command-line fuzzy finder, and in Vim you could use "),r("a",{attrs:{href:"https://github.com/junegunn/fzf.vim",target:"_blank",rel:"noopener noreferrer"}},[e._v("fzf.vim"),r("OutboundLink")],1),e._v(". 2. more traditional and is less powerful: "),r("a",{attrs:{href:"https://github.com/ctrlpvim/ctrip.vim",target:"_blank",rel:"noopener noreferrer"}},[e._v("ctrip.vim"),r("OutboundLink")],1),e._v(". I prefer "),r("code",[e._v("fzf")]),e._v(" b/c of its blazing speed.")]),e._v(" "),r("li",[e._v("jump to any character instantly on screen: "),r("a",{attrs:{href:"https://github.com/easymotion/vim-easymotion",target:"_blank",rel:"noopener noreferrer"}},[e._v("vim-easymotion"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("overview of file structure: "),r("a",{attrs:{href:"https://github.com/majutsushi/tagbar",target:"_blank",rel:"noopener noreferrer"}},[e._v("majutsushi/tagbar"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("change, delete, or add quotes/parentheses: "),r("a",{attrs:{href:"https://github.com/tpope/vim-surround",target:"_blank",rel:"noopener noreferrer"}},[e._v("vim-surround"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("find and replace in multiple files: "),r("a",{attrs:{href:"https://github.com/brooth/far.vim",target:"_blank",rel:"noopener noreferrer"}},[e._v("far.vim"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("highlight different words simultaneously: "),r("a",{attrs:{href:"https://github.com/lfv89/vim-interestingwords",target:"_blank",rel:"noopener noreferrer"}},[e._v("lfv89/vim-interestingwords"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("code completion: 1. "),r("a",{attrs:{href:"https://github.com/neoclide/coc.nvim",target:"_blank",rel:"noopener noreferrer"}},[e._v("neoclide/coc.nvim"),r("OutboundLink")],1),e._v(" is a new tool by a Chinese frontend pro but needs to install nodejs before installation. 2. "),r("a",{attrs:{href:"https://github.com/Shougo/deoplete.nvim",target:"_blank",rel:"noopener noreferrer"}},[e._v("Shougo/deoplete.nvim"),r("OutboundLink")],1),e._v(" does a similar job but I feel the user experience of coc is better")]),e._v(" "),r("li",[e._v("format code: "),r("a",{attrs:{href:"https://github.com/sbdchd/neoformat",target:"_blank",rel:"noopener noreferrer"}},[e._v("sbdchd/neoformat"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("lint code: "),r("a",{attrs:{href:"https://github.com/dense-analysis/ale",target:"_blank",rel:"noopener noreferrer"}},[e._v("w0rp/ale"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("comment code: "),r("a",{attrs:{href:"https://github.com/tpope/vim-commentary",target:"_blank",rel:"noopener noreferrer"}},[e._v("tpope/vim-commentary"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("easily align code: "),r("a",{attrs:{href:"https://github.com/junegunn/vim-easy-align",target:"_blank",rel:"noopener noreferrer"}},[e._v("junegunn/vim-easy-align"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("easier look on parentheses: "),r("a",{attrs:{href:"https://github.com/luochen1990/rainbow",target:"_blank",rel:"noopener noreferrer"}},[e._v("luochen1990/rainbow"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("These are great plugings to combine Git and Vim:")]),e._v(" "),r("ul",[r("li",[e._v("the best Git wrapper in Vim: "),r("a",{attrs:{href:"https://github.com/tpope/vim-fugitive",target:"_blank",rel:"noopener noreferrer"}},[e._v("tpope/vim-fugitive"),r("OutboundLink")],1),e._v(" could do the following commands: "),r("code",[e._v(":G[status]")]),e._v(", "),r("code",[e._v(":Gblame")]),e._v(", "),r("code",[e._v(":Gedit")]),e._v(" for a try")]),e._v(" "),r("li",[e._v("git diff in the gutter (sign column): "),r("a",{attrs:{href:"https://github.com/airblade/vim-gitgutter",target:"_blank",rel:"noopener noreferrer"}},[e._v("airblade/vim-gitgutter"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("git commit browser: "),r("a",{attrs:{href:"https://github.com/junegunn/gv.vim",target:"_blank",rel:"noopener noreferrer"}},[e._v("junegunn/gv.vim"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"plugin-customization"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#plugin-customization"}},[e._v("#")]),e._v(" Plugin customization")]),e._v(" "),r("p",[e._v("To customize installed plugins, please read the official Github README(linked above for each plugin I recommended) and customize according to your needs.")]),e._v(" "),r("h2",{attrs:{id:"my-vimrc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#my-vimrc"}},[e._v("#")]),e._v(" My .vimrc")]),e._v(" "),r("p",[e._v("This is "),r("a",{attrs:{href:"https://github.com/franklinqin0/dotfiles/blob/master/nvim/init.vim",target:"_blank",rel:"noopener noreferrer"}},[e._v("my "),r("code",[e._v("init.vim")]),r("OutboundLink")],1),e._v(" for NeoVim.")]),e._v(" "),r("h2",{attrs:{id:"useful-pages"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#useful-pages"}},[e._v("#")]),e._v(" Useful Pages")]),e._v(" "),r("ul",[r("li",[e._v("a clean and well-documented "),r("code",[e._v(".vimrc")]),e._v(":"),r("a",{attrs:{href:"https://github.com/amix/vimrc",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Ultimate Vim configuration: vimrc"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("a Vim rookie could use "),r("a",{attrs:{href:"https://spacevim.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SpaceVim"),r("OutboundLink")],1),e._v(", but personally I hate black box")]),e._v(" "),r("li",[e._v("a really good book if you want to read more about Vim: "),r("a",{attrs:{href:"https://isidore.co/calibre/get/pdf/5334",target:"_blank",rel:"noopener noreferrer"}},[e._v("Practical Vim"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"coda"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#coda"}},[e._v("#")]),e._v(" Coda")]),e._v(" "),r("p",[e._v("While so many editors/IDE's became favorable and extinct, Vim has been the world's best editor over almost 30 years. Vim/NeoVim are used by so many developers and the community is actively pushing forward many new features and plugins. Remeber: it is never a waste of time to learn Vim, and practice makes perfect.")]),e._v(" "),r("p",[e._v("This is the 2nd of totally 2 blogs I wrote about Vim. In the "),r("a",{attrs:{href:"Tmux"}},[e._v("next blog")]),e._v(", I will write about "),r("code",[e._v("tmux")]),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);