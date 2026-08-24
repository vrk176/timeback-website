import type { Locale } from "./i18n";

export type FaqEntry = { q: string; a: string };

export type FaqContent = {
  title: string;
  intro: string;
  entries: FaqEntry[];
  contact: {
    heading: string;
    body: string;
    emailLabel: string;
  };
};

const en: FaqContent = {
  title: "Frequently Asked Questions",
  intro:
    "A short list of the things people ask most often — how blocking actually behaves, why certain taps are required, and how your data is handled.",
  entries: [
    {
      q: "Why does blocking sometimes take a few seconds?",
      a: "When you turn a rule on, TimeBack registers the block with iOS right away. The shield you see on a blocked app, though, is drawn by iOS itself — and iOS can take a few seconds (occasionally longer) to refresh it, especially right after several quick changes. If the shield hasn't appeared yet, the block is still already in place. Give it a moment; toggling the rule repeatedly can actually make iOS take longer.",
    },
    {
      q: "Why do I need to tap Continue after a break ends?",
      a: "When a break ends, the app locks again, and TimeBack waits for you to tap Continue instead of unlocking silently in the background. Part of this is a platform rule — the screen that shows the lock isn't allowed to complete an unlock on its own. And part of it is intentional: that one small tap is a moment to decide whether you really want to go back in.",
    },
    {
      q: "What is the difference between Daily Limits and Schedules?",
      a: "A Daily Limit is a time budget: an app stays available until you've used up the minutes you allowed for today, then it locks. A Schedule is a time window: the apps it covers are locked during the hours you set (for example 22:00–08:00), no matter how little you've used them. They work independently, and one app can be covered by both.",
    },
    {
      q: "What should I check if a rule does not work?",
      a: "1) Open TimeBack once — rules re-sync with the system every time the app comes to the foreground. 2) Make sure Screen Time permission is still granted (iOS Settings → Screen Time). 3) Open the rule and confirm it is enabled and still has apps selected. 4) For Schedules, double-check the time window and the repeat days. 5) Still stuck? Email us from Settings → Support — the message comes pre-filled with your app version, so we can help faster.",
    },
    {
      q: "Does TimeBack upload my app usage?",
      a: "No. Your usage data stays on your device. TimeBack has no accounts and no analytics. Apple's Screen Time framework is also built so that TimeBack itself only works with anonymous app references — not a readable list of what you use.",
    },
    {
      q: "Why does TimeBack need Screen Time permission?",
      a: "Screen Time permission (Apple's Family Controls) is the only mechanism iOS offers that lets one app limit another. Everything TimeBack does — shields, minute counting, schedules — is built on it. Without the permission nothing can be blocked, and if it is revoked later, all rules stop until it is granted again.",
    },
    {
      q: "Why can't I delete any app after turning on Prevent App Deletion?",
      a: "That is how the iOS switch works: Apple's Screen Time framework offers a single device-wide \"deleting apps\" restriction, not a per-app one. When you turn on Prevent App Deletion, iOS stops every app on the device from being deleted — TimeBack included, which is the point — and there is no way for TimeBack to protect only itself. The confirmation dialog says so before anything is applied, and you can turn the switch off at any time (if you have set a guardian PIN, turning it off asks for that PIN first).",
    },
    {
      q: "Why does a Daily Limit sometimes lock a few minutes early?",
      a: "TimeBack asks iOS to fire the limit at exactly the minutes you set. However, iOS keeps two separate internal counters for app usage: the one that fires limit events, and the one behind the usage figure you see on the dashboard (which matches the system Screen Time app). In our measurements the two can disagree by several minutes on the same day, with the event counter running ahead — so the lock can appear while the dashboard still shows a few minutes remaining. This happens inside iOS and affects Apple's own Screen Time limits too; TimeBack cannot read the dashboard figure at enforcement time to correct it.\n\nIf a lock feels early, open TimeBack and use Unlock Once on the rule's card (or toggle the rule off) — you stay in control. The block screen itself stays firm: its OK button closes the app without lifting the lock, so a reflexive tap can't undo your limit. Everything resets at midnight.",
    },
    {
      q: "Why can't I set a blocking period shorter than 15 minutes?",
      a: "That's an iOS limit rather than a TimeBack choice: the system refuses to monitor a blocking window under 15 minutes and rejects the schedule outright. TimeBack used to let you save one anyway — it would then sit in your list looking enabled while never blocking anything. Now the Save button stays off until the window is long enough, and tells you why.\n\nOne detail worth knowing: a window that crosses midnight counts as two separate periods — the part before midnight and the part after — and each one needs its own 15 minutes. So 23:50–08:00 won't save (barely ten minutes fall before midnight), while 23:00–08:00 is fine.\n\nIf what you want is a short, one-off block, use Block Now on the rule's card instead: it locks immediately and stays locked until you lift it, with no minimum length.",
    },
    {
      q: "Why do some websites show no usage numbers on a website rule?",
      a: "The usage figure on a rule's card comes from Apple's Screen Time data, and websites are included — even browsing on other devices signed in to the same Apple Account with cross-device sharing turned on (say, Safari on your Mac). The vast majority of websites show up as expected.\n\nIn our testing, though, a few websites are persistently attributed by the system to a corresponding app instead, and stop producing website-level data on any device. The confirmed example is youtube.com: its browsing time is counted as YouTube app usage — even after removing the YouTube web app on the Mac and uninstalling the YouTube app on the iPhone. This happens inside Apple's data attribution layer, and TimeBack cannot read data that never appears.\n\nWhat matters: blocking is not affected. Time spent on such websites still counts toward the rule's limit, and the lock still lands on time — only the card's usage number can't show that share. If a website rule locks while showing a tiny number, this is usually why (or the usage happened on another device).",
    },
  ],
  contact: {
    heading: "Didn't find your answer?",
    body: "Email us — we read every message.",
    emailLabel: "Email:",
  },
};

const zhHans: FaqContent = {
  title: "常见问题",
  intro:
    "把大家最常问的几件事集中放在这里：屏蔽到底是怎么生效的，为什么有些地方要多按一下，以及你的数据是怎么被处理的。",
  entries: [
    {
      q: "为什么有时屏蔽会延迟几秒？",
      a: "当你打开一条规则时，TimeBack 会立刻把屏蔽登记给 iOS。但你在被屏蔽 App 上看到的那层拦截页面是 iOS 自己绘制的——它有时需要几秒（偶尔更久）才刷新出来，尤其是在连续快速改动之后。拦截页面还没出现，不代表屏蔽没有生效；稍等片刻就好，反复开关反而可能让 iOS 刷新得更慢。",
    },
    {
      q: "休息结束后，为什么还要点一下「继续使用」？",
      a: "休息结束时 App 会重新锁上，TimeBack 会等你点一下「继续使用」，而不是在后台悄悄解锁。这一半是平台规则——负责显示锁定页的组件，不被允许自行完成解锁；另一半是有意为之：多这一下，正好给你一个想清楚「要不要继续」的瞬间。",
    },
    {
      q: "时间表和每日限额有什么区别？",
      a: "每日限额是用量预算：在你今天允许的分钟数用完之前，App 一直可用，用完后锁定。时间表是时间窗口：在你设定的时间段内（比如 22:00–08:00），它覆盖的 App 一律锁定，和用了多久无关。两者各自独立生效，同一个 App 可以同时被两种规则覆盖。",
    },
    {
      q: "规则没生效时，我该怎么检查？",
      a: "1）先把 TimeBack 打开一次——每次回到前台，规则都会和系统重新核对一遍。2）确认屏幕使用时间权限还在（iOS 设置 → 屏幕使用时间）。3）打开这条规则，确认它处于开启状态、选中的 App 还在。4）时间表规则再核对一下时间段和重复日。5）还不行？从 设置 → 支持 给我们发邮件——邮件会自动带上你的版本号，我们能更快帮你定位。",
    },
    {
      q: "TimeBack 会上传我的使用记录吗？",
      a: "不会。你的使用数据只留在你的设备上。TimeBack 没有账号体系，也没有任何数据统计上报。Apple 的屏幕使用时间框架在设计上也让 TimeBack 自己只能拿到匿名化的 App 引用——而不是一份可读的使用清单。",
    },
    {
      q: "为什么 TimeBack 需要屏幕使用时间权限？",
      a: "屏幕使用时间权限（Apple 的 Family Controls）是 iOS 上唯一允许一个 App 去限制另一个 App 的机制。TimeBack 的拦截页面、计时、时间表都建立在它之上。没有这个权限就无法屏蔽任何东西；如果之后撤销，所有规则也会停摆，直到重新授权。",
    },
    {
      q: "开启「防止删除 App」后，为什么所有 App 都不能删了？",
      a: "这是 iOS 这个开关本身的工作方式：Apple 的屏幕使用时间框架只提供一个设备级的「删除 App」限制，没有针对单个 App 的版本。打开「防止删除 App」后，iOS 会禁止删除这台设备上的所有 App——当然也包括 TimeBack 自己，这正是这个功能的意义；TimeBack 没有办法只保护它自己。开启前的确认弹窗会先把这一点讲清楚，你也随时可以把开关关掉（如果设置了守护者 PIN，关闭前会先要求输入 PIN）。",
    },
    {
      q: "每日限额为什么有时会提前几分钟锁定？",
      a: "TimeBack 向 iOS 登记的触发时长就是你设定的分钟数，一分不多一分不少。但 iOS 内部有两套独立的使用时长计数：一套负责触发限额事件，另一套支撑仪表盘上显示的用量数字（与系统「屏幕使用时间」一致）。实测中两者在同一天可能相差几分钟，且事件计数往往偏快——所以偶尔会出现仪表盘还剩几分钟、锁定却已出现的情况。这发生在 iOS 内部，苹果自家的屏幕使用时间限额也有同样现象；TimeBack 在执行时刻无法读到仪表盘那套数字来校正它。\n\n如果你觉得锁得早了，打开 TimeBack 在规则卡片上用「临时解锁」（或直接关闭该规则）——主动权在你。拦截页面本身不放行：页面上的「好的」按钮只会关闭该 App、不会解除锁定，避免顺手一点就把限额废掉。每天午夜一切重新计算。",
    },
    {
      q: "定时的时段为什么不能短于 15 分钟？",
      a: "这是 iOS 的限制，不是 TimeBack 的选择：系统不接受短于 15 分钟的拦截时段，会直接拒绝登记。以前 TimeBack 会让你存下来，它就躺在列表里显示成已启用，实际一次都不会屏蔽。现在时段不够长时「保存」按钮不会亮，并且会直接告诉你原因。\n\n有一点值得知道：跨过午夜的时段会被算成两段——午夜之前的一段和午夜之后的一段——每一段都要各自满 15 分钟。所以 23:50–08:00 存不下去（落在午夜之前的只剩十分钟不到），而 23:00–08:00 没问题。\n\n如果你要的本来就是一次短时间的屏蔽，用规则卡片上的「立即拦截」：它立刻锁上、一直锁到你自己解除，没有最短时长的要求。",
    },
    {
      q: "网站规则的用量数字，为什么有的网站不显示？",
      a: "规则卡片上的用量来自苹果的屏幕使用时间数据，网站维度已经计入（含同一 Apple 账号下开了「跨设备共享」的其他设备，比如 Mac 上用 Safari 刷的时间）。绝大多数网站都能正常显示。\n\n但实测发现，个别网站会被系统持久地归入对应 App 的用量，在任何设备上都不再产生「网站」维度的数据——目前确认的例子是 youtube.com：它的浏览时间被系统计入 YouTube App 的用量，即便删掉 Mac 上的 YouTube 网页 App、卸载 iPhone 上的 YouTube App 也一样。这发生在苹果的数据归类层，TimeBack 读不到不存在的数据。\n\n需要说明的是：限制不受影响。这类网站的浏览时间照常计入规则的限额判定，到点照常锁定——只是卡片上的用量数字看不到这部分。如果你的网站规则「数字很小却被锁定」，多半就是这种情况（或者用量发生在其他设备上）。",
    },
  ],
  contact: {
    heading: "还是没有找到答案？",
    body: "给我们发邮件吧，每一封我们都会看。",
    emailLabel: "邮箱：",
  },
};

const zhHant: FaqContent = {
  title: "常見問題",
  intro:
    "把大家最常問的幾件事集中放在這裡：封鎖到底是怎麼運作的，為什麼有些地方要多按一下，還有你的資料是怎麼處理的。",
  entries: [
    {
      q: "為什麼封鎖有時會延遲幾秒？",
      a: "你打開一條規則時，TimeBack 會馬上把封鎖登記到 iOS。但你在被封鎖的 App 上看到的那層攔截畫面是 iOS 自己畫的——它有時要幾秒（偶爾更久）才刷出來，尤其是連續快速調整之後。看不到攔截畫面，不代表封鎖沒有生效；稍等一下就好，反覆切換反而會讓 iOS 刷得更慢。",
    },
    {
      q: "休息結束後，為什麼還要按一下「繼續使用」？",
      a: "休息結束時 App 會重新鎖上，TimeBack 會等你按一下「繼續使用」，而不是在背景悄悄解鎖。一半是平台規則——負責顯示鎖定畫面的元件，不被允許自行完成解鎖；另一半是刻意的設計：多這一下，剛好留給你一個想清楚「要不要繼續」的瞬間。",
    },
    {
      q: "時間表和每日限額有什麼差別？",
      a: "「每日限額」是用量預算：在你今天允許的分鐘用完之前，App 一直可用，用完就鎖定。「時間表」是時間區間：在你設定的時段內（例如 22:00–08:00），它覆蓋的 App 一律鎖定，跟用了多久無關。兩者各自獨立運作，同一個 App 也可以同時被兩種規則覆蓋。",
    },
    {
      q: "規則沒生效時，我要怎麼檢查？",
      a: "1）先把 TimeBack 開一次——每次回到前景，規則都會跟系統重新對照。2）確認螢幕使用時間權限還在（iOS 設定 → 螢幕使用時間）。3）打開那條規則，確認它是開啟狀態、選到的 App 還在。4）時間表規則的話，再核對一下時段和重複日。5）還是不行？從 設定 → 支援 寫信給我們——信會自動帶上你的版本，我們能更快幫你定位。",
    },
    {
      q: "TimeBack 會上傳我的使用紀錄嗎？",
      a: "不會。你的使用資料只留在你的裝置上。TimeBack 沒有帳號系統，也沒有任何分析回傳。Apple 的螢幕使用時間框架在設計上也讓 TimeBack 自己只能拿到匿名化的 App 參照——而不是一份可讀的使用清單。",
    },
    {
      q: "為什麼 TimeBack 需要螢幕使用時間權限？",
      a: "螢幕使用時間權限（Apple 的 Family Controls）是 iOS 上唯一允許一個 App 去限制另一個 App 的機制。TimeBack 的攔截畫面、計時、時間表都建立在它之上。沒這個權限就無法封鎖任何東西；如果之後被撤銷，所有規則也會停下來，直到重新授權。",
    },
    {
      q: "開啟「防止刪除 App」後，為什麼所有 App 都不能刪了？",
      a: "這是 iOS 這個開關本身的運作方式：Apple 的螢幕使用時間框架只提供一個裝置層級的「刪除 App」限制，沒有針對單一 App 的版本。打開「防止刪除 App」後，iOS 會禁止刪除這台裝置上的所有 App——當然也包括 TimeBack 自己，這正是這個功能的意義；TimeBack 沒有辦法只保護它自己。開啟前的確認視窗會先把這一點講清楚，你也隨時可以把開關關掉（如果設定了守護者 PIN，關閉前會先要求輸入 PIN）。",
    },
    {
      q: "每日限額為什麼有時會提前幾分鐘鎖定？",
      a: "TimeBack 向 iOS 登記的觸發時長就是你設定的分鐘數，一分不多一分不少。但 iOS 內部有兩套獨立的使用時長計數：一套負責觸發限額事件，另一套支撐儀表板上顯示的用量數字（與系統「螢幕使用時間」一致）。實測中兩者在同一天可能相差幾分鐘，且事件計數往往偏快——所以偶爾會出現儀表板還剩幾分鐘、鎖定卻已出現的情況。這發生在 iOS 內部，Apple 自家的螢幕使用時間限額也有同樣現象；TimeBack 在執行時刻無法讀到儀表板那套數字來校正它。\n\n如果你覺得鎖得早了，打開 TimeBack 在規則卡片上用「臨時解鎖」（或直接關閉該規則）——主動權在你。攔截畫面本身不放行：畫面上的「好的」按鈕只會關閉該 App、不會解除鎖定，避免順手一按就把限額廢掉。每天午夜一切重新計算。",
    },
    {
      q: "定時的時段為什麼不能短於 15 分鐘？",
      a: "這是 iOS 的限制，不是 TimeBack 的選擇：系統不接受短於 15 分鐘的封鎖時段，會直接拒絕登記。以前 TimeBack 會讓你存下來，它就躺在列表裡顯示成已啟用，實際一次都不會封鎖。現在時段不夠長時「儲存」按鈕不會亮，並且會直接告訴你原因。\n\n有一點值得知道：跨過午夜的時段會被算成兩段——午夜之前的一段和午夜之後的一段——每一段都要各自滿 15 分鐘。所以 23:50–08:00 存不下去（落在午夜之前的只剩不到十分鐘），而 23:00–08:00 沒問題。\n\n如果你要的本來就是一次短時間的封鎖，用規則卡片上的「立即封鎖」：它立刻鎖上、一直鎖到你自己解除，沒有最短時長的要求。",
    },
    {
      q: "網站規則的用量數字，為什麼有的網站不顯示？",
      a: "規則卡片上的用量來自 Apple 的螢幕使用時間資料，網站維度已經計入（含同一 Apple 帳號下開了「跨裝置共享」的其他裝置，比如 Mac 上用 Safari 瀏覽的時間）。絕大多數網站都能正常顯示。\n\n但實測發現，個別網站會被系統持久地歸入對應 App 的用量，在任何裝置上都不再產生「網站」維度的資料——目前確認的例子是 youtube.com：它的瀏覽時間被系統計入 YouTube App 的用量，即便刪掉 Mac 上的 YouTube 網頁 App、移除 iPhone 上的 YouTube App 也一樣。這發生在 Apple 的資料歸類層，TimeBack 讀不到不存在的資料。\n\n需要說明的是：限制不受影響。這類網站的瀏覽時間照常計入規則的限額判定，到點照常鎖定——只是卡片上的用量數字看不到這部分。如果你的網站規則「數字很小卻被鎖定」，多半就是這種情況（或者用量發生在其他裝置上）。",
    },
  ],
  contact: {
    heading: "還是沒找到答案？",
    body: "寫信給我們吧，每一封我們都會看。",
    emailLabel: "信箱：",
  },
};

const ja: FaqContent = {
  title: "よくある質問",
  intro:
    "「ブロックの動き方」「タップが必要な理由」「データの扱い」など、いちばん多い質問だけ集めました。",
  entries: [
    {
      q: "ブロックがすぐ効かないことがあるのはなぜ？",
      a: "ルールを ON にしたとき、TimeBack は iOS にブロックをすぐに登録します。ただ、ブロック中の App に出る「ブロック画面」は iOS 側が描画する仕組みで、表示までに数秒（ときどきもう少し）かかることがあります。とくに ON/OFF を素早く繰り返した直後は遅れがちです。ブロック画面がまだ出ていなくてもブロック自体は効いていますので、少しお待ちください。何度も切り替えると、iOS の更新がかえって遅くなることがあります。",
    },
    {
      q: "休憩が終わったあとに「続けて使用」を押すのはなぜ？",
      a: "休憩が終わると App はもう一度ロックされ、TimeBack は裏でこっそり解除するのではなく、あなたが「続けて使用」をタップするのを待ちます。これは iOS の仕様上の制約でもあり（ロック画面側からの自動解除は許可されていません）、同時にデザイン上の意図でもあります — その小さなひとタップが「本当にもう一度開くか」を選び直す瞬間になります。",
    },
    {
      q: "1日の制限とスケジュールはどう違う？",
      a: "「1日の制限」は使える時間の予算です。今日の許容分を使い切るまで App は使え、使い切るとロックされます。「スケジュール」は時間帯のルールで、設定した時間帯（たとえば 22:00–08:00）はその App をどれだけ使っていたかに関係なくロックされます。両者は独立して動き、同じ App に両方を重ねて適用することもできます。",
    },
    {
      q: "ルールが効かないときに確認することは？",
      a: "1. TimeBack を一度開いてみてください — 前面に戻るたび、ルールが iOS と再同期されます。2. スクリーンタイムの許可がまだ有効か確認します（iOS 設定 → スクリーンタイム）。3. 該当ルールを開き、ON のままか、対象 App が選ばれているかを確認します。4. スケジュールの場合は時間帯と繰り返しの曜日も見直してください。5. それでも直らないときは「設定 → サポート」からメールしてください。バージョン情報が自動で入った状態で送られるので、こちらでの確認が速くなります。",
    },
    {
      q: "TimeBack は使用状況をアップロードしていますか？",
      a: "していません。使用データはあなたのデバイスから外に出ません。TimeBack にはアカウントも分析の仕組みもありません。さらに Apple のスクリーンタイム枠組み上、TimeBack 自身は匿名化された App の参照しか扱えず、「何を使っているか」の読める一覧を持つことはできない構造になっています。",
    },
    {
      q: "なぜスクリーンタイムの許可が必要なの？",
      a: "スクリーンタイム（Apple の Family Controls）は、iOS で「ある App から別の App を制限する」唯一の仕組みです。TimeBack のブロック画面、時間カウント、スケジュールは全部これに乗っています。許可がないと何もブロックできず、あとから取り消された場合はすべてのルールが停止し、再度許可するまで再開しません。",
    },
    {
      q: "「アプリの削除を防止」をオンにすると、なぜどのアプリも削除できなくなるの？",
      a: "これは iOS のスイッチ自体の仕様です。Apple のスクリーンタイム枠組みが提供するのは、デバイス全体に効く「アプリの削除」制限ひとつだけで、特定のアプリだけを守る仕組みはありません。「アプリの削除を防止」をオンにすると、iOS はこのデバイス上のすべてのアプリの削除を禁止します — もちろん TimeBack 自身も含めて。それこそがこの機能の目的で、TimeBack が自分だけを守る方法は存在しません。オンにする前の確認ダイアログでこの点を先に説明しますし、スイッチはいつでもオフにできます（ガーディアンPINを設定している場合は、オフにする前にPINの入力を求められます）。",
    },
    {
      q: "1日の制限が、設定より数分早くロックされることがあるのはなぜ？",
      a: "TimeBack が iOS に登録するのは、あなたが設定したそのままの分数です。ただ、iOS の内部にはアプリ使用時間のカウンターが2つあります。制限イベントを発火させるカウンターと、ダッシュボードの使用時間表示（システムのスクリーンタイムと一致）を支えるカウンターです。実測では、同じ日にこの2つが数分ずれることがあり、イベント側が先行しがちです — そのため、ダッシュボードにはまだ数分残っているのにロックが現れることがあります。これは iOS の内部で起きていることで、Apple 純正のスクリーンタイム制限にも同じ現象があります。TimeBack が実行の瞬間にダッシュボード側の数字を読んで補正することはできません。\n\nロックが早いと感じたら、TimeBack を開いてルールのカードから「一時解除」を使ってください（ルールをオフにしても構いません）— 主導権はあなたにあります。ブロック画面そのものは固いままです。「わかりました」ボタンはアプリを閉じるだけでロックは解除しないので、反射的なタップで制限が無効になることはありません。すべては深夜0時にリセットされます。",
    },
    {
      q: "ブロックの時間帯を15分より短くできないのはなぜ？",
      a: "これは TimeBack の判断ではなく iOS の制限です。システムは15分未満のブロック時間帯の監視を受け付けず、スケジュールの登録自体を拒否します。以前の TimeBack では保存だけはできてしまい、リストの中で有効に見えるのに一度もブロックしない、という状態になっていました。今は時間帯が足りないと「保存」ボタンが押せないまま、理由もその場で表示します。\n\n知っておきたいのは、日をまたぐ時間帯は2つの期間として数えられることです — 0時前の部分と0時後の部分に分かれ、それぞれに15分必要です。たとえば 23:50–08:00 は保存できません（0時前が10分足らずしかないため）が、23:00–08:00 なら問題ありません。\n\n短い一回きりのブロックがほしいだけなら、ルールのカードの「今すぐブロック」を使ってください。すぐにロックされ、あなたが解除するまでロックされたままで、最短時間の縛りもありません。",
    },
    {
      q: "ウェブサイトのルールで、使用時間が表示されないサイトがあるのはなぜ？",
      a: "ルールのカードに出る使用時間は Apple のスクリーンタイムのデータから来ていて、ウェブサイトの分も含まれています（同じ Apple アカウントで「デバイス間で共有」を有効にした他のデバイス — たとえば Mac の Safari で見た時間も含みます）。大多数のサイトは問題なく表示されます。\n\nただ実測で、一部のサイトはシステムによって対応するアプリの使用時間として恒久的に扱われ、どのデバイスでも「ウェブサイト」としてのデータを生まなくなることがわかりました。確認できている例は youtube.com です。その閲覧時間はシステム上 YouTube アプリの使用時間として記録され、Mac の YouTube ウェブアプリを消しても、iPhone の YouTube アプリを削除しても変わりません。これは Apple のデータ分類レイヤーの中で起きていて、存在しないデータを TimeBack が読むことはできません。\n\n大事な点として、ブロックには影響しません。こうしたサイトの閲覧時間もルールの制限には通常どおり計上され、時間が来ればきちんとロックされます — カードの数字にその分が見えないだけです。ウェブサイトのルールが「数字は小さいのにロックされる」場合は、たいていこれが理由です（あるいは使用が他のデバイスで起きています）。",
    },
  ],
  contact: {
    heading: "答えが見つからなかったら",
    body: "メールください — ぜんぶ目を通します。",
    emailLabel: "メール：",
  },
};

const ko: FaqContent = {
  title: "자주 묻는 질문",
  intro:
    "차단이 실제로 어떻게 동작하는지, 왜 한 번 더 탭해야 하는지, 그리고 데이터를 어떻게 다루는지 — 가장 많이 받는 질문만 모았습니다.",
  entries: [
    {
      q: "차단이 가끔 몇 초 늦게 작동하는 이유는요?",
      a: "규칙을 켜면 TimeBack은 곧바로 iOS에 차단을 등록합니다. 다만 차단된 앱 위에 뜨는 차단 화면은 iOS가 직접 그리는 화면이라, 새로 고침되는 데 몇 초(가끔 더 오래)가 걸릴 수 있어요. 특히 빠르게 켜고 끄기를 반복한 직후에 더 늦어집니다. 차단 화면이 아직 안 보여도 차단 자체는 이미 적용된 상태이니 잠깐만 기다려 주세요. 자꾸 토글하면 오히려 iOS가 더 느리게 새로 고침합니다.",
    },
    {
      q: "휴식이 끝난 뒤 왜 「계속 사용」을 눌러야 하나요?",
      a: "휴식이 끝나면 앱이 다시 잠기고, TimeBack은 백그라운드에서 조용히 풀어 주는 대신 사용자가 「계속 사용」을 직접 누르길 기다립니다. 절반은 플랫폼 규정 때문이고(잠금을 보여 주는 화면이 스스로 잠금을 해제할 수 없습니다), 절반은 의도된 디자인입니다 — 그 한 번의 탭이 「정말 다시 들어갈까?」를 잠깐 멈춰 생각하는 순간이 됩니다.",
    },
    {
      q: "일일 제한과 스케줄은 어떻게 다른가요?",
      a: "「일일 제한」은 시간 예산입니다. 오늘 허용한 분을 모두 쓸 때까지는 앱을 사용할 수 있고, 다 쓰면 잠깁니다. 「스케줄」은 시간 구간입니다. 설정한 시간대(예: 22:00–08:00)에는 그동안 얼마나 썼는지와 무관하게 해당 앱이 잠깁니다. 두 가지는 독립적으로 작동하며, 같은 앱에 동시에 적용할 수도 있어요.",
    },
    {
      q: "규칙이 작동하지 않을 때 무엇을 확인하나요?",
      a: "1) TimeBack을 한 번 열어 보세요 — 앱이 전면으로 올라올 때마다 규칙이 시스템과 다시 맞춰집니다. 2) Screen Time 권한이 그대로 켜져 있는지 확인하세요(iOS 설정 → 스크린 타임). 3) 해당 규칙을 열어 활성 상태이고 앱이 그대로 선택돼 있는지 확인합니다. 4) 스케줄 규칙이라면 시간 구간과 반복 요일도 다시 봐 주세요. 5) 그래도 해결되지 않으면 설정 → 지원에서 메일을 보내 주세요 — 버전 정보가 자동으로 채워져 있어 더 빠르게 도와 드릴 수 있습니다.",
    },
    {
      q: "TimeBack이 제 사용 데이터를 업로드하나요?",
      a: "아니요. 사용 데이터는 기기 밖으로 나가지 않습니다. TimeBack에는 계정도, 분석 기능도 없습니다. 또한 Apple의 Screen Time 프레임워크 구조상 TimeBack 자체도 익명화된 앱 참조만 다룰 수 있어, 무엇을 썼는지 읽을 수 있는 목록은 가지고 있지 않습니다.",
    },
    {
      q: "Screen Time 권한이 왜 필요한가요?",
      a: "Screen Time 권한(Apple의 Family Controls)은 iOS에서 한 앱이 다른 앱을 제한할 수 있는 유일한 통로입니다. TimeBack의 차단 화면, 시간 계산, 스케줄 — 모두 그 위에서 동작합니다. 권한이 없으면 어떤 것도 차단할 수 없고, 나중에 해제되면 다시 허용할 때까지 모든 규칙이 멈춥니다.",
    },
    {
      q: "「앱 삭제 방지」를 켜면 왜 모든 앱을 삭제할 수 없나요?",
      a: "iOS 스위치 자체가 그렇게 동작합니다. Apple의 스크린 타임 프레임워크는 기기 전체에 적용되는 「앱 삭제」 제한 하나만 제공하며, 특정 앱만 보호하는 방식은 없습니다. 「앱 삭제 방지」를 켜면 iOS는 이 기기의 모든 앱 삭제를 막습니다 — 물론 TimeBack 자신도 포함해서요. 그게 바로 이 기능의 목적이고, TimeBack이 자기만 보호할 방법은 없습니다. 켜기 전 확인 창에서 이 점을 먼저 알려 드리며, 스위치는 언제든 끌 수 있습니다(보호자 PIN을 설정했다면 끄기 전에 PIN 입력을 요구합니다).",
    },
    {
      q: "일일 제한이 가끔 몇 분 일찍 잠기는 이유는요?",
      a: "TimeBack이 iOS에 등록하는 발동 시간은 설정한 분 그대로입니다. 다만 iOS 내부에는 앱 사용 시간을 세는 카운터가 두 개 있습니다. 제한 이벤트를 발동시키는 카운터와, 대시보드에 보이는 사용량 숫자(시스템 스크린 타임과 일치)를 떠받치는 카운터입니다. 실측에서는 같은 날 이 둘이 몇 분씩 어긋날 수 있고, 이벤트 쪽이 앞서가는 경향이 있습니다 — 그래서 대시보드에는 아직 몇 분 남았는데 잠금이 먼저 나타나는 경우가 생깁니다. 이는 iOS 내부에서 벌어지는 일로, Apple 자체의 스크린 타임 제한에도 똑같이 나타납니다. TimeBack은 잠금이 걸리는 순간에 대시보드 쪽 숫자를 읽어 보정할 수 없습니다.\n\n잠금이 이르다고 느껴지면 TimeBack을 열어 규칙 카드의 「임시 해제」를 쓰세요(규칙을 꺼도 됩니다) — 주도권은 당신에게 있습니다. 차단 화면 자체는 단호하게 유지됩니다. 「확인」 버튼은 앱을 닫을 뿐 잠금을 풀지 않으니, 무심코 누른 탭 한 번으로 제한이 무너지지 않습니다. 모든 것은 자정에 초기화됩니다.",
    },
    {
      q: "차단 시간대를 왜 15분보다 짧게 설정할 수 없나요?",
      a: "TimeBack의 선택이 아니라 iOS의 제한입니다. 시스템은 15분 미만의 차단 시간대 모니터링을 받아 주지 않고 스케줄 등록 자체를 거부합니다. 예전 TimeBack에서는 일단 저장은 됐는데, 목록에서 켜진 것처럼 보이면서 실제로는 한 번도 차단하지 않는 상태가 됐습니다. 지금은 시간대가 충분히 길어질 때까지 「저장」 버튼이 켜지지 않고, 이유도 바로 알려 줍니다.\n\n알아 두면 좋은 점: 자정을 넘는 시간대는 두 구간으로 계산됩니다 — 자정 이전 부분과 이후 부분으로 나뉘고, 각 구간이 따로 15분을 채워야 합니다. 그래서 23:50–08:00은 저장되지 않지만(자정 전 구간이 10분도 안 되므로) 23:00–08:00은 문제없습니다.\n\n원하는 게 짧은 일회성 차단이라면 규칙 카드의 「지금 차단」을 쓰세요. 즉시 잠기고, 직접 풀 때까지 잠긴 채 유지되며, 최소 길이 제한도 없습니다.",
    },
    {
      q: "웹사이트 규칙에서 어떤 사이트는 사용량 숫자가 안 보이는 이유는요?",
      a: "규칙 카드의 사용량은 Apple 스크린 타임 데이터에서 오고, 웹사이트 사용량도 포함됩니다(같은 Apple 계정에서 「기기 간 공유」를 켠 다른 기기 — 예컨대 Mac의 Safari로 본 시간까지). 대부분의 웹사이트는 정상적으로 표시됩니다.\n\n다만 실측 결과, 일부 웹사이트는 시스템이 대응하는 앱의 사용량으로 영구히 분류해서, 어떤 기기에서도 「웹사이트」 차원의 데이터가 더 이상 생기지 않습니다. 확인된 예가 youtube.com입니다. 그 브라우징 시간은 YouTube 앱 사용량으로 집계되며, Mac의 YouTube 웹 앱을 지우거나 iPhone의 YouTube 앱을 삭제해도 마찬가지입니다. 이는 Apple의 데이터 분류 계층에서 일어나는 일이라, 존재하지 않는 데이터를 TimeBack이 읽을 수는 없습니다.\n\n중요한 점: 차단에는 영향이 없습니다. 이런 사이트의 브라우징 시간도 규칙의 제한 판정에는 그대로 계산되고, 시간이 되면 어김없이 잠깁니다 — 카드의 사용량 숫자에 그 몫이 안 보일 뿐입니다. 웹사이트 규칙이 「숫자는 작은데 잠기는」 경우, 대개 이것이 원인입니다(아니면 사용이 다른 기기에서 발생했거나요).",
    },
  ],
  contact: {
    heading: "원하는 답을 못 찾으셨나요?",
    body: "메일 주세요 — 모두 확인합니다.",
    emailLabel: "이메일:",
  },
};

const de: FaqContent = {
  title: "Häufige Fragen",
  intro:
    "Eine kurze Liste der Fragen, die am häufigsten kommen — wie Sperren wirklich funktionieren, warum bestimmte Taps nötig sind, und wie deine Daten behandelt werden.",
  entries: [
    {
      q: "Warum dauert die Sperre manchmal ein paar Sekunden?",
      a: "Sobald du eine Regel aktivierst, meldet TimeBack die Sperre sofort an iOS. Den Sperrbildschirm über der gesperrten App zeichnet allerdings iOS selbst — und iOS braucht dafür gelegentlich ein paar Sekunden (manchmal länger), besonders direkt nach mehreren schnellen Änderungen. Wenn der Sperrbildschirm noch nicht da ist, ist die Sperre trotzdem schon aktiv. Kurz Geduld; ständiges Ein- und Ausschalten kann iOS sogar zusätzlich verlangsamen.",
    },
    {
      q: "Warum muss ich nach einer Pause auf „Weiter“ tippen?",
      a: "Wenn die Pause endet, sperrt sich die App erneut und TimeBack wartet, bis du auf Weiter tippst, statt im Hintergrund still zu entsperren. Das hat zwei Gründe: ein Plattform-Limit — der Sperrbildschirm darf eine Entsperrung nicht selbst auslösen — und eine bewusste Designentscheidung. Dieser eine kleine Tap ist der Moment, in dem du dich aktiv entscheidest, ob du wirklich wieder reingehen willst.",
    },
    {
      q: "Was ist der Unterschied zwischen Tageslimits und Zeitplänen?",
      a: "Ein Tageslimit ist ein Zeitbudget: Die App bleibt verfügbar, bis du die für heute erlaubten Minuten aufgebraucht hast — danach wird sie gesperrt. Ein Zeitplan ist ein Zeitfenster: In den festgelegten Stunden (etwa 22:00–08:00) sind die betroffenen Apps gesperrt, egal wie wenig du sie genutzt hast. Beide arbeiten unabhängig voneinander, und eine App kann gleichzeitig unter beiden Regeln stehen.",
    },
    {
      q: "Was prüfe ich, wenn eine Regel nicht greift?",
      a: "1) Öffne TimeBack einmal — bei jedem Wechsel in den Vordergrund werden die Regeln neu mit dem System abgeglichen. 2) Stelle sicher, dass die Bildschirmzeit-Berechtigung noch erteilt ist (iOS Einstellungen → Bildschirmzeit). 3) Öffne die Regel und prüfe, ob sie aktiviert ist und noch Apps ausgewählt sind. 4) Bei Zeitplänen: Zeitfenster und Wochentage gegenprüfen. 5) Immer noch nicht? Schreib uns über Einstellungen → Support — die E-Mail enthält automatisch deine App-Version, dann können wir schneller helfen.",
    },
    {
      q: "Lädt TimeBack meine Nutzungsdaten hoch?",
      a: "Nein. Deine Nutzungsdaten bleiben auf deinem Gerät. TimeBack hat keine Konten und kein Analytics. Auch Apples Screen-Time-Framework ist so gebaut, dass TimeBack selbst nur mit anonymen App-Referenzen arbeitet — und nie eine lesbare Liste deiner Nutzung sieht.",
    },
    {
      q: "Warum braucht TimeBack die Bildschirmzeit-Berechtigung?",
      a: "Die Bildschirmzeit-Berechtigung (Apples Family Controls) ist die einzige Möglichkeit in iOS, dass eine App eine andere einschränken darf. Alles, was TimeBack tut — Sperrbildschirme, Minutenzählung, Zeitpläne — basiert darauf. Ohne diese Berechtigung kann nichts gesperrt werden, und falls sie später entzogen wird, ruhen alle Regeln, bis sie wieder erteilt wird.",
    },
    {
      q: "Warum kann ich nach dem Aktivieren von „App-Löschung verhindern“ gar keine App mehr löschen?",
      a: "So funktioniert dieser iOS-Schalter: Apples Screen-Time-Framework bietet nur eine einzige, gerätweite Beschränkung für das Löschen von Apps — keine pro App. Wenn du „App-Löschung verhindern“ aktivierst, verhindert iOS das Löschen jeder App auf dem Gerät — TimeBack eingeschlossen, und genau das ist der Sinn der Funktion; TimeBack kann sich nicht nur selbst schützen. Der Bestätigungsdialog sagt dir das, bevor irgendetwas angewendet wird, und du kannst den Schalter jederzeit wieder ausschalten (hast du einen Wächter-Code eingerichtet, wird er vor dem Ausschalten abgefragt).",
    },
    {
      q: "Warum sperrt ein Tageslimit manchmal ein paar Minuten zu früh?",
      a: "TimeBack meldet iOS exakt die Minuten, die du eingestellt hast. iOS führt intern jedoch zwei getrennte Zähler für die App-Nutzung: einen, der Limit-Ereignisse auslöst, und einen hinter der Nutzungsanzeige auf dem Dashboard (die mit der System-Bildschirmzeit übereinstimmt). In unseren Messungen können die beiden am selben Tag um mehrere Minuten auseinanderliegen, wobei der Ereignis-Zähler vorausläuft — die Sperre kann also erscheinen, während das Dashboard noch ein paar Minuten Rest anzeigt. Das passiert innerhalb von iOS und betrifft auch Apples eigene Bildschirmzeit-Limits; TimeBack kann die Dashboard-Zahl im Moment der Durchsetzung nicht auslesen, um zu korrigieren.\n\nFühlt sich eine Sperre zu früh an, öffne TimeBack und nutze „Einmal entsperren“ auf der Regelkarte (oder schalte die Regel aus) — du behältst die Kontrolle. Der Sperrbildschirm selbst bleibt standhaft: Sein OK-Button schließt nur die App, ohne die Sperre aufzuheben — ein reflexhafter Tipp kann dein Limit also nicht aushebeln. Um Mitternacht beginnt alles von vorn.",
    },
    {
      q: "Warum kann ich keine Sperrzeit unter 15 Minuten einstellen?",
      a: "Das ist eine iOS-Grenze, keine Entscheidung von TimeBack: Das System überwacht kein Sperrfenster unter 15 Minuten und lehnt den Zeitplan schlicht ab. Früher ließ TimeBack dich so eines trotzdem speichern — es lag dann scheinbar aktiv in deiner Liste und hat nie etwas gesperrt. Jetzt bleibt der Speichern-Button aus, bis das Fenster lang genug ist, und nennt dir den Grund.\n\nEin Detail lohnt sich zu wissen: Ein Fenster über Mitternacht zählt als zwei getrennte Zeiträume — der Teil vor und der Teil nach Mitternacht — und jeder braucht seine eigenen 15 Minuten. 23:50–08:00 lässt sich also nicht speichern (vor Mitternacht liegen kaum zehn Minuten), 23:00–08:00 dagegen schon.\n\nWillst du eigentlich nur eine kurze, einmalige Sperre, nimm stattdessen „Jetzt sperren“ auf der Regelkarte: Die Sperre greift sofort und hält, bis du sie aufhebst — ganz ohne Mindestlänge.",
    },
    {
      q: "Warum zeigt eine Website-Regel für manche Websites keine Nutzungszahlen?",
      a: "Die Nutzungszahl auf einer Regelkarte stammt aus Apples Bildschirmzeit-Daten, und Websites sind darin enthalten — auch das Surfen auf anderen Geräten mit demselben Apple-Account, wenn „Geräteübergreifend teilen“ aktiv ist (etwa Safari auf dem Mac). Bei der großen Mehrheit der Websites funktioniert das wie erwartet.\n\nIn unseren Tests werden allerdings einzelne Websites vom System dauerhaft der zugehörigen App zugerechnet und erzeugen auf keinem Gerät mehr Daten auf Website-Ebene. Das bestätigte Beispiel ist youtube.com: Die Surfzeit wird als Nutzung der YouTube-App gezählt — selbst nachdem die YouTube-Web-App auf dem Mac gelöscht und die YouTube-App auf dem iPhone deinstalliert wurde. Das geschieht in Apples Zuordnungsschicht; TimeBack kann keine Daten lesen, die nie entstehen.\n\nDas Wichtigste: Die Sperre ist nicht betroffen. Zeit auf solchen Websites zählt ganz normal auf das Limit der Regel ein, und die Sperre kommt pünktlich — nur die Nutzungszahl auf der Karte kann diesen Anteil nicht zeigen. Sperrt eine Website-Regel, obwohl die Zahl klein aussieht, ist das meist der Grund (oder die Nutzung fand auf einem anderen Gerät statt).",
    },
  ],
  contact: {
    heading: "Keine passende Antwort gefunden?",
    body: "Schreib uns — wir lesen jede Nachricht.",
    emailLabel: "E-Mail:",
  },
};

const fr: FaqContent = {
  title: "Foire aux questions",
  intro:
    "Les questions qui reviennent le plus souvent — comment le blocage agit vraiment, pourquoi certains tapotages sont nécessaires, et comment vos données sont traitées.",
  entries: [
    {
      q: "Pourquoi le blocage met-il parfois quelques secondes ?",
      a: "Quand vous activez une règle, TimeBack enregistre immédiatement le blocage auprès d'iOS. L'écran de blocage qui apparaît sur l'app concernée est toutefois dessiné par iOS lui-même — et iOS peut mettre quelques secondes (parfois davantage) à le rafraîchir, surtout juste après plusieurs changements rapides. Si l'écran n'est pas encore visible, le blocage est déjà en place. Patientez un instant ; basculer la règle plusieurs fois peut justement ralentir iOS.",
    },
    {
      q: "Pourquoi dois-je tapoter Continuer après une pause ?",
      a: "À la fin d'une pause, l'app se reverrouille et TimeBack attend que vous tapotiez Continuer plutôt que de déverrouiller en silence en arrière-plan. C'est en partie une règle plateforme — l'écran qui affiche le verrou n'a pas le droit de déverrouiller seul — et en partie un choix de design : ce petit tapotage est le moment où vous décidez si vous voulez vraiment y retourner.",
    },
    {
      q: "Quelle est la différence entre les Limites quotidiennes et les Horaires ?",
      a: "Une Limite quotidienne est un budget de temps : l'app reste disponible jusqu'à ce que vous ayez utilisé les minutes que vous avez allouées pour la journée, puis elle se verrouille. Un Horaire est une plage horaire : les apps concernées sont verrouillées pendant les heures que vous définissez (par exemple 22h00–08h00), peu importe combien de temps vous les avez utilisées. Les deux fonctionnent indépendamment, et la même app peut être couverte par les deux.",
    },
    {
      q: "Que vérifier si une règle ne fonctionne pas ?",
      a: "1) Ouvrez TimeBack une fois — les règles se resynchronisent avec le système à chaque retour au premier plan. 2) Vérifiez que l'autorisation Temps d'écran est toujours accordée (Réglages iOS → Temps d'écran). 3) Ouvrez la règle et confirmez qu'elle est activée et que des apps sont toujours sélectionnées. 4) Pour les Horaires, revérifiez la plage et les jours de répétition. 5) Toujours bloqué ? Écrivez-nous depuis Réglages → Assistance — le message arrive avec votre version d'app pré-remplie, nous pouvons ainsi vous aider plus vite.",
    },
    {
      q: "TimeBack envoie-t-il mes données d'usage ?",
      a: "Non. Vos données d'usage restent sur votre appareil. TimeBack n'a ni compte ni outils d'analyse. Le framework Screen Time d'Apple est aussi conçu de telle sorte que TimeBack lui-même ne manipule que des références d'apps anonymisées — jamais une liste lisible de ce que vous utilisez.",
    },
    {
      q: "Pourquoi TimeBack a-t-il besoin de l'autorisation Temps d'écran ?",
      a: "L'autorisation Temps d'écran (Family Controls d'Apple) est le seul mécanisme iOS qui permette à une app d'en limiter une autre. Tout ce que fait TimeBack — écrans de blocage, comptage des minutes, horaires — repose dessus. Sans cette autorisation, rien ne peut être bloqué ; et si elle est révoquée plus tard, toutes les règles s'arrêtent jusqu'à ce qu'elle soit redonnée.",
    },
    {
      q: "Pourquoi ne puis-je plus supprimer aucune app après avoir activé « Empêcher la suppression d'apps » ?",
      a: "C'est le fonctionnement même de cet interrupteur iOS : le framework Temps d'écran d'Apple ne propose qu'une seule restriction de suppression, à l'échelle de l'appareil — pas de version par app. Quand vous activez « Empêcher la suppression d'apps », iOS empêche la suppression de toutes les apps de l'appareil — TimeBack compris, et c'est justement le but ; TimeBack n'a aucun moyen de ne protéger que lui-même. La boîte de confirmation vous le dit avant toute application, et vous pouvez désactiver l'interrupteur à tout moment (si vous avez défini un code gardien, il vous sera demandé d'abord).",
    },
    {
      q: "Pourquoi une Limite quotidienne verrouille-t-elle parfois quelques minutes en avance ?",
      a: "TimeBack demande à iOS de déclencher la limite exactement aux minutes que vous avez fixées. Mais iOS tient deux compteurs internes distincts de l'usage des apps : celui qui déclenche les événements de limite, et celui derrière le chiffre d'usage affiché sur le tableau de bord (identique à l'app Temps d'écran du système). Dans nos mesures, les deux peuvent diverger de plusieurs minutes le même jour, le compteur d'événements prenant de l'avance — le verrou peut donc apparaître alors que le tableau de bord affiche encore quelques minutes restantes. Cela se produit à l'intérieur d'iOS et touche aussi les limites Temps d'écran d'Apple ; TimeBack ne peut pas lire le chiffre du tableau de bord au moment de l'application pour corriger.\n\nSi un verrou vous semble en avance, ouvrez TimeBack et utilisez « Déverrouiller une fois » sur la carte de la règle (ou désactivez la règle) — vous gardez la main. L'écran de blocage, lui, reste ferme : son bouton OK ferme l'app sans lever le verrou, pour qu'un tapotement réflexe ne puisse pas annuler votre limite. Tout se remet à zéro à minuit.",
    },
    {
      q: "Pourquoi ne puis-je pas définir une période de blocage de moins de 15 minutes ?",
      a: "C'est une limite d'iOS, pas un choix de TimeBack : le système refuse de surveiller une fenêtre de blocage de moins de 15 minutes et rejette l'horaire d'emblée. Avant, TimeBack vous laissait quand même l'enregistrer — il restait alors dans votre liste, l'air activé, sans jamais rien bloquer. Désormais le bouton Enregistrer reste éteint tant que la fenêtre n'est pas assez longue, et vous en donne la raison.\n\nUn détail à connaître : une fenêtre qui passe minuit compte comme deux périodes distinctes — la partie avant minuit et celle après — et chacune doit faire ses 15 minutes. Ainsi 23h50–08h00 ne s'enregistre pas (à peine dix minutes tombent avant minuit), alors que 23h00–08h00 passe sans problème.\n\nSi ce que vous voulez, c'est un blocage court et ponctuel, utilisez plutôt « Bloquer » sur la carte de la règle : le verrou s'applique immédiatement et tient jusqu'à ce que vous le leviez, sans durée minimale.",
    },
    {
      q: "Pourquoi certains sites n'affichent-ils aucun chiffre d'usage dans une règle de sites web ?",
      a: "Le chiffre d'usage sur la carte d'une règle vient des données Temps d'écran d'Apple, sites web compris — y compris la navigation sur vos autres appareils du même compte Apple si « Partager sur les appareils » est activé (Safari sur votre Mac, par exemple). Pour l'immense majorité des sites, cela fonctionne normalement.\n\nNos tests montrent toutefois que certains sites sont durablement rattachés par le système à l'app correspondante et cessent de produire des données « site web » sur tous les appareils. L'exemple confirmé est youtube.com : son temps de navigation est compté comme usage de l'app YouTube — même après suppression de l'app web YouTube sur le Mac et désinstallation de l'app YouTube sur l'iPhone. Cela se passe dans la couche d'attribution des données d'Apple ; TimeBack ne peut pas lire des données qui n'existent pas.\n\nL'essentiel : le blocage n'est pas affecté. Le temps passé sur ces sites compte normalement dans la limite de la règle, et le verrou tombe à l'heure — seul le chiffre d'usage de la carte ne peut pas montrer cette part. Si une règle de sites web verrouille alors que le chiffre paraît minuscule, c'est généralement la raison (ou l'usage a eu lieu sur un autre appareil).",
    },
  ],
  contact: {
    heading: "Vous n'avez pas trouvé votre réponse ?",
    body: "Écrivez-nous — nous lisons chaque message.",
    emailLabel: "E-mail :",
  },
};

const faqByLocale: Record<Locale, FaqContent> = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant,
  ja,
  ko,
  de,
  fr,
};

export function getFaq(locale: Locale): FaqContent {
  return faqByLocale[locale] ?? faqByLocale.en;
}
