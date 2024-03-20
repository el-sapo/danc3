import React from 'react';

interface WrittenPostsProps {
    posts: string[];
}

const WrittenPosts: React.FC<WrittenPostsProps> = ({ posts }) => {
    return (
        <div
            style={{
                width: '100%',
                overflowX: 'auto',
                borderRadius: '10px',
                padding: '10px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}
        >
            {posts.map((post, index) => (
                <div
                    key={index}
                    style={{
                        minWidth: '100px',
                        maxWidth: '150px',
                        height: '100px',
                        borderRadius: '10px',
                        backgroundColor: '#eaeaea',
                        margin: '0 10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap',
                        wordWrap: 'break-word',
                    }}
                >
                    {post}
                </div>
            ))}
        </div>
    );
};

export default WrittenPosts;