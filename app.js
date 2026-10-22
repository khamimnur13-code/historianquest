/**
         * WEB AUDIO API SYNTHESIZER ENGINE
         */
        class SoundEngine {
            constructor() {
                this.ctx = null;
                this.muted = false;
            }

            init() {
                if (!this.ctx) {
                    const AudioCtx = window.AudioContext || window.webkitAudioContext;
                    this.ctx = new AudioCtx();
                }
            }

            playClick() {
                if (this.muted) return;
                this.init();
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(600, this.ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.05);
                gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.05);
            }

            playFootstep() {
                if (this.muted) return;
                this.init();
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(150, this.ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + 0.07);
                gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.07);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.07);
            }

            playTimerTick() {
                if (this.muted) return;
                this.init();
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'square';
                osc.frequency.setValueAtTime(900, this.ctx.currentTime);
                gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.03);
            }

            playCorrect() {
                if (this.muted) return;
                this.init();
                const notes = [523.25, 659.25, 783.99, 1046.50];
                notes.forEach((freq, idx) => {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.07);
                    gain.gain.setValueAtTime(0.18, this.ctx.currentTime + idx * 0.07);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.07 + 0.18);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(this.ctx.currentTime + idx * 0.07);
                    osc.stop(this.ctx.currentTime + idx * 0.07 + 0.18);
                });
            }

            playWrong() {
                if (this.muted) return;
                this.init();
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(220, this.ctx.currentTime);
                osc.frequency.linearRampToValueAtTime(120, this.ctx.currentTime + 0.25);
                gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.25);
            }

            playLevelUp() {
                if (this.muted) return;
                this.init();
                const chord = [392.00, 493.88, 587.33, 783.99, 987.77];
                chord.forEach((freq, idx) => {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);
                    gain.gain.setValueAtTime(0.22, this.ctx.currentTime + idx * 0.06);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.06 + 0.5);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(this.ctx.currentTime + idx * 0.06);
                    osc.stop(this.ctx.currentTime + idx * 0.06 + 0.5);
                });
            }
        }

        /**
         * AVATAR CHARACTERS LIST
         */
        const CHARACTERS = [
            {
                id: 'putera',
                name: 'Putera',
                badge: '👦',
                role: 'Penjelajah Cilik',
                svg: `<svg viewBox="0 0 200 200" class="w-full h-full">
                    <ellipse cx="100" cy="180" rx="42" ry="8" fill="rgba(0,0,0,0.3)"/>
                    <rect class="leg-left" x="80" y="142" width="14" height="28" rx="4" fill="#e0a96d"/>
                    <rect class="leg-right" x="106" y="142" width="14" height="28" rx="4" fill="#e0a96d"/>
                    <path d="M 76 164 L 96 164 L 96 178 L 76 178 Z" fill="#451a03"/>
                    <path d="M 104 164 L 124 164 L 124 178 L 104 178 Z" fill="#451a03"/>
                    <path d="M 78 132 L 122 132 L 120 148 L 100 148 L 100 144 L 80 148 Z" fill="#1e3a8a"/>
                    <rect x="75" y="90" width="50" height="44" rx="8" fill="#facc15"/>
                    <path d="M 75 90 L 92 90 L 95 134 L 75 134 Z" fill="#15803d"/>
                    <path d="M 125 90 L 108 90 L 105 134 L 125 134 Z" fill="#15803d"/>
                    <circle cx="100" cy="68" r="28" fill="#e0a96d"/>
                    <circle cx="91" cy="65" r="4.5" fill="#1e293b"/>
                    <circle cx="109" cy="65" r="4.5" fill="#1e293b"/>
                    <path d="M 91 76 Q 100 85 109 76" fill="none" stroke="#451a03" stroke-width="2.5"/>
                    <path d="M 70 54 Q 100 42 130 54 L 132 60 Q 100 50 68 60 Z" fill="#9a3412"/>
                    <path d="M 92 42 L 100 32 L 108 42 Z" fill="#facc15"/>
                </svg>`
            },
            {
                id: 'dewi',
                name: 'Dewi',
                badge: '👧',
                role: 'Srikandi Budaya',
                svg: `<svg viewBox="0 0 200 200" class="w-full h-full">
                    <ellipse cx="100" cy="180" rx="42" ry="8" fill="rgba(0,0,0,0.3)"/>
                    <rect class="leg-left" x="82" y="142" width="13" height="28" rx="4" fill="#f3a683"/>
                    <rect class="leg-right" x="105" y="142" width="13" height="28" rx="4" fill="#f3a683"/>
                    <path d="M 78 165 L 96 165 L 96 178 L 78 178 Z" fill="#881337"/>
                    <path d="M 104 165 L 122 165 L 122 178 L 104 178 Z" fill="#881337"/>
                    <path d="M 72 90 L 128 90 L 135 145 L 65 145 Z" fill="#be123c"/>
                    <path d="M 72 90 L 128 90 L 120 120 L 80 120 Z" fill="#facc15"/>
                    <circle cx="100" cy="68" r="27" fill="#f3a683"/>
                    <circle cx="91" cy="65" r="4" fill="#0f172a"/>
                    <circle cx="109" cy="65" r="4" fill="#0f172a"/>
                    <path d="M 92 76 Q 100 84 108 76" fill="none" stroke="#881337" stroke-width="2.5"/>
                    <path d="M 70 54 Q 100 35 130 54 L 125 45 Q 100 25 75 45 Z" fill="#facc15"/>
                    <circle cx="100" cy="38" r="4" fill="#ef4444"/>
                </svg>`
            },
            {
                id: 'bimo',
                name: 'Bimo',
                badge: '🧑',
                role: 'Kesatria Sejarah',
                svg: `<svg viewBox="0 0 200 200" class="w-full h-full">
                    <ellipse cx="100" cy="180" rx="42" ry="8" fill="rgba(0,0,0,0.3)"/>
                    <rect class="leg-left" x="80" y="142" width="14" height="28" rx="4" fill="#d97706"/>
                    <rect class="leg-right" x="106" y="142" width="14" height="28" rx="4" fill="#d97706"/>
                    <path d="M 76 164 L 96 164 L 96 178 L 76 178 Z" fill="#1e1b4b"/>
                    <path d="M 104 164 L 124 164 L 124 178 L 104 178 Z" fill="#1e1b4b"/>
                    <rect x="72" y="90" width="56" height="48" rx="6" fill="#1e293b"/>
                    <path d="M 72 90 L 100 130 L 128 90 Z" fill="#b45309"/>
                    <circle cx="100" cy="68" r="28" fill="#d97706"/>
                    <circle cx="90" cy="65" r="4.5" fill="#020617"/>
                    <circle cx="110" cy="65" r="4.5" fill="#020617"/>
                    <path d="M 90 77 Q 100 85 110 77" fill="none" stroke="#451a03" stroke-width="3"/>
                    <path d="M 68 62 C 68 40, 132 40, 132 62 Z" fill="#78350f"/>
                    <circle cx="132" cy="60" r="7" fill="#451a03"/>
                </svg>`
            },
            {
                id: 'kirana',
                name: 'Kirana',
                badge: '👩',
                role: 'Peneliti Muda',
                svg: `<svg viewBox="0 0 200 200" class="w-full h-full">
                    <ellipse cx="100" cy="180" rx="42" ry="8" fill="rgba(0,0,0,0.3)"/>
                    <rect class="leg-left" x="82" y="142" width="13" height="28" rx="4" fill="#fed7aa"/>
                    <rect class="leg-right" x="105" y="142" width="13" height="28" rx="4" fill="#fed7aa"/>
                    <path d="M 78 165 L 96 165 L 96 178 L 78 178 Z" fill="#0284c7"/>
                    <path d="M 104 165 L 122 165 L 122 178 L 104 178 Z" fill="#0284c7"/>
                    <rect x="74" y="90" width="52" height="46" rx="8" fill="#0ea5e9"/>
                    <circle cx="100" cy="68" r="27" fill="#fed7aa"/>
                    <circle cx="90" cy="65" r="8" fill="none" stroke="#facc15" stroke-width="2.5"/>
                    <circle cx="110" cy="65" r="8" fill="none" stroke="#facc15" stroke-width="2.5"/>
                    <line x1="98" y1="65" x2="102" y2="65" stroke="#facc15" stroke-width="2.5"/>
                    <path d="M 92 78 Q 100 85 108 78" fill="none" stroke="#451a03" stroke-width="2.5"/>
                    <path d="M 70 52 Q 100 30 130 52 L 135 58 L 65 58 Z" fill="#0369a1"/>
                </svg>`
            }
        ];

        /**
         * 9 SITES CURRICULUM DATA IN NGAWI (FACTUAL & COMPREHENSIVE)
         */
        const GAME_LEVELS = [
            {
                id: 1,
                name: "Museum Trinil",
                era: "Prasejarah",
                icon: "🦴",
                pointOnPathPct: 0.02,
                // Mudah diganti URL foto resminya oleh pengembang/guru di bawah ini:
                defaultImg: "images/museum-trinil.jfif",
                summaryText: `<h3 class="text-yellow-300 font-bold text-sm">Museum Trinil — Peninggalan Prasejarah</h3><p><b>Ekskavasi dan tujuan penelitian.</b> Ekskavasi di Trinil dipimpin Eugène Dubois, dokter militer sekaligus ahli anatomi asal Belanda. Ia datang ke Hindia Belanda untuk meneliti gagasan evolusi Charles Darwin dan mencari bukti spesies perantara yang saat itu disebut “the missing link”.</p><p><b>Penemuan penting.</b> Pada 1891, Dubois menemukan gigi molar (Trinil 1) dan atap tempurung kepala (Trinil 2), dengan perkiraan volume otak sekitar 900 cc. Pada 1892, sekitar 15 meter dari temuan awal, ditemukan tulang paha kiri utuh (Trinil 3). Bentuk tulang paha menunjukkan kemampuan berjalan tegak.</p><p><b>Penamaan.</b> Dubois menggabungkan temuan itu dalam nama <i>Pithecanthropus erectus</i>, yang berarti manusia-kera yang berjalan tegak. Pada 1950-an, Ernst Mayr merevisi klasifikasi tersebut ke genus <i>Homo</i>; nama yang dikenal sekarang adalah <i>Homo erectus</i>.</p><p><b>Sejarah museum.</b> Wirodiharjo mulai mengumpulkan dan mengamankan fosil lokal pada 1967. Museum Trinil diresmikan pada 20 November 1991 oleh Gubernur Jawa Timur, Soelarso.</p><p><b>Koleksi.</b> Museum menyimpan replika/gips fosil manusia purba; fosil fauna Pleistosen seperti gajah purba <i>Stegodon trigonocephalus</i>, kuda nil purba, banteng, harimau, badak, dan kerbau purba; serta diorama kehidupan di sekitar Bengawan Solo dan peralatan batu. Fosil asli <i>Pithecanthropus erectus</i> yang disebut dalam materi tersimpan di Museum Naturalis, Leiden, Belanda.</p><p><b>Jejak dunia.</b> Di area luar terdapat tugu peringatan Eugène Dubois yang menandai lokasi penemuan. Trinil juga dikaitkan dengan temuan cangkang kerang berukir geometris berusia sekitar 430.000–540.000 tahun.</p>`,
                card: {
                    title: "Homo erectus & Museum Trinil",
                    desc: "Penemuan bersejarah Pithecanthropus erectus oleh Eugène Dubois dan fosil fauna Pleistosena di tepi Bengawan Solo."
                },
                questions: [
                    {
                        category: "Ekskavasi Bersejarah",
                        question: "Siapa dokter militer dan ahli anatomi Belanda yang memimpin ekskavasi di Trinil untuk membuktikan teori 'the missing link'?",
                        options: [
                            
                            "Soelarso",
                            "Wirodiharjo",
                            "Eugène Dubois",
                            "Ernst Mayr"
                    ],
                        correct: 2,
                        explanation: "Eugène Dubois sengaja datang ke Hindia Belanda untuk mencari fosil perantara kera dan manusia modern berdasarkan teori Darwin."
                    },
                    {
                        category: "Penemuan Fosil Utama",
                        question: "Fosil apa yang ditemukan Dubois pada tahun 1892 yang membuktikan bahwa spesies purba ini telah berjalan tegak sepenuhnya?",
                        options: [
                            
                            "Atap tempurung kepala (Trinil 2)",
                            "Tulang paha kiri utuh (Trinil 3)",
                            "Gigi molar pertama (Trinil 1)",
                            "Tulang panggul Stegodon"
                    ],
                        correct: 1,
                        explanation: "Bentuk morfologi tulang paha kiri (Trinil 3) menunjukkan indikasi kuat bahwa pemiliknya telah berjalan tegak secara bipedal."
                    },
                    {
                        category: "Perintisan Lokal",
                        question: "Siapakah warga lokal yang merintis pengumpulan dan pengamanan fosil purba di kawasan Trinil sejak tahun 1967?",
                        options: [
                            
                            "R.M.T. Brotodiningrat",
                            "Mpu Sindok",
                            "Pringgokusumo",
                            "Wirodiharjo"
                    ],
                        correct: 3,
                        explanation: "Wirodiharjo dengan tekun mengumpulkan fosil lokal hingga museum resmi berdiri dan diresmikan pada 20 November 1991."
                    },
                    {
                        category: "Fosil Fauna Pleistosena",
                        question: "Spesies gajah purba era Pleistosena yang fosil gading dan tulang panggulnya menjadi koleksi utama Museum Trinil adalah...",
                        options: [
                            
                            "Hippopotamus sivalensis",
                            "Bos taurus",
                            "Stegodon trigonocephalus",
                            "Elephas maximus"
                    ],
                        correct: 2,
                        explanation: "Stegodon trigonocephalus merupakan gajah purba berukuran raksasa yang mendiami daratan purba Jawa."
                    },
                    {
                        category: "Signifikansi Dunia",
                        question: "Situs Trinil menyimpan bukti seni abstrak tertua di dunia yang dibuat oleh Homo erectus berupa...",
                        options: [
                            
                            "Ukiran patung dari kayu jati",
                            "Lukisan telapak tangan di dinding gua",
                            "Cangkang kerang terukir garis geometris",
                            "Prasasti batu bertuliskan huruf Pallawa"
                    ],
                        correct: 2,
                        explanation: "Ukiran geometris pada cangkang kerang berusia 430.000–540.000 tahun menjadi bukti kognitif awal spesies Homo erectus."
                    }
                ]
            },
            {
                id: 2,
                name: "Situs Reco Banteng",
                era: "Masa Hindu-Buddha",
                icon: "🐂",
                pointOnPathPct: 0.14,
                defaultImg: "images/situs-reco-banteng.jfif",
                summaryText: `<h3 class="text-yellow-300 font-bold text-sm">Situs Reco Banteng — Masa Hindu-Buddha</h3><p><b>Lokasi dan masa.</b> Situs ini berada di Dusun Reco Banteng, Desa Wonorejo, Kecamatan Kedunggalar, Ngawi. Materi yang diberikan mengidentifikasikannya sebagai kompleks keagamaan Hindu-Buddha dari akhir Majapahit, sekitar abad ke-14 hingga ke-15 Masehi.</p><p><b>Arca Nandi.</b> Artefak utama adalah pahatan lembu jantan yang dalam tradisi Siwa disebut Nandi, wahana Dewa Siwa. Nama lokal “Reco Banteng” muncul karena masyarakat mengira figur lembu tersebut sebagai banteng.</p><p><b>Komponen keagamaan.</b> Lingga-yoni berkaitan dengan pemujaan Siwa dan Parwati. Arca Ganesha dikenal sebagai putra Siwa yang dikaitkan dengan kebijaksanaan serta penghalau rintangan. Miniatur stupa berornamen padma/teratai dalam materi ini ditafsirkan sebagai petunjuk percampuran unsur Siwa-Buddha.</p><p><b>Struktur dan lingkungan.</b> Blok batu andesit menunjukkan bahwa kawasan ini kemungkinan dahulu memiliki bangunan peribadatan berukuran kecil hingga sedang. Letaknya di koridor lembah Bengawan Solo penting karena sungai menjadi jalur transportasi, perdagangan, dan interaksi budaya antara Jawa Tengah dan Jawa Timur.</p><p><b>Pelestarian.</b> Materi menyebut situs sebagai cagar budaya tingkat kabupaten. Sejumlah batu dan permukaan arca mengalami pelapukan biologis seperti lumut/alga serta retakan yang dapat dipengaruhi cuaca, erosi, atau aktivitas manusia. Karena itu, peninggalan perlu dijaga dan tidak disentuh atau dipindahkan sembarangan.</p>`,
                card: {
                    title: "Arca Nandi & Hinterland Majapahit",
                    desc: "Kompleks peribadatan Siwa-Buddha abad ke-14 M di lembah agraris Bengawan Solo."
                },
                questions: [
                    {
                        category: "Ikonografi Artefak",
                        question: "Artefak utama berbentuk lembu jantan wahana Dewa Siwa di Situs Reco Banteng sebenarnya adalah...",
                        options: [
                            
                            "Arca Nandi (Nandiswara)",
                            "Stupa Padmasana",
                            "Lingga-Yoni",
                            "Arca Ganesha"
                    ],
                        correct: 0,
                        explanation: "Masyarakat lokal menyebutnya 'Reco Banteng' karena salah mengidentifikasi arca lembu sakral Nandi sebagai figur banteng."
                    },
                    {
                        category: "Struktur Keagamaan",
                        question: "Pasangan artefak anikonik yang melambangkan manifestasi energi kosmis maskulin-feminin Dewa Siwa dan Parwati di situs ini adalah...",
                        options: [
                            
                            "Saka Guru",
                            "Mustaka Gerabah",
                            "Lingga-Yoni",
                            "Columnar Jointing"
                    ],
                        correct: 2,
                        explanation: "Lingga-Yoni merupakan simbol utama pemujaan Siwaistis untuk memohon kesuburan dan keseimbangan alam."
                    },
                    {
                        category: "Kronologi Sejarah",
                        question: "Berdasarkan penanggalan arkeologis, Situs Reco Banteng berasal dari era akhir kerajaan...",
                        options: [
                            
                            "Kerajaan Majapahit (Abad 14–15 M)",
                            "Kesultanan Demak",
                            "Mataram Kuno Mpu Sindok",
                            "Kesultanan Yogyakarta"
                    ],
                        correct: 0,
                        explanation: "Ciri arsitektur dan miniatur Stupa Padmasana mencerminkan sintretisme keagamaan akhir era Majapahit."
                    },
                    {
                        category: "Geo-Arkeologi",
                        question: "Secara keruangan (spatial analysis), Situs Reco Banteng berada di koridor lembah sungai utama yaitu...",
                        options: [
                            
                            "Bengawan Solo",
                            "Sungai Opak",
                            "Sungai Madiun",
                            "Sungai Brantas"
                    ],
                        correct: 0,
                        explanation: "Bengawan Solo berfungsi sebagai lintasan transportasi perdagangan dan penetrasi budaya pada era klasik Jawa."
                    },
                    {
                        category: "Konteks Keruangan",
                        question: "Kedudukan wilayah Ngawi pada abad ke-14 M sebagai daerah penyokong Trowulan disebut kawasan...",
                        options: [
                            
                            "Kuthanagara (inti kota)",
                            "Tanah Perdikan",
                            "Pathok Nagara",
                            "Hinterland (agraris pinggiran)"
                    ],
                        correct: 3,
                        explanation: "Hinterland menghubungkan pusat Majapahit dengan daerah pedalaman barat seperti Lawu dan Pajang."
                    }
                ]
            },
            {
                id: 3,
                name: "Situs Selo Pinanjer",
                era: "Masa Hindu-Buddha",
                icon: "🪨",
                pointOnPathPct: 0.27,
                defaultImg: "images/situs-selopinanjer.webp",
                summaryText: `<h3 class="text-yellow-300 font-bold text-sm">Situs Selo Pinanjer — Peninggalan Hindu</h3><p><b>Lokasi dan bahan.</b> Reruntuhan situs berada di kawasan hutan jati Desa Pandean, Kecamatan Karanganyar, Ngawi. Tidak seperti banyak candi yang memakai andesit atau bata merah, situs ini didominasi blok batu kapur/gamping bersudut simetris. Materi mengaitkan pemilihan bahan itu dengan batuan sedimen karbonat Pegunungan Kendeng Utara.</p><p><b>Ornamen dan latar agama.</b> Fragmen relief figuratif, ornamen candi, dan pecahan arca berciri Siwaistis menjadi petunjuk bahwa tempat ini berkaitan dengan pemujaan Hindu aliran Siwa.</p><p><b>Perkiraan masa.</b> Berdasarkan perbandingan bentuk arsitektur dan gaya pahatan, situs diperkirakan berasal dari masa transisi akhir Mataram Kuno/Medang hingga pemerintahan Mpu Sindok, sekitar abad ke-9 sampai ke-10 Masehi. Ini merupakan penanggalan relatif berdasarkan tipologi, bukan tanggal pasti yang disebutkan dalam materi.</p><p><b>Nama dan lanskap.</b> “Selo” berarti batu, sedangkan “Pinanjer” merujuk pada sesuatu yang tertancap atau didirikan tegak. Lokasinya di kawasan hutan dan ketinggian Pegunungan Kendeng ditafsirkan mungkin berhubungan dengan ruang pemujaan atau pertapaan yang membutuhkan ketenangan. Wilayah ini masih berada dalam jangkauan interaksi kawasan Bengawan Solo.</p><p><b>Kerusakan.</b> Blok batu kapur mengalami pelapukan kimia, keruntuhan struktur, gangguan akar pohon besar seperti kepuh dan jati, serta pergerakan tanah di lereng. Dokumentasi dan perlindungan lingkungan situs penting agar fragmen yang tersisa tidak semakin rusak.</p>`,
                card: {
                    title: "Candi Batu Kapur Selo Pinanjer",
                    desc: "Situs wanasrama batu kapur era Mpu Sindok di kawasan hutan Kendeng Utara."
                },
                questions: [
                    {
                        category: "Material Bangunan",
                        question: "Berbeda dari candi di Jawa Timur yang berbahan andesit/bata, Situs Selo Pinanjer didominasi material...",
                        options: [
                            
                            "Batuan akik kalsedon",
                            "Kayu jati tumpang sari",
                            "Blok batu kapur / gamping simetris",
                            "Bata merah bakar"
                    ],
                        correct: 2,
                        explanation: "Penggunaan batu kapur dipengaruhi oleh litologi lokal Pegunungan Kendeng Utara yang kaya batuan sedimen karbonat."
                    },
                    {
                        category: "Penanggalan Relatif",
                        question: "Situs Selo Pinanjer diperkirakan berasal dari era transisi abad ke-9 hingga 10 Masehi, yaitu masa...",
                        options: [
                            
                            "Masa Pendudukan Belanda",
                            "Akhir Mataram Kuno (Medang) hingga Mpu Sindok",
                            "Kesultanan Mataram Islam",
                            "Era Sultan Agung"
                    ],
                        correct: 1,
                        explanation: "Gaya pahatan dan relief Siwaistis mengonfirmasi era pergeseran pusat kekuasaan ke Jawa Timur pada abad ke-10 M."
                    },
                    {
                        category: "Etimologi Lokal",
                        question: "Istilah lokal 'Selo Pinanjer' secara bahasa merujuk pada arti...",
                        options: [
                            
                            "Rumah kayu di tengah hutan",
                            "Banteng batu yang tidur",
                            "Gerbang benteng tersembunyi",
                            "Batu yang tertancap / didirikan tegak"
                    ],
                        correct: 3,
                        explanation: "'Selo' berarti batu dan 'Pinanjer' berarti tertancap atau didirikan tegak di atas permukaan tanah."
                    },
                    {
                        category: "Fungsi Keagamaan",
                        question: "Letak situs di ketinggian hutan Pegunungan Kendeng mengindikasikan fungsinya sebagai...",
                        options: [
                            
                            "Benteng militer pertahanan",
                            "Pasar perdagangan sungai",
                            "Wanasrama (tempat pertapaan di hutan)",
                            "Istana kediaman raja"
                    ],
                        correct: 2,
                        explanation: "Wanasrama membutuhkan ketenangan spiritual di tengah keheningan alam hutan pedalaman."
                    },
                    {
                        category: "Faktor Kerusakan",
                        question: "Struktur candi mengalami kerusakan fisik berat akibat pelapukan kimia batuan kapur serta intrusi akar pohon...",
                        options: [
                            
                            "Pohon Beringin dan Bakau",
                            "Pohon Sagu dan Kelapa",
                            "Pohon Pinus dan Bambu",
                            "Pohon Kepuh dan Jati"
                    ],
                        correct: 3,
                        explanation: "Sistem perakaran pohon-pohon besar memicu bioturbasi dan keruntuhan struktur blok batu kapur."
                    }
                ]
            },
            {
                id: 4,
                name: "Arca Ganesha & Nandi Ngrambe",
                era: "Masa Hindu-Buddha",
                icon: "🐘",
                pointOnPathPct: 0.38,
                defaultImg: "images/arca-ganesha-pucangan-nandi-ngrambe.jfif",
                summaryText: `<h3 class="text-yellow-300 font-bold text-sm">Arca Ganesha Pucangan dan Arca Nandi Ngrambe</h3><p><b>Makna keagamaan.</b> Kedua artefak dikaitkan dengan tradisi Hindu Siwa di lereng utara Gunung Lawu. Arca Ganesha di Pucangan memiliki tubuh manusia dan kepala gajah. Dalam ikonografi Siwaistis, Ganesha berhubungan dengan kebijaksanaan, ilmu pengetahuan, dan penghalau rintangan.</p><p><b>Arca Nandi.</b> Nandi digambarkan sebagai lembu jantan yang mendekam. Ia dikenal sebagai wahana sekaligus pengawal Dewa Siwa. Dalam tata ruang candi, arca Nandi biasanya ditempatkan di bangunan pendamping yang menghadap candi induk.</p><p><b>Petunjuk kompleks candi.</b> Keberadaan Ganesha dan Nandi di wilayah Ngrambe memberi petunjuk tentang kemungkinan jaringan bangunan peribadatan Siwa yang dahulu lebih luas. Nama Dusun Pendem di Pucangan ditafsirkan berkaitan dengan sesuatu yang tertanam atau terkubur, yang dapat mengingatkan pada sisa fondasi kuno di bawah tanah.</p><p><b>Lanskap Gunung Lawu.</b> Dalam kosmologi Hindu-Buddha, gunung dapat dipandang sebagai gambaran Mahameru, kediaman para dewa. Materi menempatkan lereng utara Lawu—termasuk Ngrambe, Jogorogo, Sine, dan Kendal—sebagai kawasan yang memiliki sebaran peninggalan purbakala dan kemungkinan ruang keagamaan pedalaman.</p><p><b>Pelestarian ex-situ.</b> Penempatan Arca Nandi di halaman SMP Negeri 1 Ngrambe disebut sebagai pelestarian ex-situ, yaitu penyelamatan artefak di luar lokasi asalnya. Artefak harus dijaga dari kerusakan, pencurian, dan perubahan fungsi lahan.</p>`,
                card: {
                    title: "Arca Lereng Gunung Lawu",
                    desc: "Jaringan percandian Hindu Siwa dan penyelamatan pelestarian Ex-Situ di Ngrambe."
                },
                questions: [
                    {
                        category: "Tata Ruang Candi",
                        question: "Pada kompleks candi Hindu tipe Jawa Tengah/Transisi, Arca Ganesha disituskan pada relung dinding bagian...",
                        options: [
                            
                            "Selatan (sisi luar)",
                            "Timur (pintu masuk utama)",
                            "Barat (sisi belakang garbhagriha)",
                            "Utara (sisi depan)"
                    ],
                        correct: 2,
                        explanation: "Arca Ganesha sebagai dewa penghalau rintangan secara tradisional ditempatkan di relung dinding barat candi induk."
                    },
                    {
                        category: "Tata Ruang Candi",
                        question: "Arca Nandi di SMPN 1 Ngrambe diletakkan di Candi Perwara (Pendamping) di sisi timur, menghadap ke...",
                        options: [
                            
                            "Luar kompleks candi",
                            "Sungai Bengawan Solo",
                            "Pintu masuk utama candi induk tempat Lingga-Yoni/Siwa",
                            "Arah utara ke Pegunungan Kendeng"
                    ],
                        correct: 2,
                        explanation: "Arca Nandi sebagai kendaraan Dewa Siwa diletakkan di candi pendamping berhadapan langsung dengan pintu utama."
                    },
                    {
                        category: "Toponim Arkeologis",
                        question: "Nama 'Dusun Pendem' di Pucangan memiliki signifikansi etimologis arkeologi yang merujuk pada...",
                        options: [
                            
                            "Area tempat ditemukannya pondasi kuno yang tertimbun tanah",
                            "Makam tua para bangsawan",
                            "Hutan tempat pertapaan",
                            "Lembah sungai yang dalam"
                    ],
                        correct: 0,
                        explanation: "Istilah 'pendem' (terkubur) merujuk pada bangunan atau pondasi candi yang tertimbun sedimentasi tanah/vulkanik."
                    },
                    {
                        category: "Geo-Spiritual Lawu",
                        question: "Dalam kosmologi Hindu-Buddha, kawasan lereng Gunung Lawu dipandang sebagai replika gunung suci yaitu...",
                        options: [
                            
                            "Mahameru",
                            "Krakatau",
                            "Himalaya",
                            "Kailash"
                    ],
                        correct: 0,
                        explanation: "Gunung dipandang sebagai sthana (kediaman) para dewa dan replika Mahameru pusat alam semesta."
                    },
                    {
                        category: "Pelestarian Budaya",
                        question: "Penempatan Arca Nandi di halaman sekolah SMPN 1 Ngrambe merupakan bentuk pelestarian luar lokasi asli yaitu...",
                        options: [
                            
                            "Pelestarian In-Situ",
                            "Ekskavasi Bawah Air",
                            "Restorasi Total",
                            "Pelestarian Ex-Situ"
                    ],
                        correct: 3,
                        explanation: "Pelestarian Ex-Situ dilakukan untuk mengamankan artefak dari ancaman pencurian atau kerusakan fisik di lokasi asli."
                    }
                ]
            },
            {
                id: 5,
                name: "Masjid Agung Baiturrahman Ngawi",
                era: "Masa Islam",
                icon: "🕌",
                pointOnPathPct: 0.52,
                defaultImg: "images/masjid-agung-baiturrahman-ngawi.jfif",
                summaryText: `<h3 class="text-yellow-300 font-bold text-sm">Masjid Agung Baiturrahman Ngawi — Masa Islam</h3><p><b>Tata ruang kota.</b> Masjid berada di sisi barat Alun-Alun Merdeka Ngawi. Materi mengaitkan susunan ini dengan pola tata kota tradisional Jawa yang memadukan pusat pemerintahan, ruang keagamaan, kegiatan ekonomi, dan alun-alun sebagai ruang terbuka publik.</p><p><b>Kronologi.</b> Menurut catatan yang dirujuk dalam materi, pembangunan dimulai pada 25 November 1879 atas prakarsa Bupati Raden Mas Tumenggung Brotodiningrat dan diselesaikan dengan pemasangan mustaka pada 26 Agustus 1881, bertepatan dengan 1 Syawal 1298 H.</p><p><b>Arsitektur awal.</b> Bangunan awal menggunakan atap tajug bertingkat dan tiang utama atau saka guru dari kayu jati. Bentuk atap dan bukaan bangunan tradisional dapat membantu sirkulasi udara di iklim tropis.</p><p><b>Perubahan bangunan.</b> Materi menyebut pemugaran besar pada 2007–2009 yang membawa unsur neo-vernakular, termasuk kubah bernuansa Timur Tengah, rangka baja modern, dan lantai marmer. Perubahan tersebut membentuk tampilan masjid yang berbeda dari struktur awalnya.</p><p><b>Peran sosial.</b> Selain menjadi tempat ibadah, masjid berfungsi sebagai pusat kegiatan masyarakat, pendidikan Islam, pengelolaan zakat, dan koordinasi kegiatan keagamaan. Masjid menjadi bagian penting dari kehidupan sosial dan sejarah kota Ngawi.</p>`,
                card: {
                    title: "Masjid Agung & Catur Gatra",
                    desc: "Pola tata ruang Macapat alun-alun dan arsitektur Tajug Jawa sejak tahun 1879 M."
                },
                questions: [
                    {
                        category: "Tata Ruang Kota Jawa",
                        question: "Pembangunan Masjid Agung di barat Alun-Alun Merdeka Ngawi mematuhi kosmologi tata ruang tradisional Jawa yang disebut...",
                        options: [
                            
                            "Catur Gatra / Catur Sagotra (Pola Macapat)",
                            "Indische Empire Style",
                            "Pathok Nagara",
                            "Bentengstelsel"
                    ],
                        correct: 0,
                        explanation: "Catur Gatra mengintegrasikan 4 pusat: Pemerintahan (Pendopo), Keagamaan (Masjid), Ekonomi (Pasar), dan Publik (Alun-Alun)."
                    },
                    {
                        category: "Tokoh Pendiri",
                        question: "Siapakah Bupati Ngawi yang menginisiasi pembangunan awal Masjid Agung Baiturrahman pada 25 November 1879 M?",
                        options: [
                            
                            "Wirodiharjo",
                            "Raden Mas Tumenggung Brotodiningrat",
                            "Eugène Dubois",
                            "Raden Patih Pringgokusumo"
                    ],
                        correct: 1,
                        explanation: "R.M.T. Brotodiningrat memimpin konsolidasi birokrasi bumiputra paska-Perang Jawa dengan mendirikan masjid agung kabupaten."
                    },
                    {
                        category: "Tipologi Arsitektur",
                        question: "Struktur atap tradisional vernakular pada bangunan awal masjid yang menciptakan ventilasi silang tropis adalah...",
                        options: [
                            
                            "Kubah Beton Modern",
                            "Atap Tajug Bersusun",
                            "Atap Limasan Kembar",
                            "Atap Gonjong"
                    ],
                        correct: 1,
                        explanation: "Atap Tajug bertingkat memfasilitasi sirkulasi udara panas naik ke atas di iklim tropis basah."
                    },
                    {
                        category: "Material Kayu Utama",
                        question: "Tiang utama (Saka Guru) masjid menggunakan bahan kayu berkualitas tinggi dari hutan Kendeng yaitu...",
                        options: [
                            
                            "Kayu Jati (Tectona grandis)",
                            "Kayu Mahoni",
                            "Kayu Pinus",
                            "Kayu Kelapa"
                    ],
                        correct: 0,
                        explanation: "Kayu Jati Kendeng terkenal memiliki ketahanan mekanis dan ketahanan terhadap serangan rayap yang luar biasa."
                    },
                    {
                        category: "Transformasi Modern",
                        question: "Pemugaran komprehensif tahun 2007–2009 mengubah fasad luar masjid dengan mengadopsi elemen Neo-Vernakular yaitu...",
                        options: [
                            
                            "Tiang batu monolitik Pacitan",
                            "Kombinasi kubah bernuansa Timur Tengah & marmer",
                            "Atap piramida kaca",
                            "Dinding bata tebal benteng"
                    ],
                        correct: 1,
                        explanation: "Pemugaran menambahkan kubah Timur Tengah modern serta lantai marmer untuk kenyamanan termal."
                    }
                ]
            },
            {
                id: 6,
                name: "Kepatihan Ngawi (Eks-Rumah Kepatihan)",
                era: "Masa Islam & Kolonial",
                icon: "🏛️",
                pointOnPathPct: 0.65,
                defaultImg: "images/eks-rumah-kepatihan-ngawi.jpg",
                summaryText: `<h3 class="text-yellow-300 font-bold text-sm">Eks-Rumah Kepatihan Ngawi — Masa Kolonial</h3><p><b>Fungsi dan tokoh.</b> Materi yang dikirim untuk bagian ini menjelaskan Kepatihan Ngawi, bukan Masjid Baiturrahman Ngronggi. Karena itu judul situs diselaraskan menjadi Eks-Rumah Kepatihan Ngawi. Bangunan ini merupakan kediaman resmi sekaligus pusat administrasi patih pada masa birokrasi Hindia Belanda.</p><p><b>Kronologi.</b> Bangunan utama disebut dibangun sekitar 1839 dan berkaitan dengan Raden Patih Pringgokusumo. Setelah Perang Jawa (1825–1830), pemerintahan kolonial menerapkan birokrasi ganda: pejabat Eropa dan pejabat pribumi. Patih menjalankan urusan administratif atas nama bupati.</p><p><b>Arsitektur.</b> Kompleks memadukan unsur Jawa dan Indische Empire Style. Bagian depan memiliki pendopo joglo untuk audiensi dan kegiatan kebudayaan. Pringgitan dan gandok menghubungkan ruang, termasuk area administrasi. Dalem ageng berfungsi sebagai ruang privat, sementara bangunan pendukung menampung abdi dalem dan dapur.</p><p><b>Peran pemerintahan.</b> Kepatihan membantu mengelola urusan hukum lokal, pajak, fasilitas umum, dan administrasi wilayah. Kawasan ini juga menjadi saluran penyebaran budaya Mataram Islam ke wilayah Jawa Timur bagian barat.</p><p><b>Status dan pemanfaatan kembali.</b> Materi menyebut penetapan sebagai bangunan cagar budaya Kabupaten Ngawi melalui Keputusan Bupati Nomor 188/232/404.012/2020. Program restorasi diarahkan untuk menghidupkan kembali kompleks sebagai ruang seni, ruang publik, dan Taman Budaya Ngawi.</p>`,
                card: {
                    title: "Eks-Kepatihan & Taman Budaya",
                    desc: "Kediaman Raden Patih Pringgokusumo (1839 M) berarsitektur Indische Joglo sebagai pusat seni Budaya Ngawi."
                },
                questions: [
                    {
                        category: "Historiografi Pendirian",
                        question: "Kompleks Kepatihan Ngawi dibangun sekitar tahun 1839 M dan erat kaitannya dengan figur patih penting yaitu...",
                        options: [
                            
                            "Soelarso",
                            "Raden Patih Pringgokusumo",
                            "R.M.T. Brotodiningrat",
                            "Sultan Hamengkubuwono I"
                    ],
                        correct: 1,
                        explanation: "Raden Patih Pringgokusumo merupakan figur kunci dalam reorganisasi administrasi birokrasi bumiputra Ngawi."
                    },
                    {
                        category: "Peran Birokrasi",
                        question: "Dalam struktur Pangreh Praja birokrasi Hindia Belanda, Patih bertindak sebagai...",
                        options: [
                            
                            "Komandan Benteng",
                            "Kepala eksekutif (Chief Operating Officer) pelaksana operasional",
                            "Gubernur Jenderal",
                            "Hakim Peradilan Agama"
                    ],
                        correct: 1,
                        explanation: "Patih mengelola masalah hukum lokal, pajak, administrasi, dan pengerjaan fasilitas publik atas nama bupati."
                    },
                    {
                        category: "Gaya Arsitektur",
                        question: "Perpaduan gaya arsitektur pada bangunan Kepatihan Ngawi menggabungkan arsitektur Jawa dengan gaya kolonial...",
                        options: [
                            
                            "Barok Spanyol",
                            "Indische Empire Style",
                            "Gotik Eropa",
                            "Art Deco Modern"
                    ],
                        correct: 1,
                        explanation: "Gaya Indische Empire memadukan struktur tropis Jawa dengan simetri pilar-pilar tinggi ala Eropa."
                    },
                    {
                        category: "Struktur Bangunan Depan",
                        question: "Bangunan depan Kepatihan beratap Joglo tumpang sari susun 6 yang difungsikan untuk audiensi publik dinamai...",
                        options: [
                            
                            "Kamandungan / Dalem Ageng",
                            "Pringgitan",
                            "Gandok",
                            "Pendopo"
                    ],
                        correct: 3,
                        explanation: "Pendopo difungsikan sebagai ruang terbuka audiensi publik, rapat administrasi, serta pertunjukan seni."
                    },
                    {
                        category: "Revitalisasi Masa Kini",
                        question: "Berdasarkan Keputusan Bupati Ngawi tahun 2020, kompleks Kepatihan direvitalisasi menjadi...",
                        options: [
                            
                            "Museum Fosil Purba",
                            "Kantor Polisi Kabupaten",
                            "Pusat seni, ruang terbuka publik, & Taman Budaya Ngawi",
                            "Pasar Tradisional"
                    ],
                        correct: 2,
                        explanation: "Program restorasi mengubah kompleks Kepatihan menjadi wadah pelestarian seni dan Taman Budaya Ngawi."
                    }
                ]
            },
            {
                id: 7,
                name: "Masjid Pathok Nagara Babadan",
                era: "Masa Islam",
                icon: "⛩️",
                pointOnPathPct: 0.78,
                defaultImg: "images/masjid-pathok-nagara-babadan.jfif",
                summaryText: `<h3 class="text-yellow-300 font-bold text-sm">Masjid Pathok Nagara Ad-Darajat Babadan</h3><p><b>Makna Pathok Nagara.</b> Dalam materi, “pathok” bermakna patok atau pembatas dan “nagara” bermakna negara/wilayah. Masjid Babadan dibahas sebagai bagian dari jaringan masjid yang menandai batas wilayah inti dan wilayah penyangga dalam tata ruang tradisional Keraton Yogyakarta. Catatan ini berasal dari materi yang diberikan dan perlu dipastikan kembali keterkaitannya dengan daftar situs Ngawi.</p><p><b>Jaringan masjid.</b> Babadan disebut bersama Mlangi di barat, Plosokuning di utara, dan Dongkelan di selatan. Selain peran keagamaan, jaringan masjid dan lingkungan pesantren berperan dalam membentuk komunitas serta dukungan sosial di sekitar wilayah kerajaan.</p><p><b>Arsitektur.</b> Bangunan utama menggunakan atap tajug bertumpang. Unsur ruang yang disebut meliputi mihrab, serambi, pawestren atau ruang khusus perempuan, dan kolam keliling/jagang yang berkaitan dengan persiapan bersuci.</p><p><b>Artefak dan lembaga.</b> Mustaka asli berbahan gerabah/tanah liat menjadi artefak penting. Materi juga menyebut wilayah Babadan sebagai tanah perdikan yang dikelola abdi dalem kemasjidan, serta fungsi lokal yang berkaitan dengan penyelesaian perkara hukum keluarga Islam pada masa kesultanan.</p><p><b>Pelajaran pelestarian.</b> Bangunan bersejarah bukan hanya tempat ibadah, tetapi juga menyimpan informasi tentang tata ruang, bahan bangunan, pendidikan, dan kehidupan sosial masyarakat pada masanya.</p>`,
                card: {
                    title: "Pathok Nagara Ad-Darajat Babadan",
                    desc: "Masjid batas kosmologis keraton, tanah perdikan, dan peninggalan Mustaka gerabah abad ke-18."
                },
                questions: [
                    {
                        category: "Perspektif Planologi",
                        question: "Secara etimologi dan planologi, fungsi Masjid Pathok Nagara bagi Keraton Yogyakarta adalah sebagai...",
                        options: [
                            
                            "Patok / pembatas kosmologis wilayah Kuthanagara dan Nagaragung",
                            "Pasar perdagangan rempah",
                            "Menara pengintai benteng",
                            "Tempat peristirahatan raja"
                    ],
                        correct: 0,
                        explanation: "'Pathok' berarti pembatas dan 'Nagara' berarti wilayah kerajaan, menandai koridor keamanan luar keraton."
                    },
                    {
                        category: "Pertahanan Nirmiliter",
                        question: "Lingkungan pesantren di sekitar 4 Masjid Pathok Nagara membentuk koridor geopolitik berupa...",
                        options: [
                            
                            "Markas kavaleri perang",
                            "Pertahanan nirmiliter & benteng sosial-spiritual masyarakat",
                            "Gudang amunisi meriam",
                            "Pelabuhan kapal perang"
                    ],
                        correct: 1,
                        explanation: "Para santri dan kyai bertindak sebagai benteng pertahanan sosial-politik saat terjadi ancaman dari luar."
                    },
                    {
                        category: "Bukti Arkeologis Otentik",
                        question: "Salah satu bukti arkeologis otentik abad ke-18 pada kemuncak atap Masjid Babadan berbahan...",
                        options: [
                            
                            "Besi tempa Belanda",
                            "Kuningan ukir",
                            "Batu akik kalsedon",
                            "Gerabah / tanah liat lokal"
                    ],
                        correct: 3,
                        explanation: "Mustaka gerabah mencerminkan kriya kearifan lokal Nusantara sebelum masuknya material logam industri."
                    },
                    {
                        category: "Hukum Pertanahan Kerajaan",
                        question: "Wilayah Babadan ditetapkan sebagai tanah bebas pajak yang dikelola Abdi Dalem Kemasjidan, yang dikenal dengan istilah...",
                        options: [
                            
                            "Tanah Perdikan",
                            "Wanasrama",
                            "Catur Gatra",
                            "Hinterland"
                    ],
                        correct: 0,
                        explanation: "Tanah Perdikan memberikan kemandirian ekonomi bagi pesantren untuk berfokus pada pendidikan keagamaan."
                    },
                    {
                        category: "Lembaga Peradilan",
                        question: "Selain tempat ibadah, Masjid Babadan bertindak sebagai cabang lembaga peradilan perdata Islam keraton yaitu...",
                        options: [
                            
                            "Pengadilan Suronatan",
                            "Pangreh Praja",
                            "Mahkamah Agung",
                            "Binnenlands Bestuur"
                    ],
                        correct: 0,
                        explanation: "Pengadilan Suronatan berwenang menyelesaikan perkara perdata Islam seperti pernikahan dan waris bagi warga."
                    }
                ]
            },
            {
                id: 8,
                name: "Masjid Batu Akik Gerih",
                era: "Masa Islam & Modern",
                icon: "💎",
                pointOnPathPct: 0.88,
                defaultImg: "images/masjid-miftahul-huda-al-hajar.jfif",
                summaryText: `<h3 class="text-yellow-300 font-bold text-sm">Masjid Miftahul Huda Al-Hajar (Masjid Batu Akik), Gerih</h3><p><b>Ciri khas bangunan.</b> Masjid ini dikenal sebagai Masjid Batu Akik. Materi menyoroti tiang batu besar yang didatangkan dari Pacitan dan hiasan batu akik pada dindingnya.</p><p><b>Geologi batuan.</b> Bentuk tiang memanjang dijelaskan melalui fenomena kekar tiang (columnar jointing), yaitu retakan alami yang dapat terbentuk saat lava mendingin dan menyusut. Materi mengaitkan batu akik dengan mineral kuarsa mikrokristalin seperti kalsedon dan jasper, yang terbentuk dari larutan kaya silika dalam rongga batuan.</p><p><b>Teknik struktur.</b> Materi menyebut sekitar 40–47 tiang batu monolitik berbobot 5–13 ton. Massa batu yang besar membantu kestabilan, tetapi konstruksi tetap membutuhkan pondasi dan distribusi beban yang tepat. Angka teknis ini mengikuti materi yang diberikan dan sebaiknya diverifikasi jika digunakan sebagai data ilmiah resmi.</p><p><b>Kenyamanan ruang.</b> Batu memiliki massa termal tinggi sehingga menyerap dan melepaskan panas lebih lambat daripada sejumlah material tipis. Hal ini dapat membantu menjaga perubahan suhu ruang agar lebih lambat.</p><p><b>Arsitektur ekologis.</b> Penggunaan batu alam memberi hubungan visual antara ruang ibadah dan alam. Namun, pemilihan bahan, pengangkutan, dan pemasangan tetap memiliki dampak lingkungan yang perlu diperhatikan.</p>`,
                card: {
                    title: "Masjid Batu Akik (Al-Hajar) Gerih",
                    desc: "40 Tiang batu monolitik Columnar Jointing dan hiasan ribuan batu akik kalsedon Pacitan."
                },
                questions: [
                    {
                        category: "Tinjauan Geologi",
                        question: "Tiang batu monolitik raksasa Pacitan di Masjid Batu Akik terbentuk dari fenomena geologi lava purba yaitu...",
                        options: [
                            
                            "Columnar Jointing (Kekar Tiang)",
                            "Ekskavasi Pleistosena",
                            "Pelapukan Bioturbasi",
                            "Erosi Karst Sungai"
                    ],
                        correct: 0,
                        explanation: "Columnar Jointing terjadi akibat kontraksi pendinginan lava vulkanik purba membentuk kolom segi lima/enam memanjang."
                    },
                    {
                        category: "Kandungan Mineral Dinding",
                        question: "Ribuan batu akik yang dihiaskan pada dinding masjid merupakan batuan kuarsa mikrokristalin jenis...",
                        options: [
                            
                            "Kalsedon (Chalcedony), Jasper, & Agat",
                            "Granit hitam mentah",
                            "Batu kapur gamping",
                            "Bata merah persi"
                    ],
                        correct: 0,
                        explanation: "Batu akik terbentuk dari presipitasi larutan hidrotermal kaya silika di perut bumi selama jutaan tahun."
                    },
                    {
                        category: "Rekayasa Struktur",
                        question: "Berapa jumlah tiang batu monolitik utuh berbobot 5–13 ton yang menopang atap masjid tanpa beton bertulang konvensional?",
                        options: [
                            
                            "100 tiang",
                            "12 tiang",
                            "40 – 47 tiang monolitik",
                            "4 tiang Saka Guru"
                    ],
                        correct: 2,
                        explanation: "Kekuatan tekan (compressive strength) batu alam yang sangat tinggi sanggup menahan beban gravitasi atap."
                    },
                    {
                        category: "Mikroklimatologi",
                        question: "Efek sejuk alami di interior masjid diciptakan oleh sifat batu alam berkapasitas panas tinggi yang disebut...",
                        options: [
                            
                            "Bioturbasi Sistem",
                            "Ventilasi Moat",
                            "Stack Effect Cerobong",
                            "Inersia Termal (Passive Cooling)"
                    ],
                        correct: 3,
                        explanation: "Material batu menyerap panas siang hari secara lambat dan melepaskannya perlahan untuk pendinginan alami."
                    },
                    {
                        category: "Konsep Ekologis",
                        question: "Pemanfaatan batu utuh alam tanpa peleburan besi masif menekan jejak karbon (carbon footprint) sesuai konsep...",
                        options: [
                            
                            "Indische Empire Style",
                            "Bentengstelsel",
                            "Neo-Vernakular Gotik",
                            "Arsitektur Biomorfik & Ekologis"
                    ],
                        correct: 3,
                        explanation: "Konsep ekologis mengutamakan keharmonisan ruang ibadah dengan kelestarian lanskap bahan alam."
                    }
                ]
            },
            {
                id: 9,
                name: "Benteng Van den Bosch",
                era: "Masa Kolonial Belanda",
                icon: "🏰",
                pointOnPathPct: 0.98,
                defaultImg: "images/benteng-van-den-bosch.jpg",
                summaryText: `<h3 class="text-yellow-300 font-bold text-sm">Benteng Van den Bosch (Benteng Pendem Ngawi)</h3><p><b>Strategi militer.</b> Benteng berada di kawasan pertemuan Bengawan Solo dan Sungai Madiun. Penguasaan jalur sungai pada abad ke-19 penting untuk mengawasi pergerakan perahu, perbekalan, senjata, dan hasil bumi. Setelah Perang Diponegoro (1825–1830), Belanda menerapkan sistem jaringan benteng yang dikenal sebagai Bentengstelsel untuk membatasi pergerakan pasukan lawan.</p><p><b>Parit dan air.</b> Kompleks dikelilingi parit pertahanan. Selain menghambat gerak pasukan, sistem parit dan saluran drainase membantu mengatur air di kawasan dataran banjir. Materi menyebut adanya saluran bawah tanah dan pintu air yang memanfaatkan gravitasi pada kondisi tertentu.</p><p><b>Dinding dan material.</b> Dinding bata merah yang tebal dirancang sebagai struktur pertahanan. Perekat tradisional disebut menggunakan campuran pasir, kapur, dan bubuk bata. Bahan dan teknik bangunan menunjukkan pengetahuan konstruksi pada masa kolonial.</p><p><b>Istilah Pendem.</b> Posisi bangunan yang relatif rendah dibandingkan tanggul atau gundukan tanah di sekitarnya dikaitkan dengan upaya menyamarkan benteng dan mengurangi keterlihatan dari kejauhan.</p><p><b>Ventilasi dan iklim.</b> Ruangan tinggi dan bukaan berderet membantu sirkulasi udara. Udara panas dapat naik dan keluar melalui bukaan yang lebih tinggi, sementara udara yang lebih sejuk masuk dari bagian bawah. Benteng kini menjadi jejak penting sejarah kolonial di Ngawi dan perlu dirawat sebagai warisan sejarah.</p>`,
                card: {
                    title: "Benteng Van den Bosch (Pendem)",
                    desc: "Mahakarya strategi Bentengstelsel di delta pertemuan Bengawan Solo & Sungai Madiun."
                },
                questions: [
                    {
                        category: "Geostrategi Militer",
                        question: "Benteng Van den Bosch dibangun tepat pada delta pertemuan (confluence) dua sungai utama Jawa yaitu...",
                        options: [
                            
                            "Sungai Opak & Progo",
                            "Sungai Brantas & Serayu",
                            "Bengawan Solo & Citarum",
                            "Bengawan Solo & Sungai Madiun"
                    ],
                        correct: 3,
                        explanation: "Menguasai muara dua sungai berarti mengendalikan seluruh jalur kapal transportasi logistik perbekalan dan amunisi."
                    },
                    {
                        category: "Doktrin Militer Belanda",
                        question: "Pasca-Perang Diponegoro (1825–1830), Belanda menerapkan sistem jaringan benteng pertahanan pasif yang dinamai...",
                        options: [
                            
                            "Catur Gatra",
                            "Bentengstelsel",
                            "Indische Empire",
                            "Pathok Nagara"
                    ],
                        correct: 1,
                        explanation: "Bentengstelsel bertujuan mengisolasi, membatasi ruang gerak, dan memutus komunikasi gerilya pasukan Diponegoro."
                    },
                    {
                        category: "Rekayasa Hidrologi",
                        question: "Parit pertahanan melingkar (Moat System) di sekeliling benteng terhubung secara hidrolik ke sungai berfungsi untuk...",
                        options: [
                            
                            "Jalur pelayaran kapal dagang",
                            "Perintang mekanis musuh & mitigasi luapan banjir",
                            "Pembangkit listrik tenaga air",
                            "Kolam pemandian tentara"
                    ],
                        correct: 1,
                        explanation: "Parit menahan infanteri musuh serta dilengkapi saluran drainase bawah tanah untuk mitigasi banjir luapan sungai."
                    },
                    {
                        category: "Teknik Material Mortar",
                        question: "Dinding tebal benteng disatukan tanpa semen portland, melainkan perekat mortar kapur, pasir, dan...",
                        options: [
                            
                            "Minyak kelapa sawit",
                            "Getah pohon karet",
                            "Putih telur ayam",
                            "Semen merah (rubble brick powder)"
                    ],
                        correct: 3,
                        explanation: "Campuran kapur dan semen merah menghasilkan ikatan fleksibel yang mampu menutup mikro-retak secara alami (self-healing)."
                    },
                    {
                        category: "Istilah 'Pendem'",
                        question: "Mengapa benteng ini dijuluki 'Benteng Pendem' oleh masyarakat lokal Ngawi?",
                        options: [
                            
                            "Karena ditinggalkan dan terkubur lumpur",
                            "Karena tertimbun lahar gunung berapi",
                            "Sengaja dibangun lebih rendah dari tanggul sekitar sehingga posisi benteng tersembunyi (camouflaged)",
                            "Karena berada di dalam gua bawah tanah"
                    ],
                        correct: 2,
                        explanation: "Tanggul luar (glacis) dibuat lebih tinggi untuk membiaskan garis pandang penembak meriam musuh dari jauh."
                    }
                ]
            }
        ];


        /**
         * MAIN APPLICATION STATE & LOGIC
         */
        class NusantaraApp {
            constructor() {
                this.sound = new SoundEngine();
                
                // Player profile state
                this.playerName = localStorage.getItem('ngawi_player_name') || "Penjelajah";
                this.selectedCharId = localStorage.getItem('ngawi_char_id') || "putera";
                
                // Game Progress
                this.currentLevelIndex = 0;
                this.currentQuestionIndex = 0;
                this.score = 0;
                this.userXP = parseInt(localStorage.getItem('ngawi_xp') || "0");
                this.unlockedLevels = JSON.parse(localStorage.getItem('ngawi_unlocked') || "[1]");
                this.unlockedCards = JSON.parse(localStorage.getItem('ngawi_cards') || "[]");
                
                // Student Gallery Photos per site: { siteId: [dataUrl1, dataUrl2, ...] }
                this.userGalleryPhotos = JSON.parse(localStorage.getItem('ngawi_user_photos') || "{}");
                this.activeGalleryFilter = 0; // 0 = Semua, 1-9 = Situs ID

                // Timer handle
                this.timerInterval = null;
                this.timeLeft = 25;
            }

            init() {
                this.updateHeaderStats();
                this.renderCharacterSVG();
                this.renderMapNodes();
                this.showScreen('home');
            }

            /* Custom In-App Toast Modal (Replaces native alert) */
            showToast(title, message, icon = "⚠️") {
                this.sound.playClick();
                document.getElementById('toast-icon').innerText = icon;
                document.getElementById('toast-title').innerText = title;
                document.getElementById('toast-message').innerText = message;
                document.getElementById('toast-modal').classList.remove('hidden');
            }

            closeToast() {
                this.sound.playClick();
                document.getElementById('toast-modal').classList.add('hidden');
            }

            toggleSound() {
                this.sound.muted = !this.sound.muted;
                const btn = document.getElementById('sound-btn');
                if (this.sound.muted) {
                    btn.innerHTML = `<i class="fa-solid fa-volume-xmark text-red-400"></i>`;
                } else {
                    btn.innerHTML = `<i class="fa-solid fa-volume-high text-yellow-300"></i>`;
                    this.sound.playClick();
                }
            }

            showScreen(screenId) {
                this.sound.playClick();
                this.stopTimer();
                document.querySelectorAll('.screen-view').forEach(s => s.classList.add('hidden'));
                const target = document.getElementById(`screen-${screenId}`);
                if (target) {
                    target.classList.remove('hidden');
                }

                if (screenId === 'map') {
                    this.renderMapNodes();
                    this.positionCharacterOnNode(this.currentLevelIndex);
                } else if (screenId === 'gallery') {
                    this.renderGalleryTabs();
                    this.renderGalleryGrid();
                } else if (screenId === 'collection') {
                    this.renderCollectionGrid();
                }
            }

            updateHeaderStats() {
                document.getElementById('header-player-name').innerText = this.playerName;
                document.getElementById('home-greeting-name').innerText = this.playerName.toUpperCase();
                document.getElementById('player-xp').innerText = this.userXP;

                const charData = CHARACTERS.find(c => c.id === this.selectedCharId) || CHARACTERS[0];
                document.getElementById('header-avatar-badge').innerText = charData.badge;
                document.getElementById('home-character-title').innerText = charData.name;
            }

            renderCharacterSVG() {
                const charData = CHARACTERS.find(c => c.id === this.selectedCharId) || CHARACTERS[0];
                const heroContainer = document.getElementById('hero-character-svg-container');
                if (heroContainer) heroContainer.innerHTML = charData.svg;

                const mapWrapper = document.getElementById('map-character-svg-wrapper');
                if (mapWrapper) mapWrapper.innerHTML = charData.svg;
            }

            /* Profile Modal Functions */
            openProfileModal() {
                this.sound.playClick();
                document.getElementById('input-player-name').value = this.playerName;
                
                const grid = document.getElementById('character-options-grid');
                grid.innerHTML = '';

                CHARACTERS.forEach(char => {
                    const isSelected = char.id === this.selectedCharId;
                    const btn = document.createElement('button');
                    btn.className = `p-3 rounded-2xl border-2 text-left flex items-center space-x-3 transition ${isSelected ? 'border-yellow-400 bg-yellow-500/20' : 'border-slate-800 bg-slate-900/80 hover:border-slate-600'}`;
                    btn.onclick = () => {
                        this.selectedCharId = char.id;
                        this.openProfileModal(); // re-render
                    };
                    btn.innerHTML = `
                        <div class="w-10 h-10 rounded-xl bg-slate-950 p-1 flex items-center justify-center">${char.badge}</div>
                        <div>
                            <div class="font-bold text-xs text-white">${char.name}</div>
                            <div class="text-[10px] text-emerald-300">${char.role}</div>
                        </div>
                    `;
                    grid.appendChild(btn);
                });

                document.getElementById('profile-modal').classList.remove('hidden');
            }

            closeProfileModal() {
                this.sound.playClick();
                document.getElementById('profile-modal').classList.add('hidden');
            }

            saveProfileModal() {
                const input = document.getElementById('input-player-name').value.trim();
                if (input) this.playerName = input;

                localStorage.setItem('ngawi_player_name', this.playerName);
                localStorage.setItem('ngawi_char_id', this.selectedCharId);

                this.updateHeaderStats();
                this.renderCharacterSVG();
                this.closeProfileModal();
            }

            startMainJourney() {
                this.startLevel(this.currentLevelIndex);
            }

            startLevel(levelIdx) {
                if (!this.unlockedLevels.includes(levelIdx + 1)) {
                    this.sound.playWrong();
                    this.showToast("Situs Terkunci", "Selesaikan kuis situs sebelumnya terlebih dahulu untuk membuka tingkat ini!");
                    return;
                }

                this.currentLevelIndex = levelIdx;
                this.currentQuestionIndex = 0;
                this.score = 0;
                this.showScreen('quiz');
                this.loadQuestion();
            }

            retryCurrentLevel() {
                this.startLevel(this.currentLevelIndex);
            }

            /* Exit Quiz SAFELY back to Map Screen */
            exitQuizToMap() {
                this.sound.playClick();
                this.stopTimer();
                this.showScreen('map');
            }

            loadQuestion() {
                const levelData = GAME_LEVELS[this.currentLevelIndex];
                const qData = levelData.questions[this.currentQuestionIndex];

                // Header Info
                document.getElementById('quiz-site-badge').innerText = levelData.icon;
                document.getElementById('quiz-site-level').innerText = `SITUS ${levelData.id} / ${GAME_LEVELS.length}`;
                document.getElementById('quiz-site-title').innerText = levelData.name;

                // Built-in Photo & Text Summary
                const siteImg = document.getElementById('site-display-img');
                const savedSitePhotos = JSON.parse(localStorage.getItem('ngawi_site_photos') || '{}');
                const sitePhoto = savedSitePhotos[levelData.id] || levelData.defaultImg || '';
                siteImg.src = sitePhoto;
                siteImg.style.display = sitePhoto ? 'block' : 'none';
                const photoPlaceholder = document.getElementById('site-photo-placeholder');
                if (photoPlaceholder) photoPlaceholder.style.display = sitePhoto ? 'none' : 'flex';
                document.getElementById('site-display-summary').innerHTML = levelData.summaryText;

                // Progress
                document.getElementById('quiz-progress-text').innerText = `${this.currentQuestionIndex + 1} / ${levelData.questions.length}`;
                const pct = ((this.currentQuestionIndex + 1) / levelData.questions.length) * 100;
                document.getElementById('quiz-progress-bar').style.width = `${pct}%`;

                // Question Text
                document.getElementById('quiz-cat-tag').innerText = `📚 ${qData.category}`;
                document.getElementById('quiz-question-text').innerText = qData.question;

                // Hide Feedback Box
                document.getElementById('quiz-feedback-box').classList.add('hidden');

                // Render Options
                const container = document.getElementById('quiz-options-container');
                container.innerHTML = '';

                qData.options.forEach((opt, idx) => {
                    const btn = document.createElement('button');
                    btn.className = `btn-3d-emerald text-left p-3.5 rounded-2xl font-semibold text-xs md:text-sm text-white flex items-center justify-between transition-all`;
                    btn.innerHTML = `
                        <span>${opt}</span>
                        <i class="fa-regular fa-circle text-yellow-300 text-sm"></i>
                    `;
                    btn.onclick = () => this.handleAnswer(idx, btn);
                    container.appendChild(btn);
                });

                // Start Question Timer (25 seconds)
                this.startTimer(25);
            }

            /* Timer System */
            startTimer(seconds) {
                this.stopTimer();
                this.timeLeft = seconds;
                const timerText = document.getElementById('quiz-timer-text');
                timerText.innerText = `${this.timeLeft}s`;

                this.timerInterval = setInterval(() => {
                    this.timeLeft--;
                    timerText.innerText = `${this.timeLeft}s`;
                    
                    if (this.timeLeft <= 5) {
                        this.sound.playTimerTick();
                    }

                    if (this.timeLeft <= 0) {
                        this.stopTimer();
                        this.handleTimeOut();
                    }
                }, 1000);
            }

            stopTimer() {
                if (this.timerInterval) {
                    clearInterval(this.timerInterval);
                    this.timerInterval = null;
                }
            }

            handleTimeOut() {
                const qData = GAME_LEVELS[this.currentLevelIndex].questions[this.currentQuestionIndex];
                const allButtons = document.getElementById('quiz-options-container').querySelectorAll('button');
                allButtons.forEach(b => b.onclick = null);

                // Highlight correct option
                allButtons[qData.correct].className = "bg-emerald-700 text-white font-bold p-3.5 rounded-2xl border-2 border-yellow-400 flex items-center justify-between";

                this.sound.playWrong();
                this.showFeedback(false, "Waktu Habis!", "Waktu menjawab 25 detik telah selesai. Perhatikan penjelasan materi berikut ini.", qData.explanation);
            }

            handleAnswer(selectedIndex, btnElement) {
                this.stopTimer();
                const qData = GAME_LEVELS[this.currentLevelIndex].questions[this.currentQuestionIndex];
                const allButtons = document.getElementById('quiz-options-container').querySelectorAll('button');
                allButtons.forEach(b => b.onclick = null);

                if (selectedIndex === qData.correct) {
                    this.score++;
                    this.sound.playCorrect();
                    btnElement.className = "bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold p-3.5 rounded-2xl border-2 border-yellow-300 shadow-lg flex items-center justify-between";
                    btnElement.querySelector('i').className = "fa-solid fa-circle-check text-yellow-300 text-lg";
                    this.showFeedback(true, "Jawaban Tepat!", null, qData.explanation);
                } else {
                    this.sound.playWrong();
                    btnElement.className = "bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold p-3.5 rounded-2xl border-2 border-red-300 shadow-lg flex items-center justify-between";
                    btnElement.querySelector('i').className = "fa-solid fa-circle-xmark text-white text-lg";

                    // Highlight correct
                    allButtons[qData.correct].className = "bg-emerald-700 text-white font-bold p-3.5 rounded-2xl border-2 border-yellow-400 flex items-center justify-between";
                    this.showFeedback(false, "Jawaban Kurang Tepat!", null, qData.explanation);
                }
            }

            showFeedback(isCorrect, titleText, customSub, explanation) {
                const box = document.getElementById('quiz-feedback-box');
                const icon = document.getElementById('feedback-icon');
                const title = document.getElementById('feedback-title');
                const exp = document.getElementById('feedback-explanation');

                icon.innerText = isCorrect ? "🎉" : "💡";
                title.innerText = titleText;
                title.className = isCorrect ? "text-base font-bold text-yellow-400" : "text-base font-bold text-amber-300";
                
                exp.innerText = (customSub ? customSub + " " : "") + explanation;
                box.classList.remove('hidden');
            }

            nextQuestion() {
                this.sound.playClick();
                this.currentQuestionIndex++;
                const totalQ = GAME_LEVELS[this.currentLevelIndex].questions.length;

                if (this.currentQuestionIndex < totalQ) {
                    this.loadQuestion();
                } else {
                    this.finishQuizLevel();
                }
            }

            finishQuizLevel() {
                const levelData = GAME_LEVELS[this.currentLevelIndex];
                const totalQ = levelData.questions.length;
                const isPassed = this.score >= 4; // Requirement: >= 4 out of 5 correct (80%)

                this.showScreen('result');
                document.getElementById('result-pass-card').classList.add('hidden');
                document.getElementById('result-fail-card').classList.add('hidden');

                if (isPassed) {
                    const starsEarned = this.score === 5 ? 3 : 2;
                    const xpGained = this.score * 30;

                    this.userXP += xpGained;
                    localStorage.setItem('ngawi_xp', this.userXP);

                    // Unlock card
                    if (!this.unlockedCards.includes(levelData.id)) {
                        this.unlockedCards.push(levelData.id);
                        localStorage.setItem('ngawi_cards', JSON.stringify(this.unlockedCards));
                    }

                    // Unlock next level
                    if (this.currentLevelIndex + 1 < GAME_LEVELS.length) {
                        const nextId = GAME_LEVELS[this.currentLevelIndex + 1].id;
                        if (!this.unlockedLevels.includes(nextId)) {
                            this.unlockedLevels.push(nextId);
                            localStorage.setItem('ngawi_unlocked', JSON.stringify(this.unlockedLevels));
                        }
                    }

                    this.updateHeaderStats();

                    // Fill Pass Card UI
                    document.getElementById('pass-site-name').innerText = levelData.name;
                    document.getElementById('pass-score').innerText = `${this.score} / ${totalQ}`;
                    document.getElementById('pass-xp').innerText = `+${xpGained} XP`;
                    document.getElementById('pass-card-icon').innerText = levelData.icon;
                    document.getElementById('pass-card-title').innerText = levelData.card.title;
                    document.getElementById('pass-card-desc').innerText = levelData.card.desc;

                    document.getElementById('result-pass-card').classList.remove('hidden');
                    this.sound.playLevelUp();

                    if (window.confetti) {
                        window.confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
                    }
                } else {
                    // Fail Card UI
                    document.getElementById('fail-site-name').innerText = levelData.name;
                    document.getElementById('fail-score-text').innerText = `${this.score} / ${totalQ}`;
                    document.getElementById('result-fail-card').classList.remove('hidden');
                    this.sound.playWrong();
                }
            }

            uploadSitePhoto(event) {
                const file = event.target.files && event.target.files[0];
                if (!file) return;
                if (!file.type.startsWith('image/')) {
                    this.showToast('Format tidak sesuai', 'Pilih file foto seperti JPG, PNG, atau WEBP.');
                    return;
                }
                const reader = new FileReader();
                reader.onload = () => {
                    const photos = JSON.parse(localStorage.getItem('ngawi_site_photos') || '{}');
                    photos[GAME_LEVELS[this.currentLevelIndex].id] = reader.result;
                    try {
                        localStorage.setItem('ngawi_site_photos', JSON.stringify(photos));
                        const img = document.getElementById('site-display-img');
                        img.src = reader.result;
                        img.style.display = 'block';
                        const placeholder = document.getElementById('site-photo-placeholder');
                        if (placeholder) placeholder.style.display = 'none';
                        this.showToast('Foto tersimpan', 'Foto untuk situs ini tersimpan di browser perangkat ini.', '📷');
                    } catch (e) {
                        this.showToast('Foto terlalu besar', 'Coba gunakan foto berukuran lebih kecil agar bisa disimpan di browser.');
                    }
                };
                reader.readAsDataURL(file);
            }

            /* Collapsible Material Text Summary */
            toggleMaterialSummary() {
                this.sound.playClick();
                const box = document.getElementById('site-material-content');
                const icon = document.getElementById('material-toggle-icon');
                const text = document.getElementById('material-toggle-text');

                if (box.classList.contains('hidden')) {
                    box.classList.remove('hidden');
                    icon.className = "fa-solid fa-chevron-up";
                    text.innerText = "Sembunyikan Ringkasan Materi";
                } else {
                    box.classList.add('hidden');
                    icon.className = "fa-solid fa-chevron-down";
                    text.innerText = "Tampilkan Ringkasan Materi Ilmiah Situs Ini";
                }
            }

            /* Animated Character Walking along SVG Bezier Path */
            proceedToNextLevelTransition() {
                const nextLevelIdx = this.currentLevelIndex + 1;
                this.showScreen('map');

                if (nextLevelIdx < GAME_LEVELS.length) {
                    this.animateCharacterWalk(this.currentLevelIndex, nextLevelIdx, () => {
                        this.currentLevelIndex = nextLevelIdx;
                        document.getElementById('map-status-text').innerText = `Situs Terbuka: ${GAME_LEVELS[nextLevelIdx].name}! Klik node untuk memulai.`;
                        this.sound.playLevelUp();
                    });
                } else {
                    document.getElementById('map-status-text').innerText = "Selamat! Seluruh 9 Situs Sejarah Ngawi Telah Tuntas!";
                }
            }

            renderMapNodes() {
                const group = document.getElementById('map-nodes-group');
                const pathEl = document.getElementById('archipelago-path');
                if (!pathEl || !group) return;

                const pathLength = pathEl.getTotalLength();
                group.innerHTML = '';

                GAME_LEVELS.forEach((lvl, idx) => {
                    const point = pathEl.getPointAtLength(lvl.pointOnPathPct * pathLength);
                    const isUnlocked = this.unlockedLevels.includes(lvl.id);
                    const isCurrent = idx === this.currentLevelIndex;

                    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
                    g.setAttribute("transform", `translate(${point.x}, ${point.y})`);
                    g.setAttribute("class", "cursor-pointer");
                    g.onclick = () => {
                        if (isUnlocked) {
                            this.animateCharacterWalk(this.currentLevelIndex, idx, () => {
                                this.startLevel(idx);
                            });
                        } else {
                            this.sound.playWrong();
                            this.showToast("Situs Terkunci", "Jawab kuis situs sebelumnya terlebih dahulu untuk membuka situs ini!");
                        }
                    };

                    const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                    ring.setAttribute("r", isCurrent ? "24" : "18");
                    ring.setAttribute("fill", isUnlocked ? (isCurrent ? "#facc15" : "#10b981") : "#334155");
                    ring.setAttribute("stroke", "#ffffff");
                    ring.setAttribute("stroke-width", "2.5");
                    if (isCurrent) ring.setAttribute("class", "node-active");

                    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                    text.setAttribute("text-anchor", "middle");
                    text.setAttribute("dy", "5");
                    text.setAttribute("font-size", isCurrent ? "16" : "12");
                    text.textContent = isUnlocked ? lvl.icon : "🔒";

                    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
                    label.setAttribute("text-anchor", "middle");
                    // Stagger labels above/below the route to reduce collisions on tight bends.
                    label.setAttribute("y", (idx % 2 === 0 ? "-30" : "38"));
                    label.setAttribute("fill", "#fde047");
                    label.setAttribute("font-weight", "bold");
                    label.setAttribute("font-size", "11");
                    label.textContent = lvl.name;

                    g.appendChild(ring);
                    g.appendChild(text);
                    g.appendChild(label);
                    group.appendChild(g);
                });
            }

            positionCharacterOnNode(levelIdx) {
                const pathEl = document.getElementById('archipelago-path');
                const charContainer = document.getElementById('map-character-container');
                if (!pathEl || !charContainer) return;

                const pathLength = pathEl.getTotalLength();
                const targetPct = GAME_LEVELS[levelIdx].pointOnPathPct;
                const point = pathEl.getPointAtLength(targetPct * pathLength);

                charContainer.setAttribute("transform", `translate(${point.x}, ${point.y})`);
            }

            animateCharacterWalk(fromIdx, toIdx, onComplete) {
                const pathEl = document.getElementById('archipelago-path');
                const charContainer = document.getElementById('map-character-container');
                if (!pathEl || !charContainer) {
                    if (onComplete) onComplete();
                    return;
                }

                const pathLength = pathEl.getTotalLength();
                // Start at the actual path position of the source node and end exactly at the target node.
                const startLen = GAME_LEVELS[fromIdx].pointOnPathPct * pathLength;
                const endLen = GAME_LEVELS[toIdx].pointOnPathPct * pathLength;

                const duration = Math.max(650, Math.min(2600, Math.abs(endLen - startLen) * 3.2));
                const startTime = performance.now();
                let lastFootstep = 0;

                const animate = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    const easeProgress = progress < 0.5 
                        ? 2 * progress * progress 
                        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

                    const currentLen = startLen + (endLen - startLen) * easeProgress;
                    const point = pathEl.getPointAtLength(currentLen);

                    const bounceY = Math.abs(Math.sin(progress * Math.PI * 6)) * -10;

                    charContainer.setAttribute("transform", `translate(${point.x}, ${point.y + bounceY})`);

                    if (currentTime - lastFootstep > 180) {
                        this.sound.playFootstep();
                        lastFootstep = currentTime;
                    }

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        this.positionCharacterOnNode(toIdx);
                        this.renderMapNodes();
                        if (onComplete) onComplete();
                    }
                };

                requestAnimationFrame(animate);
            }

            /* ===================================================
               FEATURE: GALLERY & STUDENT PHOTO UPLOADS (PER SITE)
               =================================================== */
            renderGalleryTabs() {
                const container = document.getElementById('gallery-tabs-container');
                container.innerHTML = '';

                // All Sites Option
                const allBtn = document.createElement('button');
                const isAllSelected = this.activeGalleryFilter === 0;
                allBtn.className = `px-3.5 py-1.5 rounded-xl font-bold text-xs whitespace-nowrap transition border ${isAllSelected ? 'bg-yellow-500 text-slate-950 border-yellow-300' : 'bg-emerald-900/80 text-emerald-200 border-emerald-700/60 hover:bg-emerald-800'}`;
                allBtn.innerText = "🌟 Semua Situs (9)";
                allBtn.onclick = () => {
                    this.activeGalleryFilter = 0;
                    this.renderGalleryTabs();
                    this.renderGalleryGrid();
                };
                container.appendChild(allBtn);

                // Site Pills
                GAME_LEVELS.forEach(lvl => {
                    const isSelected = this.activeGalleryFilter === lvl.id;
                    const btn = document.createElement('button');
                    btn.className = `px-3 py-1.5 rounded-xl font-bold text-xs whitespace-nowrap transition border ${isSelected ? 'bg-yellow-500 text-slate-950 border-yellow-300' : 'bg-emerald-900/80 text-emerald-200 border-emerald-700/60 hover:bg-emerald-800'}`;
                    btn.innerText = `${lvl.icon} ${lvl.name}`;
                    btn.onclick = () => {
                        this.activeGalleryFilter = lvl.id;
                        this.renderGalleryTabs();
                        this.renderGalleryGrid();
                    };
                    container.appendChild(btn);
                });
            }

            renderGalleryGrid() {
                const grid = document.getElementById('gallery-grid');
                grid.innerHTML = '';

                const filteredSites = this.activeGalleryFilter === 0 
                    ? GAME_LEVELS 
                    : GAME_LEVELS.filter(l => l.id === this.activeGalleryFilter);

                filteredSites.forEach(lvl => {
                    // Official Built-in Card
                    const mainCard = document.createElement('div');
                    mainCard.className = "glass-card rounded-2xl p-4 border border-yellow-500/30 space-y-3 flex flex-col justify-between";
                    mainCard.innerHTML = `
                        <div class="space-y-2">
                            <div class="relative h-36 rounded-xl overflow-hidden bg-slate-950 border border-emerald-700/50">
                                <img src="${lvl.defaultImg}" class="w-full h-full object-cover">
                                <span class="absolute top-2 left-2 bg-slate-950/85 text-yellow-300 text-[10px] px-2 py-0.5 rounded font-bold">${lvl.era}</span>
                                <span class="absolute bottom-2 right-2 bg-emerald-950/90 text-emerald-200 text-[9px] px-2 py-0.5 rounded border border-emerald-700">Foto Resmi</span>
                            </div>
                            <h4 class="font-bold text-white text-sm font-cinzel flex items-center gap-1.5">
                                <span>${lvl.icon}</span> ${lvl.name}
                            </h4>
                            <p class="text-[11px] text-emerald-200 line-clamp-2 leading-relaxed">${lvl.card.desc}</p>
                        </div>

                        <div class="pt-2 border-t border-emerald-700/40">
                            <label class="cursor-pointer bg-emerald-900/90 hover:bg-emerald-800 text-yellow-300 text-[11px] px-3 py-2 rounded-xl border border-yellow-400/30 flex items-center justify-center gap-2 font-semibold transition">
                                <i class="fa-solid fa-camera"></i> Unggah Dokumentasi Kamu
                                <input type="file" accept="image/*" class="hidden" onchange="app.uploadStudentPhoto(event, ${lvl.id})">
                            </label>
                        </div>
                    `;
                    grid.appendChild(mainCard);

                    // Student Uploaded Photos
                    const studentPhotos = this.userGalleryPhotos[lvl.id] || [];
                    studentPhotos.forEach((photoUrl, idx) => {
                        const studentCard = document.createElement('div');
                        studentCard.className = "glass-card rounded-2xl p-4 border border-emerald-500/50 space-y-2 flex flex-col justify-between";
                        studentCard.innerHTML = `
                            <div class="relative h-36 rounded-xl overflow-hidden bg-slate-950 border border-emerald-500/40">
                                <img src="${photoUrl}" class="w-full h-full object-cover">
                                <span class="absolute top-2 left-2 bg-emerald-700 text-white text-[9px] px-2 py-0.5 rounded font-bold flex items-center gap-1">
                                    <i class="fa-solid fa-user-check"></i> Hasil Jelajah Siswa
                                </span>
                            </div>
                            <div>
                                <h4 class="font-bold text-yellow-300 text-xs font-cinzel">Dokumentasi Siswa #${idx + 1}</h4>
                                <p class="text-[10px] text-emerald-200">Situs: ${lvl.name}</p>
                            </div>
                        `;
                        grid.appendChild(studentCard);
                    });
                });
            }

            uploadStudentPhoto(event, siteId) {
                const file = event.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (e) => {
                    const dataUrl = e.target.result;
                    if (!this.userGalleryPhotos[siteId]) {
                        this.userGalleryPhotos[siteId] = [];
                    }
                    this.userGalleryPhotos[siteId].push(dataUrl);
                    localStorage.setItem('ngawi_user_photos', JSON.stringify(this.userGalleryPhotos));

                    this.sound.playCorrect();
                    this.renderGalleryGrid();
                    this.showToast("Foto Berhasil Diunggah!", "Dokumentasi kunjungan kamu berhasil disimpan ke galeri situs ini.", "📸");
                };
                reader.readAsDataURL(file);
            }

            /* Collection Grid */
            renderCollectionGrid() {
                const grid = document.getElementById('collection-grid');
                grid.innerHTML = '';

                GAME_LEVELS.forEach(lvl => {
                    const isUnlocked = this.unlockedCards.includes(lvl.id);
                    const cardBox = document.createElement('div');
                    
                    if (isUnlocked) {
                        cardBox.className = "glass-card rounded-2xl p-4 border border-yellow-400/40 hover:border-yellow-300 transition cursor-pointer space-y-3";
                        cardBox.onclick = () => this.openCardModal(lvl);
                        cardBox.innerHTML = `
                            <div class="relative h-28 rounded-xl overflow-hidden bg-slate-950 border border-emerald-700/50">
                                <img src="${lvl.defaultImg}" class="w-full h-full object-cover">
                                <span class="absolute top-2 left-2 bg-slate-950/85 text-yellow-300 text-[10px] px-2 py-0.5 rounded font-bold">${lvl.era}</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <span class="text-2xl">${lvl.icon}</span>
                                <div>
                                    <h4 class="font-bold text-white text-sm font-cinzel">${lvl.card.title}</h4>
                                </div>
                            </div>
                            <p class="text-[11px] text-emerald-200 line-clamp-2 leading-relaxed">${lvl.card.desc}</p>
                            <div class="text-right">
                                <span class="text-[10px] text-yellow-300 font-semibold"><i class="fa-solid fa-eye mr-1"></i> Lihat Kartu Detail</span>
                            </div>
                        `;
                    } else {
                        cardBox.className = "glass-card rounded-2xl p-4 border border-slate-800 opacity-60 space-y-2";
                        cardBox.innerHTML = `
                            <div class="h-28 rounded-xl bg-slate-950 flex items-center justify-center text-3xl">🔒</div>
                            <h4 class="font-bold text-slate-400 text-sm font-cinzel">${lvl.name}</h4>
                            <p class="text-[11px] text-slate-500 italic">Selesaikan kuis situs ${lvl.name} untuk membuka kartu ini.</p>
                        `;
                    }

                    grid.appendChild(cardBox);
                });
            }

            openCardModal(lvl) {
                this.sound.playClick();
                document.getElementById('modal-card-icon').innerText = lvl.icon;
                document.getElementById('modal-card-era').innerText = lvl.era;
                document.getElementById('modal-card-title').innerText = lvl.card.title;
                document.getElementById('modal-card-img').src = lvl.defaultImg;
                document.getElementById('modal-card-desc').innerHTML = `<p class="font-semibold text-yellow-300 mb-1">${lvl.card.desc}</p><p class="text-emerald-100">${lvl.summaryText}</p>`;
                document.getElementById('card-modal').classList.remove('hidden');
            }

            closeCardModal() {
                this.sound.playClick();
                document.getElementById('card-modal').classList.add('hidden');
            }
        }

        // Initialize App
        let app;
        window.addEventListener('DOMContentLoaded', () => {
            app = new NusantaraApp();
            app.init();
        });
