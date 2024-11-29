function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Data Pemilihan KPU')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getCacheData(url) {
  try {
    const cache = CacheService.getScriptCache();
    const cacheKey = Utilities.base64EncodeWebSafe(url);
    const cached = cache.get(cacheKey);
    
    if (cached != null) {
      console.log('Cache hit for:', url);
      return JSON.parse(cached);
    }
    
    console.log('Fetching from URL:', url);
    const options = {
      'muteHttpExceptions': true,
      'validateHttpsCertificates': false,
      'followRedirects': true
    };
    
    const response = UrlFetchApp.fetch(url, options);
    const responseCode = response.getResponseCode();
    
    if (responseCode !== 200) {
      console.error('HTTP Error:', responseCode, 'for URL:', url);
      throw new Error(`HTTP Error ${responseCode}`);
    }
    
    const data = response.getContentText();
    
    // Batasi ukuran data yang akan di-cache
    if (data.length < 100000) { // 100KB limit
      cache.put(cacheKey, data, 300); // Cache for 5 minutes
    }
    
    return JSON.parse(data);
  } catch (error) {
    console.error('Error in getCacheData:', error, 'URL:', url);
    throw error;
  }
}

function getWilayahData(level) {
  try {
    const url = 'https://sirekappilkada-obj-data.kpu.go.id/wilayah/pilkada/pkwkp/0.json';
    console.log('Fetching wilayah data:', level, url);
    return getCacheData(url);
  } catch (error) {
    console.error('Error in getWilayahData:', error);
    throw error;
  }
}

function getWilayahLevel2(provinceCode) {
  try {
    const url = `https://sirekappilkada-obj-data.kpu.go.id/wilayah/pilkada/pkwkp/${provinceCode}.json`;
    console.log('Fetching wilayah level 2 data for province:', provinceCode);
    return getCacheData(url);
  } catch (error) {
    console.error('Error in getWilayahLevel2:', error);
    throw error;
  }
}

function getPaslonData() {
  try {
    const url = 'https://sirekappilkada-obj-data.kpu.go.id/pilkada/paslon/pkwkk.json';
    console.log('Fetching paslon data');
    const data = getCacheData(url);
    // Batasi jumlah data yang dikembalikan
    return data;
  } catch (error) {
    console.error('Error in getPaslonData:', error);
    throw error;
  }
}

function getHasilData(provinceCode) {
  try {
    const url = `https://sirekappilkada-obj-data.kpu.go.id/pilkada/hhcw/pkwkk/${provinceCode}.json`;
    console.log('Fetching hasil data for province:', provinceCode);
    const data = getCacheData(url);
    // Hanya ambil data yang diperlukan
    if (data && data.tungsura) {
      return {
        mode: data.mode,
        tungsura: {
          chart: data.tungsura.chart,
          table: data.tungsura.table
        },
        ts: data.ts
      };
    }
    return data;
  } catch (error) {
    console.error('Error in getHasilData:', error);
    throw error;
  }
}
