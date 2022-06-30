function StingPlayerControl(_0x9281x1, _0x9281x2) {
    const _0x9281x3 = _0x9281x2 ? _0x9281x2 : '\x63\x6C\x61\x70\x70\x72';
    const _0x9281x4 = window["\x61\x74\x6F\x62"](_0x9281x1);
    if (_0x9281x3 == "\x6A\x77\x70\x73\x72\x76") {
        jwplayer("\x70\x6C\x61\x79\x65\x72")["\x73\x65\x74\x75\x70"]({
            file: _0x9281x4,
            controls: "\x74\x72\x75\x65",
            width: "\x31\x30\x30\x25",
            height: "\x35\x30\x30",
            stretching: "\x75\x6E\x69\x66\x6F\x72\x6D",
            autostart: "\x74\x72\x75\x65",
            primary: "\x66\x6C\x61\x73\x68",
            skin: "\x67\x6C\x6F\x77",
            preload: "\x74\x72\x75\x65",
            androidhls: "\x74\x72\x75\x65"
        })
    };
    if (_0x9281x3 == "\x63\x6C\x61\x70\x70\x72") {
        player = new Clappr.Player({
            source: _0x9281x4,
            plugins: [DashShakaPlayback, LevelSelector, ChromecastPlugin],
            parentId: "\x23\x70\x6C\x61\x79\x65\x72",
            width: "\x31\x30\x30\x25",
            height: "\x31\x30\x30\x25",
            hideMediaControl: !0,
            mediacontrol: {
                seekbar: "\x23\x30\x30\x37\x61\x63\x63",
                buttons: "\x23\x30\x30\x37\x61\x63\x63"
            },
            chromecast: {
                appId: "\x39\x44\x46\x42\x37\x37\x43\x30",
                contentType: "\x76\x69\x64\x65\x6F\x2F\x6D\x70\x34",
                media: {
                    type: ChromecastPlugin["\x4D\x6F\x76\x69\x65"],
                    title: "\x61\x6C\x62\x61",
                    subtitle: "\x59\x6F\x75\x20\x77\x6F\x6E\x27\x74\x20\x67\x65\x74\x20\x6D\x75\x63\x68\x20\x63\x6C\x6F\x73\x65\x72\x20\x74\x6F\x20\x53\x6B\x79\x6C\x69\x6E\x69\x6E\x67\x20\x74\x68\x61\x6E\x20\x74\x68\x69\x73\x21"
                }
            },
            autoPlay: !0
        })
    };
    if (_0x9281x3 == "\x70\x6C\x79\x72") {
        document["\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72"]("\x44\x4F\x4D\x43\x6F\x6E\x74\x65\x6E\x74\x4C\x6F\x61\x64\x65\x64", () => {
            var _0x9281x5 = _0x9281x4;
            const _0x9281x6 = document["\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72"]("\x76\x69\x64\x65\x6F");
            var _0x9281x7 = new Plyr(_0x9281x6, {
                captions: {
                    active: !0,
                    update: !0
                }
            });
            if (Hls["\x69\x73\x53\x75\x70\x70\x6F\x72\x74\x65\x64"]()) {
                const _0x9281x8 = new Hls;
                _0x9281x8["\x6C\x6F\x61\x64\x53\x6F\x75\x72\x63\x65"](_0x9281x5), _0x9281x8["\x61\x74\x74\x61\x63\x68\x4D\x65\x64\x69\x61"](_0x9281x6), window["\x68\x6C\x73"] = _0x9281x8
            } else {
                _0x9281x6["\x73\x72\x63"] = _0x9281x5
            };
            window["\x70\x6C\x61\x79\x65\x72"] = _0x9281x7
        })
    };
    if (_0x9281x3 == "\x64\x70\x6C\x61\x79\x65\x72") {
        const _0x9281x9 = new DPlayer({
            container: document["\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64"]('\x64\x70\x6C\x61\x79\x65\x72'),
            autoplay: true,
            live: true,
            preload: '\x61\x75\x74\x6F',
            video: {
                url: _0x9281x4,
                type: '\x61\x75\x74\x6F'
            }
        })
    }
}
