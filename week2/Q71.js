// Q71 Build Array from Permutation
{
    function buildArray(nums) {

        let ans = [];

        for (let i = 0; i < nums.length; i++) {

            ans[i] = nums[nums[i]];
            // ans[0] = nums[ nums[0] ] = nums[0] = 0
            // ans[1] = nums[ nums[1] ] = nums[2] = 1
            // ans[2] = nums[ nums[2] ] = nums[1] = 2
            // ans[3] = nums[ nums[3] ] = nums[5] = 4
            // ans[4] = nums[ nums[4] ] = nums[3] = 5
            // ans[5] = nums[ nums[5] ] = nums[4] = 3
        }

        return ans;
    }

    console.log(buildArray([0, 2, 1, 5, 3, 4])); // [0,1,2,4,5,3]
}
