(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('begin', r, this);
                    f['call'](this);
                };
                q['bind']('begin', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['MainViewer'];
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['MainViewer']);
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o !== undefined) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            var p = n != undefined ? o['getObjective'](n, m) : o['get'](m);
                            if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                p += 0x1;
                            return p;
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"mobileMipmappingEnabled":false,"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_58307498_547C_701E_418C_C9C46DE4280C_playlist])","children":["this.MainViewer","this.Container_58366498_547C_701E_41BA_366A7CC666EC"],"vrPolyfillScale":0.73,"id":"rootPlayer","defaultVRPointer":"laser","paddingTop":0,"borderSize":0,"paddingLeft":0,"desktopMipmappingEnabled":false,"scrollBarWidth":10,"paddingBottom":0,"toolTipHorizontalAlign":"center","contentOpaque":false,"borderRadius":0,"definitions": [{"mouseControlMode":"drag_acceleration","gyroscopeVerticalDraggingEnabled":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","displayPlaybackBar":true},{"automaticZoomSpeed":10,"initialSequence":{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"},"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","id":"panorama_589CD935_544F_36E5_41D0_DB333EE18F4E_camera"},{"class":"PlayList","id":"ThumbnailList_58307498_547C_701E_418C_C9C46DE4280C_playlist","items":[{"media":"this.panorama_589CD935_544F_36E5_41D0_DB333EE18F4E","camera":"this.panorama_589CD935_544F_36E5_41D0_DB333EE18F4E_camera","begin":"this.setEndToItemIndex(this.ThumbnailList_58307498_547C_701E_418C_C9C46DE4280C_playlist, 0, 1)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"},{"media":"this.panorama_5FE306FB_544F_5B6E_41A4_9F27A073EECB","camera":"this.panorama_5FE306FB_544F_5B6E_41A4_9F27A073EECB_camera","begin":"this.setEndToItemIndex(this.ThumbnailList_58307498_547C_701E_418C_C9C46DE4280C_playlist, 1, 2)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"},{"media":"this.panorama_5FDC1285_544F_7B9A_41D3_C6A03B37E70E","camera":"this.panorama_5FDC1285_544F_7B9A_41D3_C6A03B37E70E_camera","begin":"this.setEndToItemIndex(this.ThumbnailList_58307498_547C_701E_418C_C9C46DE4280C_playlist, 2, 0)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}]},{"itemThumbnailShadowVerticalLength":3,"playList":"this.ThumbnailList_58307498_547C_701E_418C_C9C46DE4280C_playlist","layout":"horizontal","itemLabelFontWeight":"normal","id":"ThumbnailList_58307498_547C_701E_418C_C9C46DE4280C","itemLabelFontFamily":"Arial","paddingTop":10,"backgroundColorRatios":[0],"itemHorizontalAlign":"center","borderSize":0,"paddingLeft":20,"maxHeight":600,"itemLabelFontSize":14,"paddingBottom":10,"toolTipHorizontalAlign":"center","maxWidth":800,"scrollBarWidth":10,"borderRadius":5,"itemLabelGap":5,"scrollBarMargin":2,"verticalAlign":"top","backgroundColorDirection":"vertical","scrollBarVisible":"rollOver","itemThumbnailBorderRadius":5,"itemThumbnailScaleMode":"fit_outside","minHeight":0,"itemBackgroundColorRatios":[],"itemThumbnailShadowColor":"#000000","itemThumbnailShadow":true,"itemThumbnailOpacity":1,"scrollBarOpacity":0.5,"itemBackgroundOpacity":0,"propagateClick":false,"shadow":false,"itemPaddingTop":3,"itemOpacity":1,"backgroundColor":["#000000"],"itemPaddingLeft":3,"class":"ThumbnailList","minWidth":0,"itemLabelHorizontalAlign":"center","itemThumbnailShadowBlurRadius":4,"scrollBarColor":"#FFFFFF","itemLabelTextDecoration":"none","itemBackgroundColor":[],"itemLabelPosition":"bottom","itemLabelFontColor":"#FFFFFF","itemPaddingRight":3,"selectedItemLabelFontWeight":"bold","horizontalAlign":"left","itemPaddingBottom":3,"itemThumbnailShadowSpread":1,"itemThumbnailShadowHorizontalLength":3,"gap":10,"itemThumbnailHeight":75,"itemThumbnailShadowOpacity":0.8,"data":{"name":"ThumbnailList2505"},"itemThumbnailWidth":100,"itemVerticalAlign":"middle","itemMode":"normal","paddingRight":20,"itemBorderRadius":0,"itemLabelFontStyle":"normal","itemBackgroundColorDirection":"vertical","backgroundOpacity":0.2},{"hfov":360,"class":"Panorama","id":"panorama_5FE306FB_544F_5B6E_41A4_9F27A073EECB","frames":[{"thumbnailUrl":"media/panorama_5FE306FB_544F_5B6E_41A4_9F27A073EECB_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_5FE306FB_544F_5B6E_41A4_9F27A073EECB_0/{face}/0/{row}_{column}.jpg","colCount":24,"tags":"ondemand","rowCount":4,"width":12288,"class":"TiledImageResourceLevel","height":2048},{"url":"media/panorama_5FE306FB_544F_5B6E_41A4_9F27A073EECB_0/{face}/1/{row}_{column}.jpg","colCount":12,"tags":"ondemand","rowCount":2,"width":6144,"class":"TiledImageResourceLevel","height":1024},{"url":"media/panorama_5FE306FB_544F_5B6E_41A4_9F27A073EECB_0/{face}/2/{row}_{column}.jpg","colCount":6,"tags":["ondemand","preload"],"rowCount":1,"width":3072,"class":"TiledImageResourceLevel","height":512},{"url":"media/panorama_5FE306FB_544F_5B6E_41A4_9F27A073EECB_0/{face}/vr/0.jpg","colCount":6,"tags":"mobilevr","rowCount":1,"width":9216,"class":"TiledImageResourceLevel","height":1536}]}}],"thumbnailUrl":"media/panorama_5FE306FB_544F_5B6E_41A4_9F27A073EECB_t.jpg","hfovMax":130,"cardboardMenu":"this.Menu_5814B4C5_547C_7071_41D3_6CCA82CE44AC","data":{"label":"ape00s8-360-fort-pont-sf"},"pitch":0,"label":trans('panorama_5FE306FB_544F_5B6E_41A4_9F27A073EECB.label'),"vfov":180,"partial":false},{"automaticZoomSpeed":10,"initialSequence":{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"},"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","id":"panorama_5FE306FB_544F_5B6E_41A4_9F27A073EECB_camera"},{"hfov":360,"class":"Panorama","id":"panorama_5FDC1285_544F_7B9A_41D3_C6A03B37E70E","frames":[{"thumbnailUrl":"media/panorama_5FDC1285_544F_7B9A_41D3_C6A03B37E70E_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_5FDC1285_544F_7B9A_41D3_C6A03B37E70E_0/{face}/0/{row}_{column}.jpg","colCount":18,"tags":"ondemand","rowCount":3,"width":9216,"class":"TiledImageResourceLevel","height":1536},{"url":"media/panorama_5FDC1285_544F_7B9A_41D3_C6A03B37E70E_0/{face}/1/{row}_{column}.jpg","colCount":12,"tags":"ondemand","rowCount":2,"width":6144,"class":"TiledImageResourceLevel","height":1024},{"url":"media/panorama_5FDC1285_544F_7B9A_41D3_C6A03B37E70E_0/{face}/2/{row}_{column}.jpg","colCount":6,"tags":["ondemand","preload"],"rowCount":1,"width":3072,"class":"TiledImageResourceLevel","height":512}]}}],"thumbnailUrl":"media/panorama_5FDC1285_544F_7B9A_41D3_C6A03B37E70E_t.jpg","hfovMax":130,"cardboardMenu":"this.Menu_5814B4C5_547C_7071_41D3_6CCA82CE44AC","data":{"label":"k402fcz-a-laptop-on-a-table"},"pitch":0,"label":trans('panorama_5FDC1285_544F_7B9A_41D3_C6A03B37E70E.label'),"vfov":180,"partial":false},{"automaticZoomSpeed":10,"initialSequence":{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"},"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","id":"panorama_5FDC1285_544F_7B9A_41D3_C6A03B37E70E_camera"},{"subtitlesPaddingBottom":5,"progressOpacity":1,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowVerticalLength":0,"progressRight":0,"id":"MainViewer","progressBarBorderColor":"#000000","paddingTop":0,"displayTooltipInTouchScreens":true,"progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"subtitlesOpacity":1,"width":"100%","toolTipFontWeight":"normal","borderSize":0,"paddingLeft":0,"toolTipBorderRadius":3,"transitionMode":"blending","paddingBottom":0,"toolTipHorizontalAlign":"center","firstTransitionDuration":0,"progressBorderColor":"#000000","borderRadius":0,"progressBackgroundColorDirection":"vertical","playbackBarHeadShadowBlurRadius":3,"toolTipShadowSpread":0,"progressBarBackgroundColor":["#3399FF"],"toolTipPaddingRight":6,"subtitlesPaddingLeft":5,"playbackBarHeadHeight":15,"toolTipTextShadowColor":"#000000","toolTipPaddingTop":4,"playbackBarLeft":0,"toolTipBorderSize":1,"progressBackgroundColor":["#FFFFFF"],"playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontFamily":"Arial","playbackBarHeadShadow":true,"playbackBarHeadShadowColor":"#000000","subtitlesBackgroundColor":"#000000","shadow":false,"toolTipBorderColor":"#767676","subtitlesBottom":50,"progressBottom":0,"playbackBarHeadOpacity":1,"progressHeight":10,"playbackBarOpacity":1,"progressBackgroundOpacity":1,"subtitlesBackgroundOpacity":0.2,"progressBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderRadius":0,"toolTipShadowVerticalLength":0,"progressBarOpacity":1,"subtitlesGap":0,"toolTipTextShadowOpacity":0,"playbackBarBottom":5,"vrPointerColor":"#FFFFFF","toolTipTextShadowBlurRadius":3,"progressBarBorderSize":0,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesHorizontalAlign":"center","subtitlesVerticalAlign":"bottom","toolTipFontColor":"#606060","playbackBarBackgroundColor":["#FFFFFF"],"progressBorderRadius":0,"playbackBarHeight":10,"subtitlesTextShadowHorizontalLength":1,"subtitlesTop":0,"paddingRight":0,"progressLeft":0,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"subtitlesBorderColor":"#FFFFFF","toolTipShadowColor":"#333333","toolTipPaddingBottom":4,"playbackBarProgressBorderSize":0,"subtitlesPaddingRight":5,"toolTipShadowHorizontalLength":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadShadowHorizontalLength":0,"toolTipBackgroundColor":"#F6F6F6","height":"100%","toolTipDisplayTime":600,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"subtitlesBorderSize":0,"toolTipOpacity":1,"toolTipFontSize":12,"playbackBarHeadShadowOpacity":0.7,"minHeight":50,"subtitlesFontColor":"#FFFFFF","playbackBarRight":0,"playbackBarProgressBackgroundColorRatios":[0],"vrPointerSelectionColor":"#FF6600","subtitlesTextShadowBlurRadius":0,"propagateClick":false,"subtitlesTextDecoration":"none","minWidth":100,"toolTipPaddingLeft":6,"class":"ViewerArea","playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","toolTipShadowBlurRadius":3,"vrPointerSelectionTime":2000,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"subtitlesFontFamily":"Arial","toolTipFontStyle":"normal","playbackBarProgressOpacity":1,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","toolTipShadowOpacity":1,"subtitlesFontSize":"3vmin","playbackBarBorderSize":0,"transitionDuration":500,"subtitlesShadow":false,"progressBackgroundColorRatios":[0],"subtitlesPaddingTop":5,"subtitlesFontWeight":"normal","doubleClickAction":"toggle_fullscreen","playbackBarBackgroundOpacity":1,"data":{"name":"Main Viewer"},"subtitlesTextShadowOpacity":1},{"class":"PlayList","id":"mainPlayList","items":[{"media":"this.panorama_589CD935_544F_36E5_41D0_DB333EE18F4E","camera":"this.panorama_589CD935_544F_36E5_41D0_DB333EE18F4E_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"},{"media":"this.panorama_5FE306FB_544F_5B6E_41A4_9F27A073EECB","camera":"this.panorama_5FE306FB_544F_5B6E_41A4_9F27A073EECB_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"},{"media":"this.panorama_5FDC1285_544F_7B9A_41D3_C6A03B37E70E","end":"this.trigger('tourEnded')","camera":"this.panorama_5FDC1285_544F_7B9A_41D3_C6A03B37E70E_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}]},{"hfov":360,"class":"Panorama","id":"panorama_589CD935_544F_36E5_41D0_DB333EE18F4E","frames":[{"thumbnailUrl":"media/panorama_589CD935_544F_36E5_41D0_DB333EE18F4E_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_589CD935_544F_36E5_41D0_DB333EE18F4E_0/{face}/0/{row}_{column}.jpg","colCount":24,"tags":"ondemand","rowCount":4,"width":12288,"class":"TiledImageResourceLevel","height":2048},{"url":"media/panorama_589CD935_544F_36E5_41D0_DB333EE18F4E_0/{face}/1/{row}_{column}.jpg","colCount":12,"tags":"ondemand","rowCount":2,"width":6144,"class":"TiledImageResourceLevel","height":1024},{"url":"media/panorama_589CD935_544F_36E5_41D0_DB333EE18F4E_0/{face}/2/{row}_{column}.jpg","colCount":6,"tags":["ondemand","preload"],"rowCount":1,"width":3072,"class":"TiledImageResourceLevel","height":512},{"url":"media/panorama_589CD935_544F_36E5_41D0_DB333EE18F4E_0/{face}/vr/0.jpg","colCount":6,"tags":"mobilevr","rowCount":1,"width":9216,"class":"TiledImageResourceLevel","height":1536}]}}],"thumbnailUrl":"media/panorama_589CD935_544F_36E5_41D0_DB333EE18F4E_t.jpg","hfovMax":130,"cardboardMenu":"this.Menu_5814B4C5_547C_7071_41D3_6CCA82CE44AC","data":{"label":"8i80lgz-360-panorama-view-lake"},"pitch":0,"label":trans('panorama_589CD935_544F_36E5_41D0_DB333EE18F4E.label'),"vfov":180,"partial":false},{"id":"Container_58366498_547C_701E_41BA_366A7CC666EC","left":0,"children":["this.ThumbnailList_58307498_547C_701E_418C_C9C46DE4280C"],"paddingTop":0,"right":0,"borderSize":0,"scrollBarWidth":10,"paddingLeft":0,"toolTipHorizontalAlign":"center","contentOpaque":false,"borderRadius":0,"paddingBottom":0,"scrollBarVisible":"rollOver","minHeight":20,"scrollBarMargin":2,"bottom":0,"propagateClick":false,"verticalAlign":"bottom","shadow":false,"scrollBarOpacity":0.5,"layout":"horizontal","class":"Container","scrollBarColor":"#000000","height":200,"overflow":"visible","minWidth":20,"gap":10,"horizontalAlign":"center","backgroundOpacity":0,"paddingRight":0,"data":{"name":"Container2504"}},{"opacity":0.4,"fontColor":"#FFFFFF","fontFamily":"Arial","rollOverFontColor":"#FFFFFF","label":"Media","class":"Menu","rollOverBackgroundColor":"#000000","children":[{"label":"8i80lgz-360-panorama-view-lake","class":"MenuItem","click":"this.mainPlayList.set('selectedIndex', 0)"},{"label":"ape00s8-360-fort-pont-sf","class":"MenuItem","click":"this.mainPlayList.set('selectedIndex', 1)"},{"label":"k402fcz-a-laptop-on-a-table","class":"MenuItem","click":"this.mainPlayList.set('selectedIndex', 2)"}],"selectedBackgroundColor":"#202020","id":"Menu_5814B4C5_547C_7071_41D3_6CCA82CE44AC","selectedFontColor":"#FFFFFF","rollOverOpacity":0.8,"backgroundColor":"#404040"}],"scrollBarVisible":"rollOver","backgroundPreloadEnabled":true,"minHeight":20,"scrollBarMargin":2,"propagateClick":false,"verticalAlign":"top","downloadEnabled":true,"shadow":false,"scrollBarOpacity":0.5,"class":"Player","minWidth":20,"overflow":"hidden","scrollBarColor":"#000000","height":"100%","width":"100%","mediaActivationMode":"window","layout":"absolute","mouseWheelEnabled":true,"gap":10,"horizontalAlign":"left","paddingRight":0,"scripts":{"showWindow":TDV.Tour.Script.showWindow,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"resumePlayers":TDV.Tour.Script.resumePlayers,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"openLink":TDV.Tour.Script.openLink,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"initQuiz":TDV.Tour.Script.initQuiz,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"mixObject":TDV.Tour.Script.mixObject,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"registerKey":TDV.Tour.Script.registerKey,"quizStart":TDV.Tour.Script.quizStart,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"unregisterKey":TDV.Tour.Script.unregisterKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizShowScore":TDV.Tour.Script.quizShowScore,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"playAudioList":TDV.Tour.Script.playAudioList,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setLocale":TDV.Tour.Script.setLocale,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"init":TDV.Tour.Script.init,"getPixels":TDV.Tour.Script.getPixels,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setValue":TDV.Tour.Script.setValue,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"quizFinish":TDV.Tour.Script.quizFinish,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"existsKey":TDV.Tour.Script.existsKey,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"historyGoForward":TDV.Tour.Script.historyGoForward,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getOverlays":TDV.Tour.Script.getOverlays,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"cloneCamera":TDV.Tour.Script.cloneCamera,"initGA":TDV.Tour.Script.initGA,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"translate":TDV.Tour.Script.translate,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"shareSocial":TDV.Tour.Script.shareSocial,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getKey":TDV.Tour.Script.getKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showPopupMedia":TDV.Tour.Script.showPopupMedia},"data":{"defaultLocale":"en","name":"Player2502","locales":{"en":"locale/en.txt"}}};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.1.5.js.map
//Generated with v2020.2.0, Thu Sep 3 2020