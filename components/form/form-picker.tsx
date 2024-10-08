"use client";

import Image from "next/image";
import { Loader } from "lucide-react";
import { FormPickerPropsType } from "@/types/form-picker-props";
import { unsplash } from "@/utils/unsplash";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { cn } from "@/utils/utils";
import { defaultImages } from "@/constant/images";

export default function FormPicker({ id, errors }: FormPickerPropsType) {
  const { pending } = useFormStatus();
  const [images, setImages] =
    useState<Array<Record<string, any>>>(defaultImages);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const result = await unsplash.photos.getRandom({
          collectionIds: ["317099"],
          count: 9,
        });
        if (result && result.response) {
          const newImages = result.response as Array<Record<string, any>>;
          setImages(newImages);
        } else {
          console.error("No images found");
        }
      } catch (error) {
        console.log(error);
        setImages([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center p-6 justify-center">
        <Loader className="w-6 h-6 text-secondary-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-2 mb-2">
        {images.map((image) => (
          <div
            key={image.id}
            className={cn(
              "cursor-pointer relative aspect-video group hover:opacity-75",
              pending && "opacity-50 hover:opacity-50 cursor-pointer"
            )}
            onClick={() => {
              if (pending) return;
              setSelectedImageId(image.id);
            }}
          >
            <Image
              fill
              className="object-cover rounded-sm"
              alt="unsplash images"
              src={image.urls.thumb}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
