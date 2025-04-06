<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <div class="flex flex-row h-[1440px]">
    <div class="flex flex-col w-full h-[500px] p-6 bg-indigo-300 rounded-lg">
      <div class="flex flex-row bg-gray-200 h-[720px] rounded-lg">
        <div class="flex flex-col w-[200px] p-2">
          <div class="flex flex-col items-center h-full gap-2">
            <div class="flex flex-row text-[10px] gap-1">
              <div>TODAY</div>
              <div>5</div>
              <div>|</div>
              <div>TOTAL</div>
              <div>9999</div>
            </div>
            <div class="flex flex-col items-center justify-between w-full h-full bg-gray-200 border border-gray-400 rounded-lg">
              <div class="flex items-center ">
                <img class="rounded-lg cover" alt="프로필 이미지" src="https://www.spcmagazine.com/wp-content/uploads/2021/11/spc_%ED%95%B8%EB%93%9C%EB%93%9C%EB%A6%BD-00.jpg" />
              </div>
              <div>
                <div class="text-[10px]">・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・</div>
                <div>
                  <div class="text-[10px] flex flex-row gap-1 border border-gray-400 rounded-sm bg-white p-1 mx-1">
                    <div class="font-bold text-sky-500">TODAY IS...</div>
                    <div class="">🌷행복</div>
                  </div>
                  <div class="text-[13px] p-1">
                    간단한 핸드드립 커피 레시피를 제공하는 홈페이지입니다.
                  </div>
                </div>
              </div>
              <div>
                <div class="flex flex-row gap-1 text-[8px]">
                  <button type="button">EDIT</button>
                  <button type="button">HISTORY</button>
                </div>
                <div class="text-[10px]">・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・</div>
                <div class="flex flex-col gap-1">
                  <div>레시피</div>
                  <div class="text-[10px]">h9@h-9.info</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row w-full p-2">
          <div class="flex flex-col w-full">
            <div class="flex flex-row items-center">
              <div class="text-lg font-bold text-indigo-800">
                나의 레시피 홈
              </div>
              <button type="button" class="text-[8px] font-bold px-[2px] text-white bg-blue-400 border border-indigo-800">EDIT</button>
            </div>
            <div class="flex flex-row w-full h-full">
              <main class="flex flex-col w-full h-full bg-white border border-gray-400 rounded-lg">
                <RouterView />
              </main>
              <div class="flex flex-col w-[80px] pt-1">
                <button type="button" class="w-full p-1 text-left bg-white border border-gray-800 rounded-r-lg">홈</button>
                <button type="button" class="w-full p-1 text-left text-white bg-indigo-400 border border-gray-800 rounded-r-lg">프로필</button>
                <button type="button" class="w-full p-1 text-left text-white bg-indigo-400 border border-gray-800 rounded-r-lg">레시피</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-[600px]">
      <button type="button">랜덤</button>
      <button type="button">로그아웃</button>
    </div>

  </div>
</template>
