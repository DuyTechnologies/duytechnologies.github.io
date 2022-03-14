(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{436:function(t,e,r){"use strict";r.r(e);var o=r(23),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"minecraft-version-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#minecraft-version-support"}},[t._v("#")]),t._v(" Minecraft version support")]),t._v(" "),r("p",[t._v("With each new Minecraft release comes questions: how well does it play nice with PojavLauncher?")]),t._v(" "),r("p",[t._v("Thanks to the hard work from PojavLauncherTeam, both the Android and the iOS port now cover most Minecraft versions...")]),t._v(" "),r("p",[t._v("...with some small exceptions that will be listed below.")]),t._v(" "),r("h3",{attrs:{id:"current-known-compatibility-problems-with-pojavlauncher-android-as-of-the-version-crocus-v3-openjdk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#current-known-compatibility-problems-with-pojavlauncher-android-as-of-the-version-crocus-v3-openjdk"}},[t._v("#")]),t._v(" Current known compatibility problems with PojavLauncher Android (as of the version "),r("code",[t._v("crocus_v3-openjdk")]),t._v(")")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Version")]),t._v(" "),r("th",[t._v("Current problem")]),t._v(" "),r("th",[t._v("Workaround")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1.13 to 1.13.2")]),t._v(" "),r("td",[t._v("Unable to access video settings menu")]),t._v(" "),r("td",[t._v("Unknown; the only way to change these settings is to use options.txt.")])]),t._v(" "),r("tr",[r("td",[t._v("1.14 to 1.14.2 (1.14.3 is not yet tested)")]),t._v(" "),r("td",[t._v("Crashes with java.lang.NullPointerException after a few taps")]),t._v(" "),r("td",[t._v("Unknown")])]),t._v(" "),r("tr",[r("td",[t._v("Fabric 1.14+")]),t._v(" "),r("td",[t._v("Game crashes on startup")]),t._v(" "),r("td",[t._v("- Go to /sdcard/games/PojavLauncher/.minecraft/.fabric/remappedJars/minecraft-"),r("strong",[r("strong",[t._v("[Minecraft version]")])]),t._v(" (for Android 10+: /sdcard/Android/data/net.kdt.pojavlaunch(.debug)/.minecraft/.fabric/remappedJars/minecraft-"),r("strong",[r("strong",[t._v("[Minecraft version]")])]),t._v("), then rename zipfstmp__"),r("strong",[t._v("[random number]")]),r("strong",[t._v(".tmp to intermediary-fabric-loader-")]),r("strong",[t._v("[Fabric loader version]")]),r("strong",[t._v("-")]),r("strong",[t._v("[Minecraft version]")]),t._v("__.jar")])]),t._v(" "),r("tr",[r("td",[t._v("Up to 1.8.9")]),t._v(" "),r("td",[t._v("Game crashes a couple of minutes after joining the world")]),t._v(" "),r("td",[t._v("Enable VBO in Minecraft settings. Avoid using OptiFine.")])]),t._v(" "),r("tr",[r("td",[t._v("1.17 or later")]),t._v(" "),r("td",[t._v("Game crashes when loading or exits when initializing")]),t._v(" "),r("td",[t._v("Be sure to check "),r("a",{attrs:{href:"https://pojavlauncherteam.github.io/updates/117.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("this guide"),r("OutboundLink")],1),t._v(".")])])])]),t._v(" "),r("h3",{attrs:{id:"current-known-compatibility-problems-with-pojavlauncher-ios-as-of-the-version-2-0-alpha8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#current-known-compatibility-problems-with-pojavlauncher-ios-as-of-the-version-2-0-alpha8"}},[t._v("#")]),t._v(" Current known compatibility problems with PojavLauncher iOS (as of the version 2.0~alpha8)")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Version")]),t._v(" "),r("th",[t._v("Current problem")]),t._v(" "),r("th",[t._v("Workaround")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1.8.9 or below (up to 1.12.2 on some testers)")]),t._v(" "),r("td",[t._v("Game crashes after a couple of seconds of joining the world")]),t._v(" "),r("td",[t._v("Specify the environment variable "),r("code",[t._v("LIBGL_USEVBO=0")]),t._v(". The instruction to do this is "),r("a",{attrs:{href:"https://pojavlauncherteam.github.io/ios/wiki/going-further/environment-variables.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(". OptiFine is not yet tested, however, it's thought to be unstable.")])]),t._v(" "),r("tr",[r("td",[t._v("1.2.1-1.2.4 and 1.4.4-1.4.7")]),t._v(" "),r("td",[t._v("Game crashes when initializing")]),t._v(" "),r("td",[t._v("1.4.4-1.4.7: Specify the environment variable "),r("code",[t._v("LIBGL_VERSION=2.1")]),t._v(". 1.2.1-1.2.4: Unknown (the cause of problem is the same, but the trick above doesn't work). Forge 1.2.3-1.2.4 are known to work (but without FML loaded?)")])]),t._v(" "),r("tr",[r("td",[t._v("All RubyDung versions")]),t._v(" "),r("td",[t._v("Black screen")]),t._v(" "),r("td",[t._v("Unknown")])]),t._v(" "),r("tr",[r("td",[t._v("1.17 or later")]),t._v(" "),r("td",[t._v("Game crashes")]),t._v(" "),r("td",[t._v("Be sure to check "),r("a",{attrs:{href:"https://pojavlauncherteam.github.io/updates/117.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("this guide"),r("OutboundLink")],1),t._v(". Note that some testers reported that the assets-v0 trick stops working from 21w37a onwards.")])])])]),t._v(" "),r("h2",{attrs:{id:"note-for-pojavlauncher-ios-version-1-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#note-for-pojavlauncher-ios-version-1-2"}},[t._v("#")]),t._v(" Note for PojavLauncher iOS version 1.2:")]),t._v(" "),r("p",[t._v("This version can not launch any version from 1.5.2 or below and any Forge build before 36.1.0 (for 1.16.5). This is because of the need to use OpenJDK 16, which was already ported to iOS by "),r("a",{attrs:{href:"https://twitter.com/diatrus",target:"_blank",rel:"noopener noreferrer"}},[t._v("@Diatrus"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("This build is also thought to be incompatible with 1.17 or above (not yet tested).")]),t._v(" "),r("h2",{attrs:{id:"note-for-pojavlauncher-android-build-20210321-backwards"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#note-for-pojavlauncher-android-build-20210321-backwards"}},[t._v("#")]),t._v(" Note for PojavLauncher Android build 20210321 backwards:")]),t._v(" "),r("p",[t._v("Due to the fact that this version doesn’t have the ability to add Java runtimes, and also bundled with Java 8, it’s not compatible with 1.17 or above.")])])}),[],!1,null,null,null);e.default=a.exports}}]);