(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{571:function(e,t,s){"use strict";s.r(t);var a=s(2),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("I write this blog both to spread the efficiency of "),s("code",[e._v("tmux")]),e._v(" and keep some useful notes for myself.")]),e._v(" "),s("h2",{attrs:{id:"why-tmux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-tmux"}},[e._v("#")]),e._v(" Why tmux")]),e._v(" "),s("p",[e._v("From "),s("code",[e._v("man tmux")]),e._v(":")]),e._v(" "),s("blockquote",[s("p",[s("code",[e._v("tmux")]),e._v(" is short for "),s("code",[e._v("t")]),e._v("erminal "),s("code",[e._v("m")]),e._v("ultipl"),s("code",[e._v("ex")]),e._v("er: it enables a number of terminals to be created, accessed, and controlled from a single screen.")])]),e._v(" "),s("p",[e._v("Often times we lose the screen once we close a terminal window. However, in tmux, "),s("strong",[e._v("each session is persistent")]),e._v(" and will "),s("strong",[e._v("survive accidental disconnection")]),e._v(". Thus, we could detach from a session before bed. A snapshot of terminal is "),s("strong",[e._v("auto saved and revived")]),e._v(" the next morning when we reattach to it.")]),e._v(" "),s("h2",{attrs:{id:"notes-before-proceeding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes-before-proceeding"}},[e._v("#")]),e._v(" Notes before Proceeding")]),e._v(" "),s("ul",[s("li",[e._v("see "),s("a",{attrs:{href:"vim_commands#notes-before-proceeding"}},[e._v("Notes before Proceeding in How to Use Vim")])]),e._v(" "),s("li",[e._v("read man page of tmux: "),s("code",[e._v("man tmux")]),e._v(" (don't worry if you can't understand even half of it by first glance, you'd be a genius if you do, and even a genius needs to read again, learn and practice)")]),e._v(" "),s("li",[e._v("watch some videos online to demo tmux usage")])]),e._v(" "),s("h2",{attrs:{id:"my-previous-experience"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#my-previous-experience"}},[e._v("#")]),e._v(" My Previous Experience")]),e._v(" "),s("p",[e._v("I was introduced to "),s("code",[e._v("tmux")]),e._v(" almost the same time as "),s("code",[e._v("Vim")]),e._v(" by a roommate. I found it useful to open multiple sessions and windows on a screen, saving troubles from switching terminal tabs, but I was too busy and lazy to learn new tools with heavy workload at school.")]),e._v(" "),s("h2",{attrs:{id:"install-tmux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-tmux"}},[e._v("#")]),e._v(" Install tmux")]),e._v(" "),s("p",[e._v("The following steps are quite similar to "),s("RouterLink",{attrs:{to:"/views/vim_commands.html#install-and-upgrade-neovim"}},[e._v("those of Vim")]),e._v(".")],1),e._v(" "),s("p",[e._v("For my Mac, I use "),s("code",[e._v("brew install tmux")]),e._v(" to install tmux and "),s("code",[e._v("brew upgrade tmux")]),e._v(" to upgrade it.")]),e._v(" "),s("p",[e._v("For Unix/Linux systems, could use the the corresponding package manager to install and upgrade.")]),e._v(" "),s("p",[e._v("For windows, could install Cygwin/Cmder or a Linux distro in MS store and use the terminal.")]),e._v(" "),s("h2",{attrs:{id:"terminologies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#terminologies"}},[e._v("#")]),e._v(" Terminologies")]),e._v(" "),s("p",[e._v("Tmux is a "),s("em",[e._v("client-server architecture")]),e._v(". A "),s("code",[e._v("server")]),e._v(" hosts tmux sessions and a "),s("code",[e._v("client")]),e._v(" displays them on screen. When the client loses connection to server, the sessions are still stored on server and displayed when reattached.")]),e._v(" "),s("p",[e._v("A "),s("code",[e._v("session")]),e._v(" has one or more windows linked to it.")]),e._v(" "),s("p",[e._v("A "),s("code",[e._v("window")]),e._v(" occupies the entire screen and may be split into rectangular "),s("em",[e._v("panes")]),e._v(".")]),e._v(" "),s("p",[e._v("A "),s("code",[e._v("pane")]),e._v(" is a separate pseudo terminal.")]),e._v(" "),s("h2",{attrs:{id:"basic-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-commands"}},[e._v("#")]),e._v(" Basic Commands")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("tmux")]),e._v(": start tmux")]),e._v(" "),s("li",[s("code",[e._v("tmux new -s {session_name}")]),e._v(": create a named session")]),e._v(" "),s("li",[s("code",[e._v("tmux a[ttach]")]),e._v(": restore a session (reattach to detached session)")]),e._v(" "),s("li",[s("code",[e._v("tmux attach-session -t {session_name}")]),e._v(": attach to a named session")]),e._v(" "),s("li",[s("code",[e._v("tmux kill-session -t {session_name}")]),e._v(": destroy a named session")]),e._v(" "),s("li",[s("code",[e._v("tmux ls")]),e._v(": display all sessions")])]),e._v(" "),s("p",[e._v("To input tmux instead of shell commands, a "),s("strong",[e._v("prefix")]),e._v(" (by default "),s("code",[e._v("<C-b>")]),e._v(") is needed:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{prefix} d")]),e._v(": detach from current session")]),e._v(" "),s("li",[s("code",[e._v("{prefix } %")]),e._v(": split pane vertically")]),e._v(" "),s("li",[s("code",[e._v('{prefix } "')]),e._v(": split pane horizontally")]),e._v(" "),s("li",[s("code",[e._v("{prefix } $")]),e._v(": rename session")]),e._v(" "),s("li",[s("code",[e._v("{prefix } ,")]),e._v(": rename window")])]),e._v(" "),s("h2",{attrs:{id:"write-our-own-tmux-conf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write-our-own-tmux-conf"}},[e._v("#")]),e._v(" Write our own "),s("code",[e._v(".tmux.conf")])]),e._v(" "),s("p",[e._v("Following are some customizations I did in my "),s("code",[e._v(".tmux.conf")]),e._v(". Others are quite similar and I will just show you "),s("a",{attrs:{href:"https://github.com/franklinqin0/dotfiles/blob/master/tmux/.tmux.conf",target:"_blank",rel:"noopener noreferrer"}},[e._v("the code"),s("OutboundLink")],1),e._v(":")]),e._v(" "),s("h3",{attrs:{id:"redefine-the-prefix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redefine-the-prefix"}},[e._v("#")]),e._v(" Redefine the prefix")]),e._v(" "),s("p",[e._v("It is very awkward for most to spread your index and little fingers when pressing "),s("code",[e._v("<C-b>")]),e._v(". Thus, some replaced it with "),s("code",[e._v("<C-a>")]),e._v(", but I came up with "),s("code",[e._v("<M-x>")]),e._v(": "),s("strong",[s("code",[e._v("set -g prefix M-x")])]),e._v(". "),s("code",[e._v("M")]),e._v(' stands for "Meta" and is basically '),s("code",[e._v("Alt")]),e._v(". For my Mac, I did "),s("a",{attrs:{href:"https://superuser.com/a/963367",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),s("OutboundLink")],1),e._v(" to use "),s("code",[e._v("Option")]),e._v(" as Meta key.")]),e._v(" "),s("h3",{attrs:{id:"resize-pane"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resize-pane"}},[e._v("#")]),e._v(" Resize Pane")]),e._v(" "),s("p",[e._v("The following commands resize a pane by "),s("strong",[e._v("5 rows")]),e._v(" (say, "),s("code",[e._v("{prefix} J")]),e._v(").")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("bind-key J resize-pane -D 5\nbind-key K resize-pane -U 5\nbind-key H resize-pane -L 5\nbind-key L resize-pane -R 5\n")])])]),s("p",[e._v("The following commands resize a pane by "),s("strong",[e._v("1 row")]),e._v(" (say, "),s("code",[e._v("{prefix} <M-h>")]),e._v(").")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("bind-key M-h resize-pane -L\nbind-key M-j resize-pane -D\nbind-key M-k resize-pane -U\nbind-key M-l resize-pane -R\n")])])]),s("h3",{attrs:{id:"switch-pane"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switch-pane"}},[e._v("#")]),e._v(" Switch Pane")]),e._v(" "),s("p",[e._v("The following commands switch to another pane by direction (say, "),s("code",[e._v("{prefix} h")]),e._v(")")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("bind h select-pane -L\nbind j select-pane -D\nbind k select-pane -U\nbind l select-pane -R\n")])])]),s("p",[e._v("Or (say, "),s("code",[e._v("<M-h>")]),e._v("):")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("bind -n M-h select-pane -L\nbind -n M-j select-pane -D\nbind -n M-k select-pane -U\nbind -n M-l select-pane -R\n")])])]),s("h2",{attrs:{id:"important-confusion-to-watch-out-for"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#important-confusion-to-watch-out-for"}},[e._v("#")]),e._v(" Important Confusion to Watch out for")]),e._v(" "),s("p",[e._v("If in a session and wants to:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("destroy")]),e._v(", except for "),s("code",[e._v("kill-session")]),e._v(" above, could either "),s("code",[e._v("exit")]),e._v(" and Enter, or "),s("code",[e._v("<C-d>")]),e._v(".")]),e._v(" "),s("li",[s("strong",[e._v("detach")]),e._v(", "),s("code",[e._v("{prefix} d")]),e._v(".")])]),e._v(" "),s("p",[e._v("DON'T "),s("strong",[e._v("DESTROY")]),e._v(" A SESSION WHILE YOU WANT TO "),s("strong",[e._v("DETACH")]),e._v(" IT!!!")]),e._v(" "),s("h2",{attrs:{id:"useful-links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useful-links"}},[e._v("#")]),e._v(" Useful Links")]),e._v(" "),s("ul",[s("li",[e._v("the only website, if any, you need to star about tmux: "),s("a",{attrs:{href:"https://tmuxcheatsheet.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tmux Cheat Sheet"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("a "),s("code",[e._v(".tmux.conf")]),e._v(" where I copied most from: "),s("a",{attrs:{href:"https://github.com/PegasusWang/linux_config/blob/master/mac/tmux.conf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pegasus Wang's "),s("code",[e._v(".tmux.conf")]),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("a cool "),s("code",[e._v(".tmux.conf")]),e._v(" to "),s("strong",[e._v("learn but not copy")]),e._v(" from: "),s("a",{attrs:{href:"https://github.com/gpakosz/.tmux",target:"_blank",rel:"noopener noreferrer"}},[e._v("gpakosz/.tmux"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);