import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, SafeAreaView, View, WebView } from 'react-native';
import { Card, Paragraph, Title, Appbar, Provider as PaperProvider } from 'react-native-paper';
import WebViewModal from './components/WebViewModal';
import NewsItem from './components/NewsItem';

const newsData = [
  {
    "id": "6051e86631c42cd69c01e29a",
    "title": "Russia looks to China as new space exploration partner",
    "url": "https://spaceflightnow.com/2021/03/15/russia-looks-to-china-as-new-space-exploration-partner/",
    "imageUrl": "https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2021/03/50875730681_b4e2d8c6cc_k.jpg",
    "newsSite": "Spaceflight Now",
    "summary": "Russia’s decision to partner with China on a planned lunar research station, and not join the U.S.-led Artemis moon program, was disappointing after more than two decades of cooperation on the International Space Station, says NASA’s top human spaceflight official.",
    "publishedAt": "2021-03-15T10:25:18.000Z",
    "updatedAt": "2021-03-17T14:07:25.840Z",
    "featured": false,
    "launches": [],
    "events": [
      {
        "id": "108",
        "provider": "Launch Library 2"
      }
    ]
  },
  {
    "id": "6051e86631c42cd69c01e29b",
    "title": "SpaceX extends its own rocket reuse record on Starlink launch",
    "url": "https://spaceflightnow.com/2021/03/14/spacex-extends-its-own-rocket-reuse-record-on-starlink-launch/",
    "imageUrl": "https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2021/03/l21_1.jpg",
    "newsSite": "Spaceflight Now",
    "summary": "Using a Falcon 9 booster flying for a record ninth time, SpaceX’s swift sequence of launches continued Sunday with a predawn liftoff from the Kennedy Space Center carrying another set of 60 Starlink internet satellites, the company’s third mission in 10 days.",
    "publishedAt": "2021-03-14T10:25:18.000Z",
    "updatedAt": "2021-03-17T13:18:13.974Z",
    "featured": false,
    "launches": [],
    "events": []
  },
  {
    "id": "6051e86631c42cd69c01e29c",
    "title": "China launches spy satellite triplet for third time this year",
    "url": "https://spaceflightnow.com/2021/03/14/china-launches-spy-satellite-triplet-for-third-time-this-year/",
    "imageUrl": "https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2021/03/lm4cliftoff.jpg",
    "newsSite": "Spaceflight Now",
    "summary": "Three Chinese military satellites launched Saturday aboard a Long March 4C rocket, joining six others China has sent into orbit since the start of the year on ocean surveillance missions.",
    "publishedAt": "2021-03-14T10:25:18.000Z",
    "updatedAt": "2021-03-17T13:18:13.978Z",
    "featured": false,
    "launches": [],
    "events": []
  },
  {
    "id": "6051e86631c42cd69c01e29d",
    "title": "SpaceX rocket rolls out to pad 39A for next Starlink mission",
    "url": "https://spaceflightnow.com/2021/03/13/spacex-rocket-rolls-out-to-pad-39a-for-next-starlink-mission/",
    "imageUrl": "https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2021/03/starlink_stack.jpg",
    "newsSite": "Spaceflight Now",
    "summary": "For the third time in 10 days, SpaceX is readying a Falcon 9 rocket for launch Sunday from Florida’s Space Coast with another 60 Starlink internet satellites. This time, SpaceX aims to extend the record for reusing a Falcon 9 booster to nine flights.",
    "publishedAt": "2021-03-13T10:25:18.000Z",
    "updatedAt": "2021-03-17T13:18:13.976Z",
    "featured": false,
    "launches": [],
    "events": []
  },
  {
    "id": "6051e86631c42cd69c01e29e",
    "title": "Spacewalkers vent coolant lines and mate cables outside space station",
    "url": "https://spaceflightnow.com/2021/03/13/us-eva-73/",
    "imageUrl": "https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2021/03/EwYahUDWgAYaavi.jpg",
    "newsSite": "Spaceflight Now",
    "summary": "Struggling with balky electrical connectors, spacewalker Mike Hopkins managed to plug in and secure three of four thick power and data cables Saturday that are needed by a European experiment platform, leaving one cable for additional troubleshooting.",
    "publishedAt": "2021-03-13T10:25:18.000Z",
    "updatedAt": "2021-03-17T13:18:13.977Z",
    "featured": false,
    "launches": [],
    "events": []
  },
  {
    "id": "6051e86631c42cd69c01e29f",
    "title": "Garbage pallet jettisoned from space station will stay in orbit two-to-four years",
    "url": "https://spaceflightnow.com/2021/03/12/garbage-pallet-jettisoned-from-space-station-will-stay-in-orbit-two-to-four-years/",
    "imageUrl": "https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2021/03/ep9.jpeg",
    "newsSite": "Spaceflight Now",
    "summary": "NASA ground controllers sent commands to the International Space Station on Thursday for release of a 2.9-ton cargo pallet loaded with old batteries, the most massive object ever jettisoned from the orbiting outpost. The garbage carrier is expected to remain in orbit for two-to-four years before re-entering the atmosphere.",
    "publishedAt": "2021-03-12T10:25:18.000Z",
    "updatedAt": "2021-03-17T13:18:13.985Z",
    "featured": false,
    "launches": [],
    "events": []
  },
  {
    "id": "6051e86631c42cd69c01e2a0",
    "title": "Hubble resumes science observations after software error",
    "url": "https://spaceflightnow.com/2021/03/12/hubble-resumes-science-observations-after-software-error/",
    "imageUrl": "https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2015/04/s125e007257.jpg",
    "newsSite": "Spaceflight Now",
    "summary": "NASA has partially restored the Hubble Space Telescope to science mode after a software error temporarily halted observations, but engineers continue studying a problem that kept the telescope’s aperture door from closing and a separate concern with Hubble’s main camera.",
    "publishedAt": "2021-03-12T10:25:18.000Z",
    "updatedAt": "2021-03-17T13:18:13.982Z",
    "featured": false,
    "launches": [],
    "events": []
  },
  {
    "id": "6051e86631c42cd69c01e2a1",
    "title": "China’s Long March 7A rocket successful on second flight",
    "url": "https://spaceflightnow.com/2021/03/12/chinas-long-march-7a-rocket-successful-on-second-flight/",
    "imageUrl": "https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2021/03/lm7a.jpg",
    "newsSite": "Spaceflight Now",
    "summary": "The second flight of China’s new medium-lift Long March 7A rocket successfully placed an experimental satellite into orbit Thursday, following a failed launch of the same configuration last year caused by a problem in a booster liquid oxygen system.",
    "publishedAt": "2021-03-12T10:25:18.000Z",
    "updatedAt": "2021-03-17T13:18:13.975Z",
    "featured": false,
    "launches": [],
    "events": []
  },
  {
    "id": "6051e86631c42cd69c01e2a2",
    "title": "SpaceX adds more satellites to Starlink internet fleet",
    "url": "https://spaceflightnow.com/2021/03/11/spacex-adds-more-satellites-to-starlink-internet-fleet/",
    "imageUrl": "https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2021/03/starlink_l21_.jpg",
    "newsSite": "Spaceflight Now",
    "summary": "Continuing a high-tempo launch cadence, SpaceX delivered another batch of 60 Starlink internet satellites to orbit early Thursday after a seemingly flawless liftoff from Cape Canaveral aboard a Falcon 9 rocket.",
    "publishedAt": "2021-03-11T10:25:18.000Z",
    "updatedAt": "2021-03-17T13:18:13.995Z",
    "featured": false,
    "launches": [],
    "events": []
  },
  {
    "id": "604046690d56f8001c3f7874",
    "title": "Starship goes up. Starship goes down. But is the program moving forward?",
    "url": "https://arstechnica.com/science/2021/03/starship-goes-up-starship-goes-down-but-is-the-program-moving-forward/",
    "imageUrl": "https://cdn.arstechnica.net/wp-content/uploads/2021/03/SN10-Mar-3-2021-0265.jpg",
    "newsSite": "Arstechnica",
    "summary": "\"One day, the true measure of success will be that Starship flights are commonplace.\"",
    "publishedAt": "2021-03-04T02:20:09.000Z",
    "updatedAt": "2021-03-04T06:44:43.817Z",
    "featured": false,
    "launches": [
      {
        "id": "c0ac9a61-5aac-40d7-9919-3c29ea7d4172",
        "provider": "Launch Library 2"
      }
    ],
    "events": []
  }
];

export default function App() {
  const [openWebView, setOpenWebView] = useState(false);
  const [webViewUri, setWebViewUri] = useState('');
  const newsItemClickHandler = (item) => {
    setWebViewUri(item.url);
    setOpenWebView(true);
  };
  const webViewModalCloseHandler = () => {
    setOpenWebView(false);
  }
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Spacenews Reader" subtitle="Bringing you the latest spacenews" />
        </Appbar.Header>
        <WebViewModal openWebView={openWebView} uri={webViewUri} onWebViewModalClose={webViewModalCloseHandler} />
        <FlatList
            data={newsData}
            renderItem={({ item }) => (
              <NewsItem item={item} onItemClickHandler={newsItemClickHandler} />
            )}
            keyExtractor={item => item.id}
          />
          
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  cardContainer: {
    padding: 10
  }
});
