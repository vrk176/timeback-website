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
      q: "休息结束后，为什么还要点一下「继续」？",
      a: "休息结束时 App 会重新锁上，TimeBack 会等你点一下「继续」，而不是在后台悄悄解锁。这一半是平台规则——负责显示锁定页的组件，不被允许自行完成解锁；另一半是有意为之：多这一下，正好给你一个想清楚「要不要继续」的瞬间。",
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
      q: "休息結束後，為什麼還要按一下「繼續」？",
      a: "休息結束時 App 會重新鎖上，TimeBack 會等你按一下「繼續」，而不是在背景悄悄解鎖。一半是平台規則——負責顯示鎖定畫面的元件，不被允許自行完成解鎖；另一半是刻意的設計：多這一下，剛好留給你一個想清楚「要不要繼續」的瞬間。",
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
      q: "休憩が終わったあとに「続行」を押すのはなぜ？",
      a: "休憩が終わると App はもう一度ロックされ、TimeBack は裏でこっそり解除するのではなく、あなたが「続行」をタップするのを待ちます。これは iOS の仕様上の制約でもあり（ロック画面側からの自動解除は許可されていません）、同時にデザイン上の意図でもあります — その小さなひとタップが「本当にもう一度開くか」を選び直す瞬間になります。",
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
      q: "휴식이 끝난 뒤 왜 「계속」을 눌러야 하나요?",
      a: "휴식이 끝나면 앱이 다시 잠기고, TimeBack은 백그라운드에서 조용히 풀어 주는 대신 사용자가 「계속」을 직접 누르길 기다립니다. 절반은 플랫폼 규정 때문이고(잠금을 보여 주는 화면이 스스로 잠금을 해제할 수 없습니다), 절반은 의도된 디자인입니다 — 그 한 번의 탭이 「정말 다시 들어갈까?」를 잠깐 멈춰 생각하는 순간이 됩니다.",
    },
    {
      q: "일일 제한과 일정은 어떻게 다른가요?",
      a: "「일일 제한」은 시간 예산입니다. 오늘 허용한 분을 모두 쓸 때까지는 앱을 사용할 수 있고, 다 쓰면 잠깁니다. 「일정」은 시간 구간입니다. 설정한 시간대(예: 22:00–08:00)에는 그동안 얼마나 썼는지와 무관하게 해당 앱이 잠깁니다. 두 가지는 독립적으로 작동하며, 같은 앱에 동시에 적용할 수도 있어요.",
    },
    {
      q: "규칙이 작동하지 않을 때 무엇을 확인하나요?",
      a: "1) TimeBack을 한 번 열어 보세요 — 앱이 전면으로 올라올 때마다 규칙이 시스템과 다시 맞춰집니다. 2) Screen Time 권한이 그대로 켜져 있는지 확인하세요(iOS 설정 → 스크린 타임). 3) 해당 규칙을 열어 활성 상태이고 앱이 그대로 선택돼 있는지 확인합니다. 4) 일정 규칙이라면 시간 구간과 반복 요일도 다시 봐 주세요. 5) 그래도 해결되지 않으면 설정 → 지원에서 메일을 보내 주세요 — 버전 정보가 자동으로 채워져 있어 더 빠르게 도와 드릴 수 있습니다.",
    },
    {
      q: "TimeBack이 제 사용 데이터를 업로드하나요?",
      a: "아니요. 사용 데이터는 기기 밖으로 나가지 않습니다. TimeBack에는 계정도, 분석 기능도 없습니다. 또한 Apple의 Screen Time 프레임워크 구조상 TimeBack 자체도 익명화된 앱 참조만 다룰 수 있어, 무엇을 썼는지 읽을 수 있는 목록은 가지고 있지 않습니다.",
    },
    {
      q: "Screen Time 권한이 왜 필요한가요?",
      a: "Screen Time 권한(Apple의 Family Controls)은 iOS에서 한 앱이 다른 앱을 제한할 수 있는 유일한 통로입니다. TimeBack의 차단 화면, 시간 계산, 일정 — 모두 그 위에서 동작합니다. 권한이 없으면 어떤 것도 차단할 수 없고, 나중에 해제되면 다시 허용할 때까지 모든 규칙이 멈춥니다.",
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
