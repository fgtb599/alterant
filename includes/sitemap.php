<?php
    header ("Content-Type:text/xml");
    require '../includes/config.php';    
    $pdo = $db->query('SELECT page FROM meta');
    $i=0;
    $sitemap = "\t<url>\n\t\t<loc>https://alterant.com.ua/</loc>\n\t\t<changefreq>monthly</changefreq>\n\t</url>\n\t<url>\n\t\t<loc>https://alterant.com.ua/ua</loc>\n\t\t<changefreq>monthly</changefreq>\n\t</url>\n\t<url>\n\t\t<loc>https://alterant.com.ua/ru</loc>\n\t\t<changefreq>monthly</changefreq>\n\t</url>\n";
    while ($row = $pdo->fetch(PDO::FETCH_ASSOC)) {
        if($row['page'] != '/') {
            if($i===0) {
                $sitemap .= "\t<url>\n\t\t<loc>https://alterant.com.ua/ua".$row['page']."</loc>\n\t\t<changefreq>monthly</changefreq>\n\t</url>\n";
                $i=1;
            } else {
                    $sitemap .= "\t<url>\n\t\t<loc>https://alterant.com.ua/ru".$row['page']."</loc>\n\t\t<changefreq>monthly</changefreq>\n\t</url>\n";
                    $i=0;
                }
        }
    }
    echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n".$sitemap."</urlset>";
