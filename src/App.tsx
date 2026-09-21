import { useEffect, useRef } from 'react';
import EyeHero from './EyeHero';

const scripts = [
  'js/i18n.js',
  'js/core-renderer.js',
  'js/hero-project.js',
  'js/vendor/gsap.min.js',
  'js/vendor/ScrollTrigger.min.js',
  'js/vendor/lenis.min.js',
  'js/index.js'
];

function App() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;
    
    // We append scripts sequentially to preserve execution order
    const loadSequential = async () => {
      for (const src of scripts) {
        await new Promise<void>((resolve, _reject) => {
          const script = document.createElement('script');
          script.src = src;
          script.async = false;
          script.onload = () => resolve();
          script.onerror = () => resolve(); // Ignore errors so next scripts load
          document.body.appendChild(script);
        });
      }
    };
    
    loadSequential();
  }, []);

  return (
    <>

        <div className="intro-bg" id="intro-bg"></div>

  <div className="name-layer" id="name-layer">
    <div className="preloader-content" id="preloader-content" style={{ opacity: 0, pointerEvents: 'none' }}>
      <div id="preloader-logo">S</div>
      <span id="preloader-luke">antosh</span>
      <span id="preloader-baffait"> V</span>
      <span id="preloader-dot">.</span>
    </div>
  </div>

  <div className="transition-panel" id="transition-panel">
    <div className="t-panel-dark" id="t-panel-dark"></div>
    <div className="t-panel-red" id="t-panel-red"></div>
  </div>

  <div className="scroll-wrap" id="scroll-wrap">
    <section className="hero" id="hero">
      <h1 className="sr-only" >Santosh V., Creative Developer, computer science graduate, specialized in Brain-Computer Interfaces (BCI), embedded systems, and highly interactive web experiences.</h1>
      <div className="hero-canvas" id="hero-canvas"></div>
      <EyeHero />
      <div className="hero-content">
        <div className="hero-tagline" id="hero-tagline">
          rewiring reality
        </div>

        <div className="hero-line" id="hero-line"></div>
        <div className="hero-bar" id="hero-bar">
          <div className="hero-bar-left">
          </div>
          <nav className="hero-bar-center" aria-label="Réseaux sociaux">
            <a className="chr-hover" data-chr="LinkedIn" href="https://www.linkedin.com/in/meflux/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a>
            <span className="sep" aria-hidden="true">/</span>
            <a className="chr-hover" data-chr="GitHub" href="https://github.com/newflux" target="_blank" rel="noopener noreferrer" aria-label="GitHub"></a>
          </nav>
          <nav className="hero-bar-right" aria-label="Navigation principale">
            <a className="chr-hover" data-chr="Work" href="works/" data-page-link="work" aria-label="Work"></a>
            <a className="chr-hover" data-chr="Info" href="info/" data-page-link="info" aria-label="Info"></a>
            <a className="chr-hover" data-chr="Contact" href="contact/" data-page-link="contact" aria-label="Contact"></a>
          </nav>
        </div>
      </div>
    </section>
  </div>

  <div className="reveal-image-wrap" id="reveal-image-wrap">
    <canvas className="reveal-image reveal-seq" id="reveal-canvas"></canvas>
    <div className="reveal-frame reveal-seq">
      <span className="reveal-corner tl"></span>
      <span className="reveal-corner tr"></span>
      <span className="reveal-corner bl"></span>
      <span className="reveal-corner br"></span>
    </div>
    <div className="reveal-overlay" id="reveal-overlay"></div>
    <p className="reveal-phrase" id="reveal-phrase">Basically, I make websites.</p>
  </div>

  <section className="section-after" id="section-after">
  <div className="about awwwards-about" id="about">

      <div className="about-editorial-grid">
        
        <div className="about-image-wrap" id="about-photo-wrap">
          <div className="about-image-inner">
            <span className="cross top-left">+</span>
            <span className="cross top-right">+</span>
            <span className="cross bottom-left">+</span>
            <span className="cross bottom-right">+</span>
            <img src="/assets/images/profile/me.avif" alt="Santosh V." className="about-photo-img" />
          </div>
          <div className="about-meta-row">
            <span className="meta-label">BASED IN</span>
            <span className="meta-value">Bangalore, India</span>
          </div>
          <div className="about-meta-row">
            <span className="meta-label">STATUS</span>
            <span className="meta-value">Available for new opportunities</span>
          </div>
        </div>

        <div className="about-text-content" id="about-text-content">
          <div className="about-label">ABOUT</div>
          <h2 className="about-headline">
            my name is <span className="name-highlight">Santosh V.</span><br/>
            builder of products that <span className="key-term">disrupt reality.</span>
          </h2>

          <p className="about-body">
            operating from bangalore, i spend my time transforming <span className="key-term">complex technical primitives</span> into functional, memorable tools. from <span className="key-term">deep-tech engineering</span> and Brain-Computer Interfaces (BCI) to cognitive computing, i engineer experiences that demand attention and alter how we interact with technology.
          </p>
          
          <div style={{ marginTop: '3rem' }}>
            <div className="about-info-btn">
              <a href="info/" data-page-link="info">INFO</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="projects" id="projects">
      <svg className="fluid-line-svg" id="fluid-line-svg" viewBox="0 0 1400 1400" preserveAspectRatio="xMidYMid slice">
        <path className="fluid-line" id="fluid-line" d="M -80.0,0.0 L -71.8,10.2 L -64.0,16.5 L -56.5,17.0 L -49.2,12.7 L -41.8,7.0 L -34.4,3.6 L -26.9,4.7 L -19.5,9.5 L -12.1,14.8 L -4.8,16.8 L 2.5,13.2 L 10.0,4.4 L 17.6,-6.5 L 25.3,-15.2 L 32.9,-18.7 L 40.1,-16.4 L 44.6,34.2 L 54.1,-5.4 L 61.3,-3.7 L 68.7,-6.4 L 76.3,-11.3 L 83.8,-14.7 L 96.4,-68.0 L 97.4,-5.9 L 103.2,5.4 L 108.9,16.7 L 114.8,24.2 L 121.5,25.9 L 128.7,22.9 L 136.3,18.5 L 143.5,16.3 L 150.0,18.5 L 155.8,24.3 L 153.4,75.0 L 167.5,33.9 L 174.6,31.6 L 182.9,24.1 L 191.6,14.6 L 200.1,7.2 L 207.4,5.0 L 213.5,8.4 L 218.7,15.1 L 223.8,21.4 L 229.8,24.2 L 236.9,22.8 L 259.5,-33.7 L 251.9,17.1 L 257.9,19.6 L 262.1,27.8 L 265.0,39.7 L 253.6,94.5 L 271.2,60.1 L 276.6,62.8 L 283.6,61.1 L 291.1,57.9 L 297.9,57.0 L 303.1,60.1 L 306.8,66.7 L 310.2,73.9 L 314.7,78.0 L 321.4,76.9 L 330.3,71.1 L 340.2,63.3 L 349.3,57.6 L 356.3,56.7 L 360.8,60.9 L 363.7,68.3 L 345.9,115.2 L 396.9,30.4 L 377.5,78.9 L 385.2,76.9 L 392.2,76.1 L 396.8,79.6 L 398.2,88.1 L 397.4,100.0 L 396.3,111.9 L 397.0,120.4 L 400.8,124.0 L 407.3,123.6 L 414.7,122.0 L 420.8,122.4 L 424.3,126.3 L 425.5,133.1 L 426.2,140.4 L 400.6,180.2 L 434.8,145.5 L 444.3,141.8 L 455.4,136.7 L 465.3,133.4 L 471.7,134.0 L 474.3,138.9 L 512.7,107.0 L 474.5,153.4 L 477.0,157.8 L 482.7,159.3 L 490.2,159.3 L 496.6,160.3 L 499.5,164.6 L 497.7,172.6 L 492.6,183.0 L 487.1,193.3 L 448.5,228.0 L 486.3,205.2 L 492.0,206.5 L 499.1,207.1 L 504.4,209.0 L 506.0,213.4 L 504.2,219.7 L 501.9,226.2 L 502.1,231.0 L 507.3,233.1 L 517.1,232.9 L 529.1,232.1 L 539.3,232.4 L 595.2,213.0 L 545.2,240.5 L 542.1,246.9 L 539.2,253.1 L 497.2,273.0 L 544.0,261.3 L 550.6,264.2 L 556.0,267.6 L 556.7,272.5 L 551.7,278.8 L 542.5,285.8 L 533.1,292.5 L 527.2,298.0 L 526.9,302.4 L 531.4,306.0 L 537.5,309.6 L 541.3,313.7 L 540.7,318.3 L 536.4,323.1 L 531.3,327.9 L 529.3,332.3 L 487.8,337.2 L 541.7,341.2 L 607.6,347.5 L 561.6,351.4 L 565.3,356.8 L 563.1,361.8 L 557.4,366.4 L 551.9,371.0 L 549.9,375.8 L 552.1,381.3 L 556.7,387.4 L 559.8,393.4 L 558.1,398.6 L 550.7,402.5 L 539.4,405.1 L 527.9,407.6 L 520.0,410.4 L 474.5,401.9 L 520.0,420.1 L 523.8,426.2 L 525.3,431.9 L 522.6,436.0 L 516.4,438.5 L 509.6,440.5 L 505.7,443.6 L 555.7,474.3 L 512.4,457.4 L 519.7,467.0 L 525.0,476.0 L 525.7,482.5 L 521.4,486.0 L 514.2,487.4 L 507.2,488.7 L 503.2,492.0 L 466.7,470.6 L 503.8,505.2 L 503.8,511.9 L 500.0,515.6 L 491.8,515.4 L 480.6,512.2 L 469.3,508.7 L 461.0,507.5 L 456.9,510.3 L 456.2,516.4 L 456.7,523.8 L 455.5,529.7 L 451.2,532.5 L 444.3,532.5 L 474.0,572.6 L 431.8,533.6 L 430.4,539.4 L 402.9,515.3 L 435.6,561.1 L 437.5,571.5 L 436.0,578.1 L 430.9,580.1 L 423.5,579.4 L 416.3,578.8 L 411.3,581.0 L 409.1,586.6 L 408.3,594.1 L 406.7,600.7 L 402.2,603.6 L 394.2,601.7 L 383.7,596.6 L 373.1,591.2 L 364.8,588.8 L 359.9,591.0 L 331.1,561.3 L 357.3,604.8 L 355.2,610.7 L 383.6,657.1 L 343.5,612.6 L 336.1,611.4 L 330.6,612.8 L 328.6,618.7 L 329.8,628.8 L 332.5,640.7 L 334.2,651.2 L 332.8,657.5 L 327.9,659.4 L 320.7,658.5 L 313.7,657.8 L 309.0,659.9 L 307.1,665.4 L 277.7,638.5 L 306.0,679.2 L 302.1,682.1 L 294.4,680.6 L 283.8,676.1 L 272.9,671.6 L 264.5,670.0 L 260.1,672.7 L 259.2,679.0 L 299.1,724.8 L 258.9,692.4 L 255.0,695.3 L 248.3,695.8 L 241.1,696.0 L 236.1,698.3 L 235.6,704.3 L 239.4,713.5 L 209.6,696.8 L 250.3,733.1 L 251.2,739.0 L 247.5,741.6 L 240.9,742.4 L 234.4,743.5 L 231.0,746.5 L 231.4,751.8 L 234.3,758.2 L 236.3,763.9 L 234.2,767.4 L 226.9,768.7 L 215.6,768.7 L 204.0,769.2 L 195.8,771.5 L 245.7,792.4 L 195.5,781.8 L 156.0,776.9 L 202.0,793.6 L 200.2,798.1 L 194.9,802.1 L 188.8,806.4 L 186.0,811.3 L 188.8,816.9 L 197.2,822.7 L 208.2,828.1 L 217.5,833.0 L 221.8,837.5 L 220.5,842.3 L 215.7,847.5 L 211.3,853.0 L 210.6,858.3 L 214.3,863.2 L 220.7,867.5 L 182.0,881.1 L 226.9,877.1 L 222.3,884.0 L 213.9,892.4 L 258.0,885.3 L 200.7,909.7 L 201.8,916.5 L 207.8,921.7 L 215.5,926.1 L 221.5,931.1 L 223.6,937.9 L 222.5,946.4 L 220.9,955.5 L 222.3,963.4 L 228.9,968.9 L 240.3,971.7 L 254.0,973.2 L 227.3,998.2 L 273.9,980.2 L 277.0,988.0 L 277.2,997.9 L 277.9,1007.9 L 281.7,1016.2 L 289.4,1022.0 L 299.3,1026.5 L 308.4,1031.6 L 314.0,1039.5 L 355.3,1012.3 L 312.7,1062.6 L 310.6,1076.3 L 311.2,1087.4 L 316.1,1094.5 L 324.6,1098.1 L 334.3,1100.2 L 309.9,1134.7 L 347.4,1109.9 L 349.6,1118.7 L 351.1,1127.9 L 354.8,1135.0 L 362.4,1138.0 L 373.7,1137.1 L 386.6,1134.2 L 398.2,1132.3 L 406.1,1133.9 L 410.0,1139.6 L 411.3,1147.9 L 412.7,1156.0 L 416.5,1161.4 L 423.1,1163.5 L 431.4,1163.5 L 474.9,1122.7 L 413.9,1202.4 L 443.7,1176.7 L 441.5,1188.3 L 439.2,1200.3 L 439.2,1209.4 L 442.8,1214.0 L 449.6,1214.5 L 457.3,1213.4 L 463.7,1213.7 L 467.5,1217.3 L 469.1,1224.0 L 470.2,1231.4 L 473.0,1236.3 L 478.9,1236.4 L 487.8,1231.9 L 497.7,1225.1 L 506.5,1219.5 L 489.2,1256.6 L 515.4,1221.5 L 516.5,1228.0 L 517.6,1234.4 L 520.5,1237.8 L 551.0,1188.4 L 531.5,1234.0 L 536.9,1231.8 L 540.2,1233.6 L 541.0,1240.6 L 540.2,1251.6 L 539.5,1263.0 L 540.4,1271.0 L 543.6,1273.7 L 548.6,1271.6 L 554.0,1267.6 L 558.6,1265.3 L 548.5,1310.0 L 564.0,1272.4 L 566.0,1278.6 L 568.9,1281.8 L 573.2,1279.6 L 578.5,1272.0 L 584.0,1261.8 L 588.8,1253.1 L 592.4,1249.3 L 595.0,1251.1 L 597.2,1256.6 L 605.7,1207.2 L 602.3,1263.8 L 605.5,1261.2 L 608.7,1255.9 L 611.7,1251.6 L 614.4,1251.8 L 616.7,1302.9 L 620.0,1268.2 L 623.2,1278.9 L 626.7,1286.0 L 630.0,1287.2 L 632.9,1283.3 L 635.6,1277.4 L 638.3,1273.5 L 641.4,1273.8 L 645.0,1277.9 L 648.9,1282.8 L 652.4,1284.7 L 655.0,1281.1 L 656.5,1272.1 L 657.3,1260.6 L 658.1,1250.8 L 659.9,1245.9 L 660.5,1236.9 L 666.8,1250.8 L 670.9,1255.0 L 674.2,1255.8 L 676.3,1252.3 L 677.6,1246.2 L 679.1,1241.1 L 681.9,1240.4 L 686.5,1245.2 L 692.6,1254.1 L 698.9,1263.3 L 704.3,1269.1 L 707.8,1269.4 L 709.6,1264.9 L 710.7,1258.5 L 712.5,1254.0 L 715.7,1253.5 L 736.2,1298.6 L 725.3,1260.5 L 729.2,1261.6 L 731.2,1257.6 L 731.2,1248.4 L 730.2,1236.9 L 709.7,1175.7 L 731.2,1221.6 L 734.8,1221.6 L 739.8,1225.1 L 744.8,1228.5 L 748.6,1228.8 L 750.8,1225.0 L 752.0,1218.7 L 753.7,1213.3 L 757.0,1212.0 L 762.4,1216.3 L 785.6,1266.7 L 776.6,1233.5 L 782.5,1239.0 L 786.4,1239.2 L 788.4,1234.5 L 789.9,1228.1 L 792.1,1223.4 L 795.7,1222.7 L 800.7,1225.7 L 806.0,1229.6 L 810.3,1230.8 L 812.9,1226.8 L 796.7,1165.3 L 814.0,1205.9 L 814.9,1195.6 L 817.4,1190.2 L 821.7,1190.3 L 839.7,1237.2 L 832.4,1197.7 L 836.8,1198.3 L 840.0,1194.5 L 842.6,1188.2 L 845.6,1182.9 L 849.9,1181.9 L 855.5,1186.7 L 861.9,1195.8 L 868.3,1205.5 L 873.7,1211.8 L 878.0,1212.6 L 881.4,1208.3 L 884.6,1202.1 L 888.1,1197.8 L 892.4,1197.7 L 897.3,1201.6 L 908.1,1251.0 L 900.1,1153.8 L 910.6,1205.0 L 913.9,1196.2 L 917.2,1184.7 L 920.9,1174.9 L 925.1,1170.0 L 929.7,1170.9 L 934.7,1175.7 L 939.6,1180.5 L 944.2,1182.0 L 948.7,1179.1 L 953.1,1173.5 L 957.7,1168.9 L 962.4,1168.8 L 967.2,1174.6 L 971.9,1184.9 L 976.6,1240.7 L 981.1,1203.0 L 985.7,1204.7 L 990.3,1201.2 L 995.1,1195.8 L 999.9,1192.2 L 1004.6,1192.9 L 1011.4,1142.6 L 1013.5,1203.2 L 1018.1,1206.0 L 1022.9,1203.4 L 1028.2,1195.3 L 1033.7,1184.6 L 1039.3,1175.4 L 1044.5,1171.3 L 1049.4,1172.9 L 1053.9,1178.4 L 1054.0,1228.7 L 1063.0,1186.2 L 1068.2,1184.0 L 1073.7,1179.2 L 1079.2,1175.3 L 1084.2,1175.8 L 1088.4,1182.2 L 1092.1,1193.0 L 1095.7,1204.4 L 1099.6,1212.3 L 1104.2,1214.6 L 1109.6,1211.8 L 1115.3,1207.0 L 1129.0,1149.7 L 1125.7,1205.3 L 1129.9,1210.4 L 1134.0,1216.6 L 1131.2,1264.4 L 1143.9,1218.0 L 1150.2,1210.6 L 1157.1,1200.5 L 1163.7,1192.0 L 1169.6,1188.4 L 1174.4,1190.5 L 1178.5,1196.4 L 1182.6,1202.4 L 1187.2,1205.1 L 1192.8,1203.5 L 1198.8,1199.2 L 1204.7,1195.7 L 1209.8,1196.7 L 1213.6,1203.4 L 1216.5,1214.5 L 1219.2,1226.1 L 1213.2,1278.4 L 1227.2,1237.1 L 1244.7,1181.1 L 1239.0,1230.4 L 1244.8,1227.9 L 1249.6,1229.4 L 1253.6,1234.9 L 1257.3,1241.3 L 1261.6,1245.1 L 1267.1,1243.4 L 1273.9,1236.5 L 1281.4,1226.9 L 1288.6,1218.8 L 1294.6,1215.4 L 1299.2,1217.8 L 1302.9,1223.8 L 1306.6,1230.0 L 1300.1,1276.7 L 1316.5,1231.7 L 1322.7,1227.7 L 1328.7,1224.5 L 1333.5,1225.6 L 1336.9,1232.5 L 1339.2,1243.6 L 1341.2,1255.3 L 1358.0,1210.6 L 1348.4,1266.7 L 1354.0,1264.5 L 1360.2,1260.4 L 1365.9,1258.0 L 1370.5,1259.7 L 1374.0,1265.2 L 1377.2,1271.7 L 1381.2,1275.6 L 1374.8,1317.5 L 1393.3,1267.3 L 1400.9,1257.9 L 1408.0,1249.9 L 1413.8,1246.6 L 1418.1,1249.0 L 1421.3,1255.0 L 1424.5,1261.2 L 1428.5,1264.2 L 1433.6,1263.0 L 1439.5,1259.0 L 1445.2,1255.8 L 1449.7,1256.9 L 1452.5,1263.7 L 1468.9,1221.7 L 1455.6,1286.4 L 1458.0,1294.8 L 1449.8,1341.0 L 1467.0,1295.5 L 1472.8,1291.3 L 1478.0,1288.8 L 1482.2,1290.3 L 1485.2,1295.7 L 1487.9,1302.1 L 1491.3,1305.9 L 1496.2,1304.4 L 1502.5,1297.5 L 1509.5,1287.9 L 1516.0,1279.7 L 1521.3,1276.2 L 1524.9,1278.4 L 1527.6,1284.2 L 1530.2,1290.3 L 1533.6,1293.1 L 1526.6,1335.1 L 1543.3,1287.5 " stroke="#ff0000" strokeWidth="4" fill="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" opacity="1" />
      </svg>
      <div className="projects-inner">
        <div className="projects-list" id="projects-list">
          <div className="proj-item" data-id="cogniwire" data-img="assets/images/projects/Cogniwire/1.png" data-date="09 2025">Cogniwire</div>
          <div className="proj-item" data-id="madhwa" data-img="assets/images/projects/Madhwa/1.png" data-date="03 2026">Madhwa</div>
          <div className="proj-item" data-id="rehave" data-img="assets/images/projects/Rehave/1.PNG" data-date="06 2026">Rehave</div>
          <div className="proj-item" data-id="aura-exe" data-img="assets/images/projects/AuraExe/1.png" data-date="08 2026">Aura EXE</div>
          <div className="proj-item" data-id="matha-app" data-img="assets/images/projects/MathaApp/1.png" data-date="09 2026">Matha App</div>
          <div className="proj-item" data-id="kharosthi" data-img="assets/images/portal.png" data-date="05 2024">Kharosthi</div>
          <div className="proj-item" data-id="yanam-robo" data-img="assets/images/portal.png" data-date="07 2025">Yanam Robo</div>
          <div className="proj-item" data-id="yolo" data-img="assets/images/portal.png" data-date="11 2023">YOLO</div>
        </div>
      </div>
    </div>
  </section>

  <section className="circle-gallery" id="circle-gallery">
    <div className="circle-gallery-pin" id="circle-gallery-pin">
      <img className="cg-img" src="assets/images/projects/Covers/1.jpeg" alt="Cogniwire" width="3000" height="2250" />
      <img className="cg-img" src="assets/images/projects/Covers/2.jpeg" alt="Madhwa" width="4000" height="3000" />
      <img className="cg-img" src="assets/images/projects/Covers/3.jpeg" alt="Rehave" width="3000" height="2250" />
      <img className="cg-img" src="assets/images/projects/Covers/4.jpeg" alt="Aura EXE" width="7257" height="5443" />
      <img className="cg-img" src="assets/images/projects/Covers/5.jpeg" alt="Matha App" width="2667" height="2000" />
      <img className="cg-img" src="assets/images/projects/Covers/6.jpeg" alt="Kharosthi" width="2667" height="2000" />
      <img className="cg-img" src="assets/images/projects/Covers/7.jpeg" alt="Yanam Robo" width="2667" height="2000" />
      <img className="cg-img" src="assets/images/projects/Covers/8.jpeg" alt="YOLO" width="1333" height="1000" />
      <p className="cg-phrase" id="cg-phrase">Each project is a chance to <span className="other-accent">learn</span>, <span className="other-accent">experiment</span> and push my limits.</p>
    </div>
  </section>

  <section className="skills" id="skills">
    <div className="skills-inner">
      <div className="skills-left">
        <div className="skills-subtitle" >Skills</div>
        <div className="skills-text" >
          Computer Science graduate passionate about building Brain-Computer Interfaces (BCI), embedded hardware, and pushing the limits of web development.
        </div>
        <div className="skills-separator"></div>
        <div><a className="skills-contact chr-hover" data-chr="Contact me🞣" href="contact/"
            data-page-link="contact" aria-label="Me contacter"></a></div>
        <div className="skills-arrow" id="skills-arrow"><svg style={{width: '1.25em', height: '1.25em', verticalAlign: '-0.25em'}} viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/>
</svg></div>
      </div>
      <div className="skills-right" id="skills-right">
        <div className="skill-group open" data-group="frontend">
          <div className="skill-header"><span className="skill-header-title">Frontend</span><span className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>HTML / CSS</li>
              <li>JavaScript / TS</li>
              <li>React / Next.js</li>
              <li>Vue</li>
              <li>React Native</li>
              <li>Tailwind / Bootstrap</li>
              <li>Electron</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="animation">
          <div className="skill-header"><span className="skill-header-title">Animation & 3D</span><span className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>GSAP</li>
              <li>Lenis / Barba.js</li>
              <li>Three.js / WebGL</li>
              <li>Blender</li>
              <li>CAD Design</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="backend">
          <div className="skill-header"><span className="skill-header-title">Backend & ML</span><span className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>Node.js / Express</li>
              <li>Python (NLTK)</li>
              <li>C++ / Java / PHP</li>
              <li>Machine Learning</li>
              <li>DSP</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="database">
          <div className="skill-header"><span className="skill-header-title">Databases</span><span className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>MySQL / PostgreSQL</li>
              <li>MongoDB</li>
              <li>Supabase</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="hardware">
          <div className="skill-header"><span className="skill-header-title">Hardware</span><span className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>Embedded (IoT/SLAM)</li>
              <li>PCB Design</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="devops">
          <div className="skill-header"><span className="skill-header-title">DevOps & Cloud</span><span className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>Docker</li>
              <li>Git / GitHub / GitLab</li>
              <li>Vercel / Netlify</li>
              <li>Cloudflare</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="sysadmin">
          <div className="skill-header"><span className="skill-header-title">System & Security</span><span className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>Linux</li>
              <li>Bash / Shell</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="design">
          <div className="skill-header"><span className="skill-header-title">Design</span><span className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>Photoshop</li>
              <li>Canva</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="awards" id="awards">
    <div className="awards-inner">
      <div className="skills-subtitle awards-title">Awards & Misc</div>
      <div className="awards-list" id="awards-list">
        <div className="award-item" data-cursor-img="assets/images/projects/Covers/1.jpeg">
          <div className="award-org">Anveshana</div>
          <div className="award-site">National Science Fair</div>
          <div className="award-prize">Grand Champions (1st Place)</div>
          <div className="award-date">2026</div>
        </div>
        <div className="award-item" data-cursor-img="assets/images/projects/Covers/2.jpeg">
          <div className="award-org">Startup Saga</div>
          <div className="award-site">Belagavi</div>
          <div className="award-prize">Winner (1st Place)</div>
          <div className="award-date">2026</div>
        </div>
        <div className="award-item" data-cursor-img="assets/images/projects/Covers/3.jpeg">
          <div className="award-org">IMTEX</div>
          <div className="award-site">BIEC Bengaluru</div>
          <div className="award-prize">Exhibitor</div>
          <div className="award-date">2026</div>
        </div>
        <div className="award-item" data-cursor-img="assets/images/projects/Covers/4.jpeg">
          <div className="award-org">National Hackathon</div>
          <div className="award-site">SRMIT Delhi</div>
          <div className="award-prize">Best Hardware Project</div>
          <div className="award-date">2026</div>
        </div>
        <div className="award-item" data-cursor-img="assets/images/projects/Covers/5.jpeg">
          <div className="award-org">State Hackathon</div>
          <div className="award-site">SJCIT</div>
          <div className="award-prize">Podium Finish (3rd Place)</div>
          <div className="award-date">2026</div>
        </div>
      </div>
    </div>
  </section>

  <div className="contact-bg" id="contact-bg"></div>
  <div className="contact-blob-wrap" id="contact-blob-wrap">
    <div className="contact-blob" id="contact-blob"></div>
  </div>
  <section className="contact" id="contact">
    <div className="contact-pin" id="contact-pin">
      <div className="contact-title" id="contact-title">Contact</div>

      <div className="contact-dispo" id="contact-dispo">
        <p>Currently building <span className="other-accent">Brain-Computer Interfaces</span> and exploring embedded hardware. Always eager to push the boundaries of reality through code and design.</p>
      </div>

      <div className="contact-frame" id="contact-frame">
        <img className="contact-frame-img" id="contact-frame-img" src="assets/images/art/Untitled2.png" alt=""
          loading="lazy" decoding="async" />
        <span className="frame-corner tl"></span>
        <span className="frame-corner tr"></span>
        <span className="frame-corner bl"></span>
        <span className="frame-corner br"></span>
      </div>

      <div className="contact-dispo" id="contact-dispo-2">
        <p >
          I\'m available for<span className="other-accent"> freelance missions worldwide</span>, on<span className="other-accent"> your ambitious projects</span> and international collaborations.</p>
      </div>

      <div className="contact-frame" id="contact-frame-2">
        <img className="contact-frame-img" id="contact-frame-img-2" src="assets/images/art/Untitled1.png" alt=""
          loading="lazy" decoding="async" />
        <span className="frame-corner tl"></span>
        <span className="frame-corner tr"></span>
        <span className="frame-corner bl"></span>
        <span className="frame-corner br"></span>
      </div>

      <div className="contact-bottom" id="contact-bottom">
        <nav className="contact-socials" id="contact-socials" aria-label="Réseaux sociaux">
          <a className="chr-hover" data-chr-contact="GitHub" href="https://github.com/newflux" target="_blank" rel="noopener noreferrer" aria-label="GitHub"></a>
          <a className="chr-hover" data-chr-contact="LinkedIn" href="https://www.linkedin.com/in/meflux/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a>
        </nav>
        <a className="contact-mail" id="contact-mail" href="mailto:santoshv.live@gmail.com">santoshv.live@gmail.com</a>
      </div>
    </div>
  </section>

  <div className="footer-transition" id="footer-transition"></div>
  <footer className="footer" id="footer">
    <div className="footer-content" id="footer-content">
      <div className="footer-top">
        <div className="footer-top-col">
          <a className="chr-hover footer-mail" data-chr-footer="santoshv.live@gmail.com"
            href="mailto:santoshv.live@gmail.com" aria-label="Envoyer un mail"></a>
          <span className="chr-hover footer-date" data-chr-footer="© 2026"></span>
        </div>
        <nav className="footer-top-col" aria-label="Réseaux sociaux">
          <a className="chr-hover" data-chr-footer="GitHub" href="https://github.com/newflux" target="_blank" rel="noopener noreferrer" aria-label="GitHub"></a>
          <a className="chr-hover" data-chr-footer="LinkedIn" href="https://www.linkedin.com/in/meflux/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a>
        </nav>
        <nav className="footer-top-col" aria-label="Navigation pied de page">
          <a className="chr-hover" data-chr-footer="Work" href="works/" data-page-link="work" aria-label="Work"></a>
          <a className="chr-hover" data-chr-footer="Info" href="info/" data-page-link="info" aria-label="Info"></a>
          <a className="chr-hover" data-chr-footer="Contact" href="contact/" data-page-link="contact" aria-label="Contact"></a>
        </nav>
      </div>
      <div className="footer-ascii-wrap">
        <div className="footer-ascii left">
          <pre id="ascii-left"></pre>
        </div>
        <div className="footer-ascii right">
          <pre id="ascii-right"></pre>
        </div>
      </div>
      <div className="footer-name">
        <span className="footer-name-luke"><span className="first-letter">R</span>ewiring</span><span
          className="footer-name-baffait-wrap"><span className="footer-name-baffait">Reality</span><span
            className="footer-name-dot">.</span></span>
      </div>
    </div>
  </footer>

  <div className="proj-preview" id="proj-preview">
    <div className="proj-card" id="proj-card">
      <div className="proj-meta">
        <span className="proj-date" id="proj-date">01 2025</span>
        <span className="proj-label">Preview</span>
      </div>
      <img id="proj-cover" src="assets/images/projects/Cogniwire/1.png" alt="" width="1333" height="1000" />
    </div>
  </div>
  <div className="proj-cursor" id="proj-cursor">See project</div>

  <div className="page-fade" id="page-fade"></div>
  <div className="flying-title" id="flying-title"></div>
  <div className="work-transition-overlay" id="work-transition-overlay"></div>
  <div className="work-flying-text" id="work-flying-text">Work</div>

  <section className="project-detail" id="project-detail">
    <div className="detail-back chr-hover" id="detail-back" data-chr="🡼BACK"></div>
    <div className="detail-info">
      <div className="detail-title-wrap" id="detail-title-wrap">
        <h1 className="detail-title" id="detail-title"></h1>
        <span className="detail-year" id="detail-year"></span>
      </div>
      <p className="detail-desc" id="detail-desc"></p>
      <div className="detail-tags" id="detail-tags"></div>
      <a className="detail-visit chr-hover" id="detail-visit" target="_blank" rel="noopener noreferrer"
        data-chr="VISIT 🡲"></a>
    </div>
    <div className="detail-gallery-wrap" id="detail-gallery-wrap">
      <div className="detail-thumbs" id="detail-thumbs">
        <div className="detail-thumbs-inner" id="detail-thumbs-inner"></div>
      </div>
      <div className="detail-selected" id="detail-selected"></div>
    </div>
  </section>

  <div className="scroll-pct" id="scroll-pct">(0)</div>
  <div className="scroll-timeline" id="scroll-timeline">
    <span className="st-label" id="st-label"></span>
    <div className="st-bar" id="st-bar"></div>
  </div>

    </>
  );
}

export default App;







