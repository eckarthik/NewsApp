import React, {PureComponent} from 'react';
import NewsCard from '../../components/NewsCard/NewsCard';
import AppHeader from '../../components/AppHeader/AppHeader';
import {View,ScrollView,FlatList,RefreshControl} from 'react-native';
import Loader from '../../components/Loader/Loader';
import NetInfo from "@react-native-community/netinfo";
import Error from '../../components/Error/Error';
import NoInternetError from "../../components/NoInternetError/NoInternetError";

const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };


class News extends PureComponent {
    state = {
        newsData:null,
        isInternetAvailable:true,
        articlesFound:true,
        refreshing:false
    }

    fetchNewsArticles = () => {
        NetInfo.fetch().then(connectivity => {
            if(connectivity.isInternetReachable) {
                fetch("http://newsapi.org/v2/everything?q="+this.props.name+"&sortBy=publishedAt&language=en&apiKey=47cc24ef960b44559964fda4a685e33b")
                .then(response => response.json())
                .then(response => {
                    this.setState({newsData:response,isInternetAvailable:true})
                })
            }
            else {
                this.setState({isInternetAvailable:false})
            }
          });
    }

    onRefresh = () => {
        this.fetchNewsArticles()
    }
    
    checkInternetConnectivity = () => {
        this.fetchNewsArticles()
    }

    componentDidMount() {
        this.fetchNewsArticles()
    }

    render() {
        let newsData = <View><Loader/></View>;
        if(this.state.newsData) {
            if(this.state.newsData.articles.length) {
                newsData = this.state.newsData.articles.map((news,index) => {
                    return <NewsCard
                            newsFullURL={news.url}
                            key={news.url+index} 
                            imageURL={news.urlToImage} 
                            newsTitle={news.title} 
                            newsDescription={news.description}
                            publishedAt={news.publishedAt}
                            newsSource={news.source.name}/>
                })
            }
            else {
                newsData = <Error errorMessage="No articles found"/>
            }
            
        }
        else if(!this.state.isInternetAvailable) {
            newsData = <NoInternetError clicked={this.checkInternetConnectivity}/>
        }
        return (
            <React.Fragment>
                <FlatList
                    ItemSeparatorComponent={renderSeparator}
                    ListHeaderComponent={<AppHeader {...this.props} newsCategory={this.props.name}/>}
                />
                <ScrollView refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} title="Fetching new content"/>
                }>
                    {newsData}
                </ScrollView>
            </React.Fragment>
            
        )
    }
}

export default News;