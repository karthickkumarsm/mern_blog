import { TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const Search = () => {
    const [sidebarData, setSidebarData] = useState({
        searchTerm: '',
        sort: 'desc',
        category: 'uncategorized',
    });
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const location = useLocation();
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const searchTermfromUrl = urlParams.get('searchTerms');
      const sortFromUrl = urlParams.get('sort');
      const categoryFromUrl = urlParams.get('category');
      if(searchTermfromUrl || sortFromUrl || categoryFromUrl){
        setSidebarData({
            ...sidebarData,
            searchTerm:searchTermfromUrl,
            sort: sortFromUrl,
            category: categoryFromUrl,
        })
      }
      const fetchPosts = async() => {
        setLoading(true);
        const searchQuery = urlParams.toString();
        const res = await fetch(`/api/post/getposts?${searchQuery}`);
        if(!res.ok){
            setLoading(false);
            return;
        }
        if(res.ok){
            const data = await res.json();
            setPosts(data.posts);
            setLoading(false);
            if(data.posts.length === 9){
                setShowMore(true);
            }
            else{
                setShowMore(false);
            }
        }
      }
      fetchPosts();
    }, [location.search]);

    const handleChange = (e) => {
        
    }
    
  return (
    <div>
        <div className="">
            <form>
                <div className="">
                    <label>Search Term:</label>
                    <TextInput placeholder='Search'
                    id='searchTerm'
                    type='text'
                    value={sidebarData.searchTerm}
                    onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Search