import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

import React from "react";

const audioList1 = [
  {
    name: "Despacito",
    singer: "Luis Fonsi",
    cover:
      "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
    musicSrc:
      "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",
    // support async fetch music src. eg.
    // musicSrc: async () => {
    //   return await fetch('/api')
    // },
  },
  {
    name: "Dorost Nemisham",
    singer: "Sirvan Khosravi",
    cover:
      "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
    musicSrc:
      "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3",
  },
];
const options = {
  // audio lists model
  audioLists: audioList1,

  // default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 0,

  // if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,

  // color of the music player theme    [ type: 'light' | 'dark' | 'auto'  default `dark` ]
  theme: "auto",

  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  // Ref: https://github.com/STRML/react-draggable#draggable-api
  bounds: "body",

  /**
   * Don't interrupt current playing state when audio list updated
   * audioLists eg. (A) is current playing...
   * [A,B] => [A,C,B]
   * [A,B] => [A,B,C]
   *
   * if (A) not in updated audio lists
   * [A,B] => [C]
   * (C) is playing
   */
  // [type `boolean`, default `false`]
  quietUpdate: false,

  // Replace a new playlist with the first loaded playlist
  // instead of adding it at the end of it.
  // [type `boolean`, default `false`]
  clearPriorAudioLists: false,

  // Play your new play list right after your new play list is loaded turn false.
  // [type `boolean`, default `false`]
  autoPlayInitLoadPlayList: true,

  // Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  // "auto|metadata|none" "true| false"
  preload: true,

  // Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: false,

  // The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,

  // The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: false,

  // audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    right: 100,
    bottom: 120,
  },

  // if you want dynamic change current play mode you can change it
  // [type`order | orderLoop | singleLoop | shufflePlay`, default `order`]
  // playMode: 'order',
  defaultPlayMode: "order",

  // audio mode        mini | full          [type `String`  default `mini`]
  mode: "full",

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: false,

  // Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: false,

  // Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: false,

  // audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: false,

  // audio playing progress is show of the "mini"  mode
  showMiniProcessBar: false,

  // audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,

  // drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,

  // Display chrome media session.  [type `Boolean` default `false`]
  showMediaSession: false,

  // Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,

  // play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,

  // reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: false,

  // download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: false,

  // loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: false,

  // theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: false,

  // lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: false,

  // destroy player button display  [type `Boolean` default `false`]
  showDestroy: false,

  // Extensible custom content       [type 'Array' default '-' ]
  extendsContent: null,

  // default volume of the audio player [type `Number` default `1` range `0-1`]
  defaultVolume: 1,

  // playModeText show time [type `Number(ms)` default `700`]
  playModeShowTime: 600,

  // Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,

  // Enable responsive player, auto toggle desktop and mobile [type `Boolean` default `true`]
  responsive: true,

  /**
   * Custom mobile media query string, eg use the mobile version UI on iPad.
   * https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
   * [type `String` default '(max-width: 768px) and (orientation : portrait)']
   */
  mobileMediaQuery: "(max-width: 1024px)",

  // Music is downloaded handle
  onAudioDownload(audioInfo) {
    console.log("audio download", audioInfo);
  },

  // audio play handle
  onAudioPlay(audioInfo) {
    console.log("audio playing", audioInfo);
  },

  // audio pause handle
  onAudioPause(audioInfo) {
    console.log("audio pause", audioInfo);
  },

  // When the user has moved/jumped to a new location in audio
  onAudioSeeked(audioInfo) {
    console.log("audio seeked", audioInfo);
  },

  // When the volume has changed  min = 0.0  max = 1.0
  onAudioVolumeChange(currentVolume) {
    console.log("audio volume change", currentVolume);
  },

  // The single song is ended handle
  onAudioEnded(currentPlayId, audioLists, audioInfo) {
    console.log("audio ended", currentPlayId, audioLists, audioInfo);
  },

  // audio load abort
  onAudioAbort(currentPlayId, audioLists, audioInfo) {
    console.log("audio abort", currentPlayId, audioLists, audioInfo);
  },

  // audio play progress handle
  // eslint-disable-next-line no-unused-vars
  onAudioProgress(audioInfo) {
    // console.log('audio progress', audioInfo)
  },

  // audio reload handle
  onAudioReload(audioInfo) {
    console.log("audio reload:", audioInfo);
  },

  // audio load failed error handle
  onAudioError(errMsg, currentPlayId, audioLists, audioInfo) {
    console.error("audio error", errMsg, currentPlayId, audioLists, audioInfo);
  },

  // theme change handle
  // onThemeChange(theme) {
  //   console.log('theme change:', theme)
  // },

  onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    console.log("audio lists change:", currentPlayId, audioLists, audioInfo);
  },

  onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
    console.log(
      "audio play track change:",
      currentPlayId,
      audioLists,
      audioInfo
    );
  },

  // onPlayModeChange(playMode) {
  //   console.log('play mode change:', playMode)
  // },

  // onModeChange(mode) {
  //   console.log('mode change:', mode)
  // },

  onAudioListsPanelChange(panelVisible) {
    console.log("audio lists panel visible:", panelVisible);
  },

  onAudioListsDragEnd(fromIndex, endIndex) {
    console.log("audio lists drag end:", fromIndex, endIndex);
  },

  onAudioLyricChange(lineNum, currentLyric) {
    console.log("audio lyric change:", lineNum, currentLyric);
  },

  // custom music player root node
  getContainer() {
    return document.body;
  },

  /**
   * @description get origin audio element instance , you can use it do everything
   * @example
   * audio.playbackRate = 1.5  // set play back rate
   * audio.crossOrigin = 'xxx' // config cross origin
   */
  getAudioInstance(audio) {
    console.log("audio instance", audio);
  },

  onBeforeDestroy(currentPlayId, audioLists, audioInfo) {
    console.log("onBeforeDestroy currentPlayId: ", currentPlayId);
    console.log("onBeforeDestroy audioLists: ", audioLists);
    console.log("onBeforeDestroy audioInfo: ", audioInfo);
    return new Promise((resolve, reject) => {
      // your custom validate
      // eslint-disable-next-line no-alert
      if (window.confirm("Are you confirm destroy the player?")) {
        // if resolve, player destroyed
        resolve();
      } else {
        // if reject, skip.
        reject();
      }
    });
  },

  onDestroyed(currentPlayId, audioLists, audioInfo) {
    console.log("onDestroyed:", currentPlayId, audioLists, audioInfo);
  },

  onCoverClick(mode, audioLists, audioInfo) {
    console.log("onCoverClick: ", mode, audioLists, audioInfo);
  },

  // custom audio title
  // renderAudioTitle(audioInfo) {
  //   return <a href="#">{audioInfo.name}</a>
  // },

  // onPlayIndexChange (playIndex) {
  //   console.log('onPlayIndexChange: ', playIndex);
  // }

  // transform audio info like return a Promise

  /**
   * @return
   *  {
   *    src: 'xxx',
   *    filename: 'xxx',
   *    mimeType: 'xxx'
   *  }
   */
  // onBeforeAudioDownload() {
  //   return Promise.resolve({
  //     src: '1.mp3',
  //   })
  // },

  /**
   * customer download handler
   * eg. a link , or https://www.npmjs.com/package/file-saver
   * @param {*} downloadInfo
   * @example
   *
       customDownloader(downloadInfo) {
        const link = document.createElement('a')
        link.href = downloadInfo.src
        link.download = downloadInfo.filename || 'test'
        document.body.appendChild(link)
        link.click()
      },
   */
  // customDownloader(downloadInfo) {
  //   console.log(downloadInfo.src)
  //   console.log(downloadInfo.filename)
  //   console.log(downloadInfo.mimeType)
  // },
};

export default function MusicPlayer() {
  return (
    <>
      <ReactJkMusicPlayer {...options} />
    </>
  );
}
