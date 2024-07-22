import React, { useEffect, useState } from 'react';

const New = () => {
    const [embedHtml, setEmbedHtml] = useState('Loading latest post...');
    const blogName = 'Tessat-Space';
    const apiKey = 'your-api-key';
    const apiUrl = https://api.tumblr.com/v2/blog/${blogName}.tumblr.com/posts?api_key=${apiKey}&limit=1;

    useEffect(() => {
        const fetchLatestPost = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                const post = data.response.posts[0];
                const oembedUrl = https://www.tumblr.com/oembed/1.0?url=${post.post_url};
                const oembedResponse = await fetch(oembedUrl);
                const embedData = await oembedResponse.json();
                setEmbedHtml(embedData.html);
            } catch (error) {
                console.error('Error fetching Tumblr post:', error);
                setEmbedHtml('Failed to load post.');
            }
        };

        fetchLatestPost();
    }, [apiUrl]);

    return (
        <div 
            id="tumblr-post"
            style={{
                width: '100%',
                maxWidth: '600px',
                margin: '0 auto',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px'
            }}
            dangerouslySetInnerHTML={{ __html: embedHtml }}
        />
    );
};

export default New;