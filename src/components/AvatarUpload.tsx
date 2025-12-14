import React, { useState } from 'react';
import { supabase } from '../supabase';

interface Props {
  url: string | null;
  onUpload: (url: string) => void;
  uid: string;
}

const AvatarUpload: React.FC<Props> = ({ url, onUpload, uid }) => {
  const [uploading, setUploading] = useState(false);

  const uploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('이미지를 선택해주세요.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${uid}-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      // 1. 수파베이스 스토리지에 업로드
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // 2. 업로드된 이미지의 공개 주소 가져오기
      const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
      
      // 3. 부모 컴포넌트(MyPage)에게 주소 전달
      onUpload(data.publicUrl);

    } catch (error: any) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="relative group">
        <div className="w-32 h-32 rounded-full p-1 bg-[#111] cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border-4 border-[#222] shadow-2xl relative">
                
                {/* 이미지 표시 */}
                {url ? (
                    <img src={url} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                    <span className="text-4xl">🏎️</span>
                )}

                {/* 로딩 중 표시 */}
                {uploading && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white text-xs font-bold animate-pulse">Uploading...</span>
                    </div>
                )}
                
                {/* 카메라 아이콘 (호버 시 등장) */}
                {!uploading && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="text-2xl">📷</span>
                    </div>
                )}
            </div>
        </div>
        
        {/* 실제 파일 선택 인풋 (숨겨둠) */}
        <input
            type="file"
            id="single"
            accept="image/*"
            onChange={uploadAvatar}
            disabled={uploading}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
    </div>
  );
};

export default AvatarUpload;