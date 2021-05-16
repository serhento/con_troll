import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        movies: {},
        movie_item:{}
    },
    mutations:{
        SET_PRODUCTS_TO_STATE:(state, products)=>{
            state.movies = products
        },
        SET_MOVIE_TO_STATE:(state, film)=>{
            state.movie_item = film
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}){
            return axios('https://floating-sierra-20135.herokuapp.com/api/movies', {
                method: "GET"
            })
                .then((products)=>{
                    commit('SET_PRODUCTS_TO_STATE', products.data.data);
                    return products;
                }).catch((error)=>{
                    console.log(error);
                    return error;
                })
        },
        GET_MOVIE_FROM_API({commit}, id){
            return axios(`https://floating-sierra-20135.herokuapp.com/api/movie/${id}`,{
                method: "GET"
            })
                .then((film)=>{
                    commit('SET_MOVIE_TO_STATE', film.data.data);
                    return film;
                }).catch((error)=>{
                    console.log(error);
                    return error;
                })
        }

    },
    getters:{
        MOVIES(state){
            return state.movies;
        },
        MOVIE(state){
            return state.movie_item;
        }
    }
});

export default store;
