function getAllOthersCodecs() {
    // TODO generate all possible profiles
    // vp09.<profile>.<level>.<bitDepth>[.<chromaSubsampling>.<colourPrimaries>.<transferCharacteristics>.<matrixCoefficients>.<videoFullRangeFlag>]

	const audioData = [
		{
			"codec": "flac",
			"description": "Flac",
		},
		{
			"codec": "ec-3",
			"description": "EC-3",
		},
		{
			"codec": "ac-3",
			"description": "AC-3",
		},
	];

	// 2024-08-04
	const data = [
		{
			"codec": "av01.0.00M.10.0.110.01.01.01.0",
			"description": "AV1 Main Profile, level 0., Main tier, 10 bits",
			"percent": 0.44752541663641077
		},
		{
			"codec": "av01.0.08M.08.0.110.01.01.01.0",
			"description": "AV1 Main Profile, level 8., Main tier, 08 bits",
			"percent": 0.16081636743712432
		},
		{
			"codec": "avc1.640032",
			"description": "H.264 High Profile, level 5.0",
			"percent": 0.10110921507416852
		},
		{
			"codec": "avc1.640028",
			"description": "H.264 High Profile, level 4.0",
			"percent": 0.0575895873272527
		},
		{
			"codec": "avc1.64001E",
			"description": "H.264 High Profile, level 3.0",
			"percent": 0.043229417811622754
		},
		{
			"codec": "avc1.640033",
			"description": "H.264 High Profile, level 5.1",
			"percent": 0.04284076463066989
		},
		{
			"codec": "hev1.1.6.L120.90",
			"description": "HEVC progressive, non-packed stream, Main Profile, Main Tier, Level 4.0 ( 1080P )",
			"percent": 0.04247421360013412
		},
		{
			"codec": "hev1.1.6.L150.90",
			"description": "HEVC progressive, non-packed stream, Main Profile, Main Tier, Level 5.0",
			"percent": 0.02316662578633294
		},
		{
			"codec": "av01.0.05M.08.0.110.01.01.01.0",
			"description": "AV1 Main Profile, level 5., Main tier, 08 bits",
			"percent": 0.018186091908136703
		},
		{
			"codec": "avc1.64001F",
			"description": "H.264 High Profile, level 3.1",
			"percent": 0.016920563934443782
		},
		{
			"codec": "-",
			"description": "Unknown Codec",
			"percent": 0.01344240323491156
		},
		{
			"codec": "av01.0.01M.08.0.110.01.01.01.0",
			"description": "AV1 Main Profile, level 1., Main tier, 08 bits",
			"percent": 0.009155071263958571
		},
		{
			"codec": "av01.0.09M.08.0.110.01.01.01.0",
			"description": "AV1 Main Profile, level 9., Main tier, 08 bits",
			"percent": 0.0067324848405349086
		},
		{
			"codec": "av01.0.04M.08.0.110.01.01.01.0",
			"description": "AV1 Main Profile, level 4., Main tier, 08 bits",
			"percent": 0.004983223447219362
		},
		{
			"codec": "avc1.640034",
			"description": "H.264 High Profile, level 5.2",
			"percent": 0.004682301247123458
		},
		{
			"codec": "hev1.1.6.L153.90",
			"description": "HEVC progressive, non-packed stream, Main Profile, Main Tier, Level 5.1 ( 2160P )",
			"percent": 0.003361635017034216
		},
		{
			"codec": "avc1.640020",
			"description": "H.264 High Profile, level 3.2",
			"percent": 0.001589422355865034
		},
		{
			"codec": "avc1.64002A",
			"description": "H.264 High Profile, level 4.2",
			"percent": 0.0006049271565993407
		},
		{
			"codec": "av01.0.12M.08.0.110.01.01.01.0",
			"description": "AV1 Main Profile, level 12., Main tier, 08 bits",
			"percent": 0.00047003042099158846
		},
		{
			"codec": "av01.0.00M.08.0.110.01.01.01.0",
			"description": "AV1 Main Profile, level 0., Main tier, 08 bits",
			"percent": 0.00035528663025695715
		},
		{
			"codec": "av01.0.13M.08.0.110.01.01.01.0",
			"description": "AV1 Main Profile, level 13., Main tier, 08 bits",
			"percent": 0.0002588260528972556
		},
		{
			"codec": "hev1.1.6.L123.90",
			"description": "HEVC progressive, non-packed stream, Main Profile, Main Tier, Level 4.1",
			"percent": 0.0001958951571695461
		},
		{
			"codec": "avc1.4D4033",
			"description": "AVC Constrained Main Level 5.1",
			"percent": 3.762468641214671e-05
		},
		// {
		// 	"codec": "avc1.64001f",
		// 	"description": "H.264 High Profile, level 3.1",
		// 	"percent": 3.674210621948824e-05
		// },
		{
			"codec": "avc1.4D4034",
			"description": "AVC Constrained Main Level 5.2",
			"percent": 2.792885282644843e-05
		},
		// {
		// 	"codec": "avc1.64001e",
		// 	"description": "H.264 High Profile, level 3.0",
		// 	"percent": 2.595036737086806e-05
		// },
		{
			"codec": "",
			"description": "Unknown Codec",
			"percent": 2.3252432658713015e-05
		},
		{
			"codec": "avc1.640029",
			"description": "H.264 High Profile, level 4.1",
			"percent": 2.167968312108465e-05
		},
		// {
		// 	"codec": "avc1.4d401e",
		// 	"description": "H.264 Main Profile, level 1641.4",
		// 	"percent": 1.0988332540823725e-05
		// },
		{
			"codec": "avc1.4D4029",
			"description": "AVC Constrained Main Level 4.1",
			"percent": 1.079173884862018e-05
		},
		{
			"codec": "hev1.1.6.L156.90",
			"description": "HEVC progressive, non-packed stream, Main 10 Profile, Main Tier, Level 5.2",
			"percent": 1.0465476976452593e-05
		},
		{
			"codec": "avc1.4D402A",
			"description": "AVC Constrained Main Level 4.2",
			"percent": 9.152063798752307e-06
		},
		{
			"codec": "avc1.4D4028",
			"description": "H.264 Main Profile, level 1642.4",
			"percent": 7.186126876716848e-06
		},
		{
			"codec": "hvc1.2.4.L120.90",
			"description": "Unknown Codec",
			"percent": 7.060641541267776e-06
		},
		{
			"codec": "av01.0.16M.08.0.110.01.01.01.0",
			"description": "AV1 Main Profile, level 16., Main tier, 08 bits",
			"percent": 6.458311931112232e-06
		},
		{
			"codec": "hvc1.2.4.L153.90",
			"description": "Unknown Codec",
			"percent": 5.621743028118419e-06
		},
		{
			"codec": "hvc1.2.4.L153.0",
			"description": "Unknown Codec",
			"percent": 5.3791380462502136e-06
		},
		{
			"codec": "av01.0.01M.10.0.110.01.01.01.0",
			"description": "AV1 Main Profile, level 1., Main tier, 10 bits",
			"percent": 4.421266652322299e-06
		},
		{
			"codec": "hvc1.2.4.H150.90",
			"description": "Unknown Codec",
			"percent": 3.9360566885858875e-06
		},
		{
			"codec": "avc1.4d401f",
			"description": "H.264 Main Profile, level 1641.5",
			"percent": 3.647440417053022e-06
		},
		{
			"codec": "avc1.64000a",
			"description": "H.264 High Profile, level 1.0",
			"percent": 3.392286901639909e-06
		},
		{
			"codec": "hev1.1.6.L180.90",
			"description": "Unknown Codec",
			"percent": 3.3337270784303424e-06
		},
		{
			"codec": "av01.0.14M.08.0.110.01.01.01.0",
			"description": "AV1 Main Profile, level 14., Main tier, 08 bits",
			"percent": 3.1454990752567348e-06
		},
		{
			"codec": "avc1.4D4032",
			"description": "H.264 Main Profile, level 1643.4",
			"percent": 3.053476495927415e-06
		},
		{
			"codec": "hvc1.2.4.L123.90",
			"description": "Unknown Codec",
			"percent": 2.9489053830531886e-06
		},
		{
			"codec": "avc1.42c01f",
			"description": "H.264 Baseline Profile, level 4918.3",
			"percent": 2.7439460018197047e-06
		},
		{
			"codec": "avc1.4D0029",
			"description": "H.264 Main Profile, level 4.1",
			"percent": 2.154164925209067e-06
		},
		{
			"codec": "avc1.640833",
			"description": "H.264 High Profile, level 209.9",
			"percent": 2.045410967819871e-06
		},
		{
			"codec": "hev1.2.4.L153.0",
			"description": "Unknown Codec",
			"percent": 1.6396750498678722e-06
		},
		{
			"codec": "avc1.42C028",
			"description": "H.264 Baseline Profile, level 4919.2",
			"percent": 1.5267382479637076e-06
		},
		{
			"codec": "hvc1.2.4.H150.0",
			"description": "Unknown Codec",
			"percent": 1.4723612692691099e-06
		},
		{
			"codec": "avc1.428028",
			"description": "H.264 Baseline Profile, level 3280.8",
			"percent": 1.4723612692691099e-06
		},
		{
			"codec": "avc1.640015",
			"description": "H.264 High Profile, level 2.1",
			"percent": 1.3970700679996667e-06
		},
		{
			"codec": "avc1.420028",
			"description": "H.264 Baseline Profile, level 4.0",
			"percent": 1.2381219764308424e-06
		},
		{
			"codec": "hev1.2.4.L153.90",
			"description": "Unknown Codec",
			"percent": 1.141916552586554e-06
		},
		{
			"codec": "avc1.4D002A",
			"description": "H.264 Main Profile, level 4.2",
			"percent": 1.0289797506823893e-06
		},
		{
			"codec": "avc1.64003C",
			"description": "H.264 High Profile, level 6.0",
			"percent": 9.996998390776059e-07
		},
		{
			"codec": "hvc1.2.4.L120.0",
			"description": "Unknown Codec",
			"percent": 8.07288991389029e-07
		},
		{
			"codec": "avc1.64082A",
			"description": "H.264 High Profile, level 209.0",
			"percent": 7.738262352692764e-07
		},
		{
			"codec": "hev1.2.4.H150.90",
			"description": "Unknown Codec",
			"percent": 7.654605462393383e-07
		},
		{
			"codec": "hvc1.2.4.L150.90",
			"description": "Unknown Codec",
			"percent": 7.44546323664493e-07
		},
		{
			"codec": "avc1.42C020",
			"description": "H.264 Baseline Profile, level 4918.4",
			"percent": 6.901693449698952e-07
		},
		{
			"codec": "avc1.4D0028",
			"description": "H.264 Main Profile, level 4.0",
			"percent": 6.232438327303903e-07
		},
		{
			"codec": "avc1.42C01E",
			"description": "H.264 Baseline Profile, level 4918.2",
			"percent": 6.190609882154212e-07
		},
		{
			"codec": "avc1.4d4028",
			"description": "H.264 Main Profile, level 1642.4",
			"percent": 5.605011650058543e-07
		},
		{
			"codec": "dvh1.08.07",
			"description": "Unknown Codec",
			"percent": 5.43769786945978e-07
		},
		{
			"codec": "hev1.2.4.L150.0",
			"description": "Unknown Codec",
			"percent": 5.43769786945978e-07
		},
		{
			"codec": "avc1.42c01e",
			"description": "H.264 Baseline Profile, level 4918.2",
			"percent": 5.39586942431009e-07
		},
		{
			"codec": "avc1.F40028",
			"description": "H.264 Unknown Profile, level 4.0",
			"percent": 4.4756436310168966e-07
		},
		{
			"codec": "avc1.42c015",
			"description": "H.264 Baseline Profile, level 4917.3",
			"percent": 4.141016069819371e-07
		},
		{
			"codec": "avc1.F40020",
			"description": "H.264 Unknown Profile, level 3.2",
			"percent": 4.05735917951999e-07
		},
		{
			"codec": "hev1.2.4.L120.90",
			"description": "Unknown Codec",
			"percent": 4.0155307343702995e-07
		},
		{
			"codec": "avc1.640828",
			"description": "H.264 High Profile, level 208.8",
			"percent": 3.973702289220609e-07
		},
		{
			"codec": "dvh1.08.09",
			"description": "Unknown Codec",
			"percent": 3.9318738440709185e-07
		},
		{
			"codec": "hev1.2.4.L150.90",
			"description": "Unknown Codec",
			"percent": 3.5972462828733936e-07
		},
		{
			"codec": "hev1.1.6.L60.90",
			"description": "Unknown Codec",
			"percent": 3.4717609474243214e-07
		},
		{
			"codec": "avc1.420029",
			"description": "H.264 Baseline Profile, level 4.1",
			"percent": 2.969819605628034e-07
		},
		{
			"codec": "avc1.42801f",
			"description": "H.264 Baseline Profile, level 3279.9",
			"percent": 2.886162715328653e-07
		},
		{
			"codec": "hvc1.2.4.L123.0",
			"description": "Unknown Codec",
			"percent": 2.844334270178962e-07
		},
		{
			"codec": "avc1.4d4029",
			"description": "H.264 Main Profile, level 1642.5",
			"percent": 2.5933635992808184e-07
		},
		{
			"codec": "avc1.F4001F",
			"description": "H.264 Unknown Profile, level 3.1",
			"percent": 2.551535154131128e-07
		},
		{
			"codec": "avc1.42C02A",
			"description": "H.264 Baseline Profile, level 4919.4",
			"percent": 2.5097067089814373e-07
		},
		{
			"codec": "dvh1.08.04",
			"description": "Unknown Codec",
			"percent": 2.4260498186820557e-07
		},
		{
			"codec": "hev1.2.4.L123.90",
			"description": "Unknown Codec",
			"percent": 2.091422257484531e-07
		},
		{
			"codec": "avc1.4D403C",
			"description": "H.264 Main Profile, level 1644.4",
			"percent": 1.9659369220354592e-07
		},
		{
			"codec": "avc1.4D4020",
			"description": "H.264 Main Profile, level 1641.6",
			"percent": 1.882280031736078e-07
		},
		{
			"codec": "avc1.640016",
			"description": "H.264 High Profile, level 2.2",
			"percent": 1.8404515865863873e-07
		},
		{
			"codec": "dvh1.08.06",
			"description": "Unknown Codec",
			"percent": 1.7986231414366968e-07
		},
		{
			"codec": "hev1.2.4.L156.90",
			"description": "Unknown Codec",
			"percent": 1.756794696287006e-07
		},
		{
			"codec": "dvh1.05.07",
			"description": "Unknown Codec",
			"percent": 1.7149662511373154e-07
		},
		{
			"codec": "avc1.42C029",
			"description": "H.264 Baseline Profile, level 4919.3",
			"percent": 1.7149662511373154e-07
		},
		{
			"codec": "avc1.42001E",
			"description": "H.264 Baseline Profile, level 3.0",
			"percent": 1.4639955802391717e-07
		},
		{
			"codec": "hev1.2.4.H150.0",
			"description": "Unknown Codec",
			"percent": 1.422167135089481e-07
		},
		{
			"codec": "avc1.644028",
			"description": "H.264 High Profile, level 1642.4",
			"percent": 1.2966817996404092e-07
		},
		{
			"codec": "avc1.428029",
			"description": "H.264 Baseline Profile, level 3280.9",
			"percent": 1.2548533544907187e-07
		},
		{
			"codec": "avc1.640014",
			"description": "H.264 High Profile, level 2.0",
			"percent": 1.1293680190416468e-07
		},
		{
			"codec": "avc1.424028",
			"description": "H.264 Baseline Profile, level 1642.4",
			"percent": 1.1293680190416468e-07
		},
		{
			"codec": "avc1.4D401F",
			"description": "H.264 Main Profile, level 1641.5",
			"percent": 1.0875395738919561e-07
		},
		{
			"codec": "avc1.4D042A",
			"description": "H.264 Main Profile, level 106.6",
			"percent": 1.0457111287422656e-07
		},
		{
			"codec": "avc1.4D0020",
			"description": "H.264 Main Profile, level 3.2",
			"percent": 1.0457111287422656e-07
		},
		{
			"codec": "hvc1.2.4.L156.0",
			"description": "Unknown Codec",
			"percent": 8.78397348143503e-08
		},
		{
			"codec": "avc1.42E028",
			"description": "H.264 Baseline Profile, level 5738.4",
			"percent": 8.78397348143503e-08
		},
		{
			"codec": "avc1.428020",
			"description": "H.264 Baseline Profile, level 3280.0",
			"percent": 7.947404578441218e-08
		},
		{
			"codec": "avc1.6E0033",
			"description": "H.264 Unknown Profile, level 5.1",
			"percent": 7.529120126944311e-08
		},
		{
			"codec": "dvh1.08.05",
			"description": "Unknown Codec",
			"percent": 7.110835675447406e-08
		},
		{
			"codec": "avc1.64002a",
			"description": "H.264 High Profile, level 4.2",
			"percent": 7.110835675447406e-08
		},
		{
			"codec": "avc1.4d4033",
			"description": "H.264 Main Profile, level 1643.5",
			"percent": 6.692551223950499e-08
		},
		{
			"codec": "avc1.42802A",
			"description": "H.264 Baseline Profile, level 3281.0",
			"percent": 6.274266772453593e-08
		},
		{
			"codec": "hvc1.2.4.L156.90",
			"description": "Unknown Codec",
			"percent": 6.274266772453593e-08
		},
		{
			"codec": "avc1.4D0033",
			"description": "H.264 Main Profile, level 5.1",
			"percent": 5.8559823209566866e-08
		},
		{
			"codec": "hev1.2.4.L156.0",
			"description": "Unknown Codec",
			"percent": 5.8559823209566866e-08
		},
		{
			"codec": "avc1.42C034",
			"description": "H.264 Baseline Profile, level 4920.4",
			"percent": 5.8559823209566866e-08
		},
		{
			"codec": "dvh1.05.09",
			"description": "Unknown Codec",
			"percent": 5.8559823209566866e-08
		},
		{
			"codec": "avc1.4d4015",
			"description": "H.264 Main Profile, level 1640.5",
			"percent": 5.4376978694597805e-08
		},
		{
			"codec": "avc1.42C00D",
			"description": "H.264 Baseline Profile, level 4916.5",
			"percent": 5.4376978694597805e-08
		},
		{
			"codec": "avc1.64000c",
			"description": "H.264 High Profile, level 1.2",
			"percent": 5.4376978694597805e-08
		},
		{
			"codec": "avc1.64000d",
			"description": "H.264 High Profile, level 1.3",
			"percent": 5.0194134179628744e-08
		},
		{
			"codec": "avc1.4d4020",
			"description": "H.264 Main Profile, level 1641.6",
			"percent": 5.0194134179628744e-08
		},
		{
			"codec": "avc1.4d0029",
			"description": "H.264 Main Profile, level 4.1",
			"percent": 4.6011289664659683e-08
		},
		{
			"codec": "avc1.640829",
			"description": "H.264 High Profile, level 208.9",
			"percent": 4.6011289664659683e-08
		},
		{
			"codec": "avc1.42001e",
			"description": "H.264 Baseline Profile, level 3.0",
			"percent": 4.6011289664659683e-08
		},
		{
			"codec": "dvh1.05.06",
			"description": "Unknown Codec",
			"percent": 4.182844514969062e-08
		},
		{
			"codec": "avc1.7A0028",
			"description": "H.264 Unknown Profile, level 4.0",
			"percent": 4.182844514969062e-08
		},
		{
			"codec": "avc1.6E0028",
			"description": "H.264 Unknown Profile, level 4.0",
			"percent": 4.182844514969062e-08
		},
		{
			"codec": "avc1.F40032",
			"description": "H.264 Unknown Profile, level 5.0",
			"percent": 4.182844514969062e-08
		},
		{
			"codec": "hev1.1.2.H150.0",
			"description": "Unknown Codec",
			"percent": 3.7645600634721555e-08
		},
		{
			"codec": "avc1.F40016",
			"description": "H.264 Unknown Profile, level 2.2",
			"percent": 3.7645600634721555e-08
		},
		{
			"codec": "avc1.42C033",
			"description": "H.264 Baseline Profile, level 4920.3",
			"percent": 3.3462756119752494e-08
		},
		{
			"codec": "dvh1.08.08",
			"description": "Unknown Codec",
			"percent": 3.3462756119752494e-08
		},
		{
			"codec": "avc1.7A001E",
			"description": "H.264 Unknown Profile, level 3.0",
			"percent": 3.3462756119752494e-08
		},
		{
			"codec": "avc1.64000D",
			"description": "H.264 High Profile, level 1.3",
			"percent": 2.9279911604783433e-08
		},
		{
			"codec": "avc1.4d001f",
			"description": "H.264 Main Profile, level 3.1",
			"percent": 2.9279911604783433e-08
		},
		{
			"codec": "avc1.4d001e",
			"description": "H.264 Main Profile, level 3.0",
			"percent": 2.9279911604783433e-08
		},
		{
			"codec": "hev1.1.6.L183.90",
			"description": "Unknown Codec",
			"percent": 2.9279911604783433e-08
		},
		{
			"codec": "av01.0.17M.08.0.110.01.01.01.0",
			"description": "AV1 Main Profile, level 17., Main tier, 08 bits",
			"percent": 2.5097067089814372e-08
		},
		{
			"codec": "avc1.420032",
			"description": "H.264 Baseline Profile, level 5.0",
			"percent": 2.5097067089814372e-08
		},
		{
			"codec": "avc1.42c028",
			"description": "H.264 Baseline Profile, level 4919.2",
			"percent": 2.5097067089814372e-08
		},
		{
			"codec": "avc1.42c014",
			"description": "H.264 Baseline Profile, level 4917.2",
			"percent": 2.5097067089814372e-08
		},
		{
			"codec": "avc1.42C01F",
			"description": "H.264 Baseline Profile, level 4918.3",
			"percent": 2.5097067089814372e-08
		},
		{
			"codec": "avc1.7A001F",
			"description": "H.264 Unknown Profile, level 3.1",
			"percent": 2.5097067089814372e-08
		},
		{
			"codec": "avc1.42801e",
			"description": "H.264 Baseline Profile, level 3279.8",
			"percent": 2.5097067089814372e-08
		},
		{
			"codec": "avc1.64642A",
			"description": "H.264 High Profile, level 2564.2",
			"percent": 2.091422257484531e-08
		},
		{
			"codec": "avc1.42c00d",
			"description": "H.264 Baseline Profile, level 4916.5",
			"percent": 2.091422257484531e-08
		},
		{
			"codec": "avc1.F4001E",
			"description": "H.264 Unknown Profile, level 3.0",
			"percent": 2.091422257484531e-08
		},
		{
			"codec": "avc1.42800a",
			"description": "H.264 Baseline Profile, level 3277.8",
			"percent": 2.091422257484531e-08
		},
		{
			"codec": "avc1.4D482A",
			"description": "H.264 Main Profile, level 1847.4",
			"percent": 1.6731378059876247e-08
		},
		{
			"codec": "avc1.420033",
			"description": "H.264 Baseline Profile, level 5.1",
			"percent": 1.6731378059876247e-08
		},
		{
			"codec": "avc1.42E032",
			"description": "H.264 Baseline Profile, level 5739.4",
			"percent": 1.2548533544907186e-08
		},
		{
			"codec": "avc1.42c00c",
			"description": "H.264 Baseline Profile, level 4916.4",
			"percent": 1.2548533544907186e-08
		},
		{
			"codec": "avc1.7A0015",
			"description": "H.264 Unknown Profile, level 2.1",
			"percent": 1.2548533544907186e-08
		},
		{
			"codec": "avc1.641029",
			"description": "H.264 High Profile, level 413.7",
			"percent": 1.2548533544907186e-08
		},
		{
			"codec": "avc1.64081F",
			"description": "H.264 High Profile, level 207.9",
			"percent": 1.2548533544907186e-08
		},
		{
			"codec": "avc1.428032",
			"description": "H.264 Baseline Profile, level 3281.8",
			"percent": 1.2548533544907186e-08
		},
		{
			"codec": "avc1.42c020",
			"description": "H.264 Baseline Profile, level 4918.4",
			"percent": 1.2548533544907186e-08
		},
		{
			"codec": "avc1.42002A",
			"description": "H.264 Baseline Profile, level 4.2",
			"percent": 1.2548533544907186e-08
		},
		{
			"codec": "avc1.42000A",
			"description": "H.264 Baseline Profile, level 1.0",
			"percent": 1.2548533544907186e-08
		},
		{
			"codec": "avc1.64081E",
			"description": "H.264 High Profile, level 207.8",
			"percent": 1.2548533544907186e-08
		},
		{
			"codec": "avc1.640832",
			"description": "H.264 High Profile, level 209.8",
			"percent": 1.2548533544907186e-08
		},
		{
			"codec": "hvc1.1.2.H150.0",
			"description": "Unknown Codec",
			"percent": 1.2548533544907186e-08
		},
		{
			"codec": "avc1.F40015",
			"description": "H.264 Unknown Profile, level 2.1",
			"percent": 8.365689029938123e-09
		},
		{
			"codec": "avc1.f4000d",
			"description": "H.264 Unknown Profile, level 1.3",
			"percent": 8.365689029938123e-09
		},
		{
			"codec": "avc1.420428",
			"description": "H.264 Baseline Profile, level 106.4",
			"percent": 8.365689029938123e-09
		},
		{
			"codec": "hev1.1.2.L153.0",
			"description": "Unknown Codec",
			"percent": 8.365689029938123e-09
		},
		{
			"codec": "avc1.64801f",
			"description": "H.264 High Profile, level 3279.9",
			"percent": 8.365689029938123e-09
		},
		{
			"codec": "avc1.f4001f",
			"description": "H.264 Unknown Profile, level 3.1",
			"percent": 8.365689029938123e-09
		},
		{
			"codec": "avc1.42C014",
			"description": "H.264 Baseline Profile, level 4917.2",
			"percent": 8.365689029938123e-09
		},
		{
			"codec": "avc1.42E02A",
			"description": "H.264 Baseline Profile, level 5738.6",
			"percent": 8.365689029938123e-09
		},
		{
			"codec": "avc1.42E01E",
			"description": "H.264 Baseline Profile, level 5737.4",
			"percent": 8.365689029938123e-09
		},
		{
			"codec": "dvh1.05.08",
			"description": "Unknown Codec",
			"percent": 8.365689029938123e-09
		},
		{
			"codec": "hev1.1.2.L150.0",
			"description": "Unknown Codec",
			"percent": 8.365689029938123e-09
		},
		{
			"codec": "avc1.428033",
			"description": "H.264 Baseline Profile, level 3281.9",
			"percent": 8.365689029938123e-09
		},
		{
			"codec": "avc1.640C34",
			"description": "H.264 High Profile, level 312.4",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.64003c",
			"description": "H.264 High Profile, level 6.0",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.4d0015",
			"description": "H.264 Main Profile, level 2.1",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.6E001E",
			"description": "H.264 Unknown Profile, level 3.0",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.4D0428",
			"description": "H.264 Main Profile, level 106.4",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.4D6428",
			"description": "H.264 Main Profile, level 2564.0",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.4D0034",
			"description": "H.264 Main Profile, level 5.2",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.42c016",
			"description": "H.264 Baseline Profile, level 4917.4",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.4d0020",
			"description": "H.264 Main Profile, level 3.2",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.42e01f",
			"description": "H.264 Baseline Profile, level 5737.5",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.4d4016",
			"description": "H.264 Main Profile, level 1640.6",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.424020",
			"description": "H.264 Baseline Profile, level 1641.6",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.6E0032",
			"description": "H.264 Unknown Profile, level 5.0",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.4D4C34",
			"description": "H.264 Main Profile, level 1950.8",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "hev1.1.6.L255.90",
			"description": "Unknown Codec",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.4D001F",
			"description": "H.264 Main Profile, level 3.1",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.4D642A",
			"description": "H.264 Main Profile, level 2564.2",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.4d400d",
			"description": "H.264 Main Profile, level 1639.7",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.4D4828",
			"description": "H.264 Main Profile, level 1847.2",
			"percent": 4.182844514969062e-09
		},
		{
			"codec": "avc1.4D0429",
			"description": "H.264 Main Profile, level 106.5",
			"percent": 4.182844514969062e-09
		}
	];
	const xData = data.filter(e => e.percent > 0.00001);

	const avcData = xData.filter(e => e.codec.indexOf('avc') >= 0);
	const hevcData = xData.filter(e => e.codec.indexOf('hev') >= 0);
	const av1Data = xData.filter(e => e.codec.indexOf('av01') >= 0);

	// HEVC HDR 
	const hevcHDRData = data.filter(e => e.codec.indexOf('hev1.2') >= 0);

	// HDR Dolby Vision
	const hevcDolbyVisionData = data.filter(e => e.codec.indexOf('dvh') >= 0);

    return avcData.concat(hevcData, av1Data, hevcHDRData, hevcDolbyVisionData, audioData);
}
