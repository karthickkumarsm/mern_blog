import { Select, TextInput } from 'flowbite-react'
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
        if(e.target.id === 'searchTerm'){
            setSidebarData({
                ...sidebarData,
                searchTerm: e.target.value
            })
    }
        if(e.target.id === 'sort'){
            const order = e.target.value || 'desc';
            setSidebarData({
                ...sidebarData,
                sort:order
            })
        }
        if(e.target.value === 'category'){
            const category = e.target.value || 'uncategorized';
            setSidebarData({
                ...sidebarData,
                category
            })
        }
       
    }

    const handleSubmit = (e) => {
        
    }
    
  return (
    <div className='flex flex-col md:flex-row'>
        <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
            <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
                <div className="flex items-center gap-2">
                    <label className='whitespace-nowrap font-semibold'>Search Term:</label>
                    <TextInput placeholder='Search'
                    id='searchTerm'
                    type='text'
                    value={sidebarData.searchTerm}
                    onChange={handleChange}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <label className='font-semibold'>Sort:</label>
                    <Select onChange={handleChange} value={sidebarData.sort} id='sort'>
                        <option value='desc'>Latest</option>
                        <option value='asc'>Oldest</option>
                    </Select>
                </div>
                <div className="flex items-center gap-2">
                    <label className='font-semibold'>Category:</label>
                    <Select onChange={handleChange} value={sidebarData.category} id='category'>
                    <option value="uncategorized">Uncategorized</option>
                    <option value="dsa">DSA</option>
                    <option value="flutter">Flutter</option>
                    <option value="mern">MERN</option>
                    <option value="nextjs">Next js</option>
                    </Select>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Search